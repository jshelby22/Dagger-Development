import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const legacyPages = [
  'https://daggerdev.com/privacy-policy',
  'https://daggerdev.com/campkeep-privacy.html',
  'https://daggerdev.com/campkeep-support.html',
  'https://daggerdev.com/pocket-lab-privacy.html',
  'https://daggerdev.com/pocket-lab-support.html',
  'https://daggerdev.com/daywarden/',
  'https://daggerdev.com/daywarden/privacy/',
  'https://daggerdev.com/daywarden/support/',
];

export default defineConfig({
  site: 'https://daggerdev.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      customPages: legacyPages,
      filter: (page) => !page.includes('google240690021f7b9f90.html'),
    }),
  ],
});
