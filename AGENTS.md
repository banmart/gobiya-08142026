# Gobiya — Astro static site

This project was migrated from Next.js 16 to Astro on 2026-08-14. The previous
`AGENTS.md` block here was written and re-added by `next dev`; Next is gone, so
it no longer applies and will not come back.

## Shape

- **Astro 7, static output.** No adapter, no SSR, no server runtime.
- **Zero client framework.** No React, no animation library. The three motion
  primitives are CSS plus ~80 lines of vanilla JS in `Base.astro`, `Nav.astro`
  and `Services.astro`.
- **Styling is CSS Modules + design tokens** in `src/styles/globals.css`, with
  Tailwind 4 available via `@tailwindcss/vite`. Tokens first — do not
  hard-code a colour, space or type size that already has a variable.

## Content is data, not markup

Everything the pages render comes from `src/data/`, most of it carried over
verbatim from the previous build. `services.js`, `servicesFlat.js`,
`insights.js`, `work.js`, `areas.js` and `testimonials.js` are the source of
truth. Add a service by editing `serviceIndex.js`, not by adding a page.

**Facts in these files are real and must stay that way.** Client quotes are
verbatim Google reviews. Metrics trace to a client-approved case study. Prices
are the ones published in the site's own FAQ. If a claim loses its source, take
it out rather than leaving it in unsourced — the previous build shipped visible
`PENDING` placeholders for exactly this reason.

## SEO is load-bearing

This site carries three generations of accumulated ranking signal.

- `src/redirects.mjs` holds the full 301 map. Every entry was a live, indexed
  URL at some point. **Do not delete entries.** Destinations must be real pages,
  reachable in one hop.
- `astro.config.mjs` emits `_redirects` (Netlify) and `vercel.json` at build so
  the host serves genuine 301s rather than Astro's meta-refresh fallback.
- `Seo.astro` is the only place `<head>` signals are set. Every page needs a
  title, a description and a canonical; it enforces that by construction.
- `robots.txt` and `llms.txt` are generated from the same data the pages use.

Before claiming SEO work is done, build and re-run the assessment: one `<h1>` per
page, unique canonicals, valid JSON-LD, no thin pages.

## Commands

```bash
npm run dev      # localhost:4321
npm run build    # static output to dist/
npm run check    # astro check (types)
```
