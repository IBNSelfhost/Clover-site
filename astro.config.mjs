// @ts-check
import { defineConfig } from 'astro/config';

// Static site (no adapter): Cloudflare Pages preset "Astro" → `npm run build`, output `dist`.
export default defineConfig({
  site: 'https://clover.ibn5100.de',
  output: 'static',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },   // zh at /, en at /en/
  },
});
