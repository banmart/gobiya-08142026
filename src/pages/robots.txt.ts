import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * Generated rather than kept as a static file so the sitemap URL can never
 * drift from `site` in astro.config.mjs.
 *
 * AI crawlers are named and allowed explicitly. They are allowed by the
 * wildcard already, but several of these bots are blocked by default in common
 * host and CDN rule sets, and a site that wants to be cited by answer engines
 * has to be readable by the crawlers that feed them. Naming them makes the
 * decision visible and deliberate instead of inherited.
 */
const AI_CRAWLERS = [
  'GPTBot', // OpenAI — training
  'OAI-SearchBot', // OpenAI — ChatGPT search index
  'ChatGPT-User', // OpenAI — live user-initiated fetch
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'Google-Extended', // Gemini / AI Overviews grounding
  'Applebot-Extended',
  'CCBot', // Common Crawl, which most models ingest downstream
  'meta-externalagent',
  'Bingbot',
  'DuckAssistBot',
];

export const GET: APIRoute = () => {
  const body = [
    '# https://www.robotstxt.org/robotstxt.html',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Answer engines — explicitly welcome.',
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${site.url}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
