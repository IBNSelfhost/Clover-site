# clover-site

Website for **Clover: Notes for Trilium** — landing page, privacy policy and support, in English (default, `/`) and 中文 (`/zh/`).
Built with [Astro](https://astro.build) (static output, built-in i18n). No client-side JavaScript.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Deploy (Cloudflare Pages)

Framework preset **Astro** · build command `npm run build` · output directory `dist` · environment variable `NODE_VERSION=22`.
Custom domain: `clover.ibn5100.de`. `public/_headers` adds security headers.

## Where things live

| What | Where |
|---|---|
| UI strings, feature cards, FAQ, contact email | `src/i18n/ui.ts` — typed, one object per locale |
| Privacy policy text | `src/content/legal/<locale>/privacy.md` — Markdown with `title` + `updated` frontmatter |
| Page shell: head, nav, language switch, footer | `src/layouts/Base.astro` |
| Page bodies | `src/components/{HomePage,LegalPage,SupportPage}.astro` |
| Routes | `src/pages/*.astro` (en, default) and `src/pages/zh/*.astro` — three-line wrappers |
| Icons, security headers | `public/` |

## Adding a language

1. `src/i18n/ui.ts`: add the code to `locales`, a strings object to `ui`, entries in `features` and `faq`, and `htmlLang` in `utils.ts`.
2. `src/content/legal/<code>/privacy.md`.
3. `astro.config.mjs`: add to `i18n.locales`; create `src/pages/<code>/{index,privacy,support}.astro` by copying the `zh/` wrappers.

## Before launch

- Replace `contactEmail` in `src/i18n/ui.ts` and the address in both `privacy.md` files.
- Set `storeHref` in `src/components/Hero.astro` to the App Store URL.
