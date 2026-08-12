#!/usr/bin/env python3
"""Deterministic post-build checks for the DaggerDev static artifact."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import hashlib
import json
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
GENERATED = {
    "index.html": "https://daggerdev.com/",
    "apps/index.html": "https://daggerdev.com/apps/",
    "apps/glassledger/index.html": "https://daggerdev.com/apps/glassledger/",
    "apps/alchemy-pocketlab/index.html": "https://daggerdev.com/apps/alchemy-pocketlab/",
}
REQUIRED_SITEMAP = set(GENERATED.values()) | {
    "https://daggerdev.com/privacy-policy",
    "https://daggerdev.com/campkeep-privacy.html",
    "https://daggerdev.com/campkeep-support.html",
    "https://daggerdev.com/pocket-lab-privacy.html",
    "https://daggerdev.com/pocket-lab-support.html",
    "https://daggerdev.com/daywarden/",
    "https://daggerdev.com/daywarden/privacy/",
    "https://daggerdev.com/daywarden/support/",
}
GOOGLE_FILE = "google240690021f7b9f90.html"
GOOGLE_SHA256 = "4b106ab240f5afb837efa639b165c078b34d90c0bc31582c788ccf852f60031f"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_parts = []
        self.in_title = False
        self.h1_count = 0
        self.metas = []
        self.links = []
        self.refs = []
        self.images = []
        self.json_ld = []
        self.in_json_ld = False
        self.json_parts = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "title":
            self.in_title = True
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "meta":
            self.metas.append(values)
        elif tag == "link":
            self.links.append(values)
            if values.get("href"):
                self.refs.append(("href", values["href"]))
        elif tag == "a" and values.get("href"):
            self.refs.append(("href", values["href"]))
        elif tag in {"img", "script", "source"}:
            for attr in ("src", "srcset"):
                if values.get(attr):
                    self.refs.append((attr, values[attr]))
            if tag == "img":
                self.images.append(values)
        if tag == "script" and values.get("type") == "application/ld+json":
            self.in_json_ld = True
            self.json_parts = []

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "script" and self.in_json_ld:
            self.in_json_ld = False
            self.json_ld.append("".join(self.json_parts).strip())
            self.json_parts = []

    def handle_data(self, data):
        if self.in_title:
            self.title_parts.append(data)
        if self.in_json_ld:
            self.json_parts.append(data)

    @property
    def title(self):
        return " ".join("".join(self.title_parts).split())

    def meta(self, key, value):
        return next((item.get("content") for item in self.metas if item.get(key) == value), None)

    def canonical(self):
        return next((item.get("href") for item in self.links if item.get("rel") == "canonical"), None)


def fail(message):
    raise AssertionError(message)


def resolve_local(current_file, raw):
    raw = raw.split(",", 1)[0].strip().split()[0]
    parsed = urlparse(raw)
    if parsed.scheme or raw.startswith("//") or raw.startswith("#") or raw.startswith("mailto:") or raw.startswith("tel:"):
        return None
    path = parsed.path
    if not path:
        return None
    if path.startswith("/"):
        candidate = DIST / path.lstrip("/")
    else:
        candidate = current_file.parent / path
    candidates = [candidate]
    if path.endswith("/") or candidate.is_dir():
        candidates.append(candidate / "index.html")
    if not candidate.suffix:
        candidates.extend([candidate.with_suffix(".html"), candidate / "index.html"])
    return candidates


def main():
    if not DIST.is_dir():
        fail("dist/ is missing; run npm run build first")

    parsed_pages = {}
    all_titles = []
    checked_refs = 0

    for html_path in sorted(DIST.rglob("*.html")):
        if html_path.name == GOOGLE_FILE:
            continue
        parser = PageParser()
        parser.feed(html_path.read_text(encoding="utf-8"))
        rel = html_path.relative_to(DIST).as_posix()
        parsed_pages[rel] = parser

        if not parser.title:
            fail(f"Missing title: {rel}")
        all_titles.append(parser.title)
        if not parser.meta("name", "description"):
            fail(f"Missing description: {rel}")
        if parser.h1_count != 1:
            fail(f"Expected exactly one H1 in {rel}; found {parser.h1_count}")
        if not parser.canonical():
            fail(f"Missing canonical: {rel}")

        for image in parser.images:
            if not image.get("alt"):
                fail(f"Missing image alt text: {rel}")
            if not image.get("width") or not image.get("height"):
                fail(f"Missing image dimensions: {rel} -> {image.get('src')}")

        for attr, ref in parser.refs:
            if attr == "srcset":
                refs = [part.strip().split()[0] for part in ref.split(",")]
            else:
                refs = [ref]
            for item in refs:
                candidates = resolve_local(html_path, item)
                if candidates is None:
                    continue
                checked_refs += 1
                if not any(path.exists() for path in candidates):
                    pretty = ", ".join(str(path.relative_to(DIST)) if path.is_relative_to(DIST) else str(path) for path in candidates)
                    fail(f"Broken local reference in {rel}: {item} -> {pretty}")

    if len(all_titles) != len(set(all_titles)):
        fail(f"Duplicate page titles: {all_titles}")

    for rel, canonical in GENERATED.items():
        page = parsed_pages.get(rel)
        if page is None:
            raise AssertionError(f"Missing generated page: {rel}")
        if page.canonical() != canonical:
            fail(f"Canonical mismatch in {rel}: {page.canonical()} != {canonical}")
        for prop in ("og:title", "og:description", "og:url", "og:image", "og:image:alt"):
            if not page.meta("property", prop):
                fail(f"Missing {prop}: {rel}")
        for name in ("twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt"):
            if not page.meta("name", name):
                fail(f"Missing {name}: {rel}")
        if len(page.json_ld) != 1:
            fail(f"Expected one JSON-LD block in {rel}; found {len(page.json_ld)}")
        try:
            schema = json.loads(page.json_ld[0])
        except json.JSONDecodeError as error:
            raise AssertionError(f"Invalid JSON-LD in {rel}: {error}") from error
        if rel.startswith("apps/") and rel != "apps/index.html":
            if schema.get("@type") != "SoftwareApplication":
                fail(f"Wrong schema type in {rel}: {schema.get('@type')}")
            if "aggregateRating" in schema or "review" in schema:
                fail(f"Unsupported rating/review schema in {rel}")
            if schema.get("offers", {}).get("price") != "0.00":
                fail(f"Download offer must reflect the verified free App Store price in {rel}")

    sitemap_index = ET.parse(DIST / "sitemap-index.xml")
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    sitemap_locations = [node.text or "" for node in sitemap_index.findall(".//sm:loc", ns)]
    if sitemap_locations != ["https://daggerdev.com/sitemap-0.xml"]:
        fail(f"Unexpected sitemap index: {sitemap_locations}")
    sitemap = ET.parse(DIST / "sitemap-0.xml")
    urls = {node.text or "" for node in sitemap.findall(".//sm:loc", ns)}
    missing = REQUIRED_SITEMAP - urls
    extra = urls - REQUIRED_SITEMAP
    if missing or extra:
        fail(f"Sitemap mismatch; missing={sorted(missing)}, extra={sorted(extra)}")
    if any("localhost" in url or "127.0.0.1" in url for url in urls):
        fail("Sitemap contains a development URL")
    if any(GOOGLE_FILE in url for url in urls):
        fail("Verification artifact must not be in sitemap")

    robots = (DIST / "robots.txt").read_text(encoding="utf-8")
    if "Disallow: /apps" in robots or "Sitemap: https://daggerdev.com/sitemap-index.xml" not in robots:
        fail("robots.txt blocks apps or omits the canonical sitemap")

    for google_path in (ROOT / "public" / GOOGLE_FILE, DIST / GOOGLE_FILE):
        digest = hashlib.sha256(google_path.read_bytes()).hexdigest()
        if digest != GOOGLE_SHA256:
            fail(f"Google verification checksum mismatch in {google_path}: {digest}")

    cname = (DIST / "CNAME").read_text(encoding="utf-8").strip()
    if cname != "daggerdev.com":
        fail(f"CNAME mismatch: {cname!r}")

    print(f"PASS: {len(GENERATED)} generated routes have unique titles, descriptions, canonicals, H1s, social metadata, and valid JSON-LD.")
    print(f"PASS: {checked_refs} local HTML href/src/srcset references resolve in dist/.")
    print(f"PASS: sitemap contains {len(urls)} production URLs and no development or verification URLs.")
    print("PASS: robots.txt allows crawling and advertises https://daggerdev.com/sitemap-index.xml.")
    print(f"PASS: {GOOGLE_FILE} matches the preserved source and built artifact at SHA-256 {GOOGLE_SHA256}.")
    print("PASS: dist/CNAME contains daggerdev.com.")


if __name__ == "__main__":
    try:
        main()
    except (AssertionError, FileNotFoundError, ET.ParseError) as error:
        print(f"FAIL: {error}", file=sys.stderr)
        sys.exit(1)
