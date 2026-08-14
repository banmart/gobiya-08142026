import type { APIRoute } from 'astro';
import { brand, site } from '../data/site';
import { SERVICE_LINKS } from '../data/serviceIndex.js';
import { INSIGHTS } from '../data/insights.js';
import { CASE_STUDIES } from '../data/work.js';

/**
 * llms.txt — a plain-text map of the site for language models, generated from
 * the same data the pages render so it cannot go stale.
 *
 * The convention is a single markdown document: what the site is, then linked
 * sections with one-line descriptions. Kept to real, live URLs only.
 */
type Service = { href: string; title: string; desc: string };
type Insight = { slug: string; title: string; dek: string; date: string; category: string };
type Study = { slug: string; client: string; result: string; study?: unknown };

export const GET: APIRoute = () => {
  const services = SERVICE_LINKS as Service[];

  const insights = ([...(INSIGHTS as Insight[])])
    .sort((a, b) => b.date.localeCompare(a.date));

  const studies = (CASE_STUDIES as Study[]).filter((item) => item.study);

  const lines = [
    `# ${brand.name}`,
    '',
    `> ${site.defaultDescription}`,
    '',
    `${brand.name} is a search practice based in ${brand.locality}, ${brand.region}, founded in ${brand.founded}.`,
    'Engagements open with a reproducible forensic assessment — server logs, render diffs, index coverage,',
    'and AI citation traces — and structural repairs ship before growth work.',
    '',
    `Contact: ${brand.email} · ${brand.phoneDisplay}`,
    '',
    '## Services',
    '',
    ...services.map((s) => `- [${s.title}](${site.url}${s.href}): ${s.desc}`),
    '',
    '## Case studies',
    '',
    ...studies.map(
      (s) => `- [${s.client}](${site.url}/work/${s.slug}): ${s.result}`,
    ),
    '',
    '## Insights',
    '',
    ...insights.map(
      (post) => `- [${post.title}](${site.url}/insights/${post.slug}): ${post.dek}`,
    ),
    '',
    '## Key pages',
    '',
    `- [About](${site.url}/about): How the practice works and the principles behind it.`,
    `- [Areas we serve](${site.url}/areas-we-serve): Los Angeles and Southern California coverage.`,
    `- [Contact](${site.url}/contact): Send a URL and what changed for a free first opinion.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
