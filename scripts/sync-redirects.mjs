/**
 * Writes the redirect map out to the host config files that have to exist at
 * the repo root, and checks they are current.
 *
 * `src/redirects.mjs` is the single source of truth. Netlify reads
 * `dist/_redirects`, which the build emits directly — but Vercel reads
 * `vercel.json` from the repo ROOT, and it reads it *before* running the
 * build, so a file written during the build is never seen. That one has to be
 * committed.
 *
 *   node scripts/sync-redirects.mjs          # write vercel.json
 *   node scripts/sync-redirects.mjs --check  # fail if it is out of date
 *
 * The --check mode runs as part of `npm run build`, so adding a redirect and
 * forgetting to regenerate fails loudly instead of quietly shipping a 404.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { redirects } from '../src/redirects.mjs';

const OUT = fileURLToPath(new URL('../vercel.json', import.meta.url));
const check = process.argv.includes('--check');

// `[city]` is Astro's syntax; Vercel wants `:city`.
const toVercel = (value) => value.replace(/\[(\.\.\.)?(\w+)\]/g, ':$2');

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  cleanUrls: true,
  trailingSlash: false,
  redirects: Object.entries(redirects).map(([source, destination]) => ({
    source: toVercel(source),
    destination: toVercel(destination),
    permanent: true,
  })),
};

const next = `${JSON.stringify(config, null, 2)}\n`;

if (check) {
  // Compare parsed content, never the raw text. Git checks this file out with
  // CRLF on Windows and LF on the Linux build machine, so a string comparison
  // reports a file that is byte-different but semantically identical — which
  // failed the deploy on a line ending while the redirects were perfectly fine.
  let current = null;
  try {
    current = JSON.parse(readFileSync(OUT, 'utf8'));
  } catch {
    /* missing or unparseable counts as out of date */
  }

  if (JSON.stringify(current) !== JSON.stringify(config)) {
    console.error(
      '\nvercel.json is out of date with src/redirects.mjs.\n' +
        'Run `npm run redirects:sync` and commit the result.\n',
    );
    process.exit(1);
  }

  console.log(`vercel.json is current (${config.redirects.length} redirects).`);
} else {
  writeFileSync(OUT, next);
  console.log(`Wrote vercel.json with ${config.redirects.length} redirects.`);
}
