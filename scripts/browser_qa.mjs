#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';

const CDP_HTTP = 'http://127.0.0.1:9223';
const BASE = 'http://127.0.0.1:4321';
const OUT = '/tmp/daggerdev-qa';
const pages = [
  ['home', '/'],
  ['apps', '/apps/'],
  ['glassledger', '/apps/glassledger/'],
  ['alchemy-pocketlab', '/apps/alchemy-pocketlab/'],
];

await mkdir(OUT, { recursive: true });

const target = await fetch(`${CDP_HTTP}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' }).then((response) => {
  if (!response.ok) throw new Error(`Could not create Chrome target: ${response.status}`);
  return response.json();
});
const ws = new WebSocket(target.webSocketDebuggerUrl);
let nextId = 1;
const pending = new Map();
const events = new Map();
const consoleErrors = [];
const requestFailures = [];
const badResponses = [];

function on(method, callback) {
  const listeners = events.get(method) ?? [];
  listeners.push(callback);
  events.set(method, listeners);
}

function once(method, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeoutMs);
    const callback = (params) => {
      clearTimeout(timer);
      const listeners = events.get(method) ?? [];
      events.set(method, listeners.filter((listener) => listener !== callback));
      resolve(params);
    };
    on(method, callback);
  });
}

function send(method, params = {}) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timed out waiting for CDP command ${method}`));
    }, 30000);
    pending.set(id, { resolve, reject, timer });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true });
  ws.addEventListener('error', reject, { once: true });
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const waiter = pending.get(message.id);
      if (!waiter) return;
      pending.delete(message.id);
      clearTimeout(waiter.timer);
      if (message.error) waiter.reject(new Error(`${message.error.message} (${message.error.code})`));
      else waiter.resolve(message.result);
      return;
    }
    for (const listener of events.get(message.method) ?? []) listener(message.params);
  });
});

on('Runtime.consoleAPICalled', ({ type, args, stackTrace }) => {
  if (type === 'error' || type === 'assert') {
    consoleErrors.push({ type, text: args.map((arg) => arg.value ?? arg.description ?? '').join(' '), stackTrace });
  }
});
on('Runtime.exceptionThrown', ({ exceptionDetails }) => {
  consoleErrors.push({ type: 'exception', text: exceptionDetails.text, exceptionDetails });
});
on('Network.loadingFailed', (failure) => {
  if (!failure.canceled) requestFailures.push(failure);
});
on('Network.responseReceived', ({ response }) => {
  if (response.status >= 400) badResponses.push({ url: response.url, status: response.status, statusText: response.statusText });
});
on('Log.entryAdded', ({ entry }) => {
  if (entry.level === 'error') consoleErrors.push({ type: 'log', text: entry.text, url: entry.url });
});

await Promise.all([
  send('Page.enable'),
  send('Runtime.enable'),
  send('Network.enable'),
  send('Log.enable'),
]);

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function trustedClick(selector) {
  const rect = await evaluate(`(() => { const e = document.querySelector(${JSON.stringify(selector)}); if (!e) return null; e.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' }); const r=e.getBoundingClientRect(); return {x:r.left+r.width/2,y:r.top+r.height/2}; })()`);
  if (!rect) throw new Error(`Missing clickable selector: ${selector}`);
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: rect.x, y: rect.y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: rect.x, y: rect.y, button: 'left', clickCount: 1 });
}

async function loadDeferredImages() {
  return evaluate(`(async () => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const images = [...document.images];
    images.forEach(image => { image.loading = 'eager'; });
    const step = Math.max(300, Math.floor(innerHeight * 0.8));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, left: 0, behavior: 'instant' });
      document.querySelectorAll('.screenshot-rail').forEach(rail => { rail.scrollLeft = rail.scrollWidth; });
      await wait(35);
    }
    await Promise.race([
      Promise.all(images.map(image => image.complete
        ? Promise.resolve()
        : new Promise(resolve => {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
          }))),
      wait(12000),
    ]);
    document.querySelectorAll('.screenshot-rail').forEach(rail => { rail.scrollLeft = 0; });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return images.map(img => ({ src: img.currentSrc || img.src, complete: img.complete, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight }));
  })()`);
}

