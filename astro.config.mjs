// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { writeFileSync } from 'node:fs';
import { redirects } from './src/redirects.mjs';

const SITE = 'https://www.gobiya.com';

/**
 * Astro can only pre-render a redirect whose source is a literal path — a
 * parameterised source like `/locations/[city]` needs a server to match it.
 * Those are still emitted to the host config below, where they become real
 * 301s, so nothing is lost; they are just filtered out of the Astro build.
 */
const staticRedirects = Object.fromEntries(
  Object.entries(redirects).filter(([source]) => !source.includes('[')),
);

/**
 * Astro's own static redirects are meta-refresh pages. Google follows those,
 * but treats them as weaker than a real 301 — and this site is carrying three
 * generations of accumulated link equity, so weaker is not good enough.
 *
 * Emitting the map in both Netlify and Vercel syntax means whichever host this
 * lands on serves genuine 301s at the edge, before Astro's fallback page is
 * ever reached.
 */
function emitHostRedirects() {
  return {
    name: 'gobiya:host-redirects',
    hooks: {
      /** @param {{ dir: URL }} ctx */
      'astro:build:done': ({ dir }) => {
        const entries = Object.entries(redirects);

        const netlify = entries
          .map(([source, destination]) => {
            // `[city]` → `:city`, and a trailing param becomes a splat so the
            // captured segment is dropped rather than appended.
            const from = source.replace(/\[(\.\.\.)?(\w+)\]/g, ':$2');
            const to = destination.replace(/\[(\.\.\.)?(\w+)\]/g, ':$2');
            return `${from}  ${to}  301!`;
          })
          .join('\n');
        writeFileSync(new URL('_redirects', dir), `${netlify}\n`);

        const vercel = {
          redirects: entries.map(([source, destination]) => ({
            source: source.replace(/\[(\.\.\.)?(\w+)\]/g, ':$2'),
            destination: destination.replace(/\[(\.\.\.)?(\w+)\]/g, ':$2'),
            permanent: true,
          })),
        };
        writeFileSync(new URL('vercel.json', dir), JSON.stringify(vercel, null, 2));
      },
    },
  };
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: staticRedirects,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy'),
    }),
    emitHostRedirects(),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