async function navigate(path) {
  const loaded = once('Page.loadEventFired');
  const result = await send('Page.navigate', { url: `${BASE}${path}` });
  if (result.errorText) throw new Error(`Navigation failed for ${path}: ${result.errorText}`);
  await loaded;
  await evaluate('document.fonts.ready.then(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))');
}

async function capture(filename, width, height) {
  const { visualViewport } = await send('Page.getLayoutMetrics');
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
    clip: { x: visualViewport.pageX, y: visualViewport.pageY, width, height, scale: 1 },
  });
  await writeFile(`${OUT}/${filename}`, Buffer.from(screenshot.data, 'base64'));
}

async function captureSection(filename, selector, width, height) {
  const found = await evaluate(`(() => { const element = document.querySelector(${JSON.stringify(selector)}); if (!element) return false; element.scrollIntoView({ behavior: 'instant', block: 'start' }); return true; })()`);
  if (!found) throw new Error(`Missing section selector: ${selector}`);
  await new Promise((resolve) => setTimeout(resolve, 100));
  await capture(filename, width, height);
}

const report = { generatedAt: new Date().toISOString(), pages: [], interactions: {}, consoleErrors, requestFailures, badResponses };

for (const [name, path] of pages) {
  for (const viewport of [
    { name: 'desktop', width: 1440, height: 1000, mobile: false },
    { name: 'mobile', width: 390, height: 844, mobile: true },
  ]) {
    console.log(`QA ${name}/${viewport.name}: configure`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.mobile,
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    });
    await send('Emulation.setTouchEmulationEnabled', { enabled: viewport.mobile, maxTouchPoints: viewport.mobile ? 5 : 1 });
    console.log(`QA ${name}/${viewport.name}: navigate`);
    await navigate(path);
    console.log(`QA ${name}/${viewport.name}: full-page image pass`);
    const images = await loadDeferredImages();
    console.log(`QA ${name}/${viewport.name}: metrics and screenshot`);
    const metrics = await evaluate(`(() => ({
      url: location.href,
      title: document.title,
      innerWidth,
      innerHeight,
      documentScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      documentScrollHeight: document.documentElement.scrollHeight,
      h1: document.querySelector('h1')?.textContent?.trim(),
      menuDisplay: getComputedStyle(document.querySelector('[data-menu-toggle]')).display,
      navVisibility: getComputedStyle(document.querySelector('[data-nav]')).visibility,
      appStoreLinks: [...document.querySelectorAll('a[href*="apps.apple.com"]')].length,
    }))()`);
    report.pages.push({ name, path, viewport: viewport.name, ...metrics, images });
    await capture(`${name}-${viewport.name}.png`, viewport.width, viewport.height);
    if (viewport.name === 'mobile' && name === 'apps') {
      await captureSection('apps-portfolio-mobile.png', '.portfolio-list', viewport.width, viewport.height);
    }
    if (viewport.name === 'mobile' && name === 'glassledger') {
      await captureSection('glassledger-features-mobile.png', '.app-feature-section', viewport.width, viewport.height);
      await captureSection('glassledger-screenshots-mobile.png', '.screenshots-section', viewport.width, viewport.height);
      await captureSection('glassledger-faq-mobile.png', '.faq-section', viewport.width, viewport.height);
    }
    if (viewport.name === 'desktop' && name === 'glassledger') {
      await captureSection('glassledger-features-desktop.png', '.app-feature-section', viewport.width, viewport.height);
      await captureSection('glassledger-screenshots-desktop.png', '.screenshots-section', viewport.width, viewport.height);
      await captureSection('glassledger-faq-desktop.png', '.faq-section', viewport.width, viewport.height);
    }
    await evaluate(`window.scrollTo({ top: 0, left: 0, behavior: 'instant' })`);
  }
}

console.log('QA interactions: configure mobile');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true, screenWidth: 390, screenHeight: 844 });
console.log('QA interactions: navigate GlassLedger');
await navigate('/apps/glassledger/');
console.log('QA interactions: mobile menu');
const menuBefore = await evaluate(`(() => { const b=document.querySelector('[data-menu-toggle]'); const n=document.querySelector('[data-nav]'); return {expanded:b.getAttribute('aria-expanded'), label:b.querySelector('.sr-only').textContent.trim(), visibility:getComputedStyle(n).visibility}; })()`);
await trustedClick('[data-menu-toggle]');
const menuOpen = await evaluate(`(() => { const b=document.querySelector('[data-menu-toggle]'); const n=document.querySelector('[data-nav]'); return {expanded:b.getAttribute('aria-expanded'), label:b.querySelector('.sr-only').textContent.trim(), visibility:getComputedStyle(n).visibility, pointerEvents:getComputedStyle(n).pointerEvents}; })()`);
await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 });
await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27, nativeVirtualKeyCode: 27 });
const menuClosed = await evaluate(`(() => { const b=document.querySelector('[data-menu-toggle]'); const n=document.querySelector('[data-nav]'); return {expanded:b.getAttribute('aria-expanded'), label:b.querySelector('.sr-only').textContent.trim(), visibility:getComputedStyle(n).visibility, focused:document.activeElement===b}; })()`);
report.interactions.mobileMenu = { before: menuBefore, open: menuOpen, afterEscape: menuClosed };

console.log('QA interactions: FAQ');
const firstFaq = 'details.faq-item';
const faqBefore = await evaluate(`document.querySelector(${JSON.stringify(firstFaq)})?.open`);
await trustedClick(`${firstFaq} summary`);
const faqAfter = await evaluate(`document.querySelector(${JSON.stringify(firstFaq)})?.open`);
report.interactions.faq = { before: faqBefore, afterTrustedClick: faqAfter };

await writeFile(`${OUT}/report.json`, JSON.stringify(report, null, 2));
await fetch(`${CDP_HTTP}/json/close/${target.id}`);
ws.close();

const failures = [];
for (const page of report.pages) {
  const expectedWidth = page.viewport === 'mobile' ? 390 : 1440;
  if (page.innerWidth !== expectedWidth) failures.push(`${page.name}/${page.viewport}: innerWidth ${page.innerWidth} != ${expectedWidth}`);
  if (page.documentScrollWidth > page.innerWidth || page.bodyScrollWidth > page.innerWidth) failures.push(`${page.name}/${page.viewport}: horizontal overflow`);
  const broken = page.images.filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0);
  if (broken.length) failures.push(`${page.name}/${page.viewport}: ${broken.length} broken images`);
}
if (consoleErrors.length) failures.push(`${consoleErrors.length} console error(s)`);
if (requestFailures.length) failures.push(`${requestFailures.length} network loading failure(s)`);
if (badResponses.length) failures.push(`${badResponses.length} HTTP response(s) >= 400`);
if (menuBefore.expanded !== 'false' || menuBefore.visibility !== 'hidden') failures.push('mobile menu was not closed and hidden initially');
if (menuOpen.expanded !== 'true' || menuOpen.visibility !== 'visible' || menuOpen.label !== 'Close navigation') failures.push('mobile menu did not open correctly');
if (menuClosed.expanded !== 'false' || menuClosed.visibility !== 'hidden' || !menuClosed.focused) failures.push('Escape did not close menu and return focus');
if (faqBefore === faqAfter) failures.push('FAQ disclosure did not toggle from a trusted click');

if (failures.length) {
  console.error(`QA FAIL\n- ${failures.join('\n- ')}\nReport: ${OUT}/report.json`);
  process.exit(1);
}
console.log(`QA PASS: ${report.pages.length} page/viewport combinations, true 390px mobile width, no horizontal overflow, all images loaded, no console/network errors, mobile menu and FAQ interactions passed.`);
console.log(`Screenshots and report: ${OUT}`);
