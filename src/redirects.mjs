/**
 * The full 301 map carried over from the previous Next.js build.
 *
 * gobiya.com has been restructured three times; every URL below was live and
 * indexed at some point, and dropping any of them throws away whatever signal
 * it accumulated. Sources are grouped by the generation they belong to.
 *
 * Astro's `[param]` replaces Next's `:param`. Wildcards (`:path*`) have no
 * direct Astro equivalent, so those are expanded to a `[...rest]` catch-all
 * where the shape allows and dropped to a single-hop redirect where it doesn't.
 *
 * DESTINATIONS ARE LIVE PAGES ONLY. A legacy URL should reach a real page in
 * one hop — never land on another redirect, and never on a 404.
 */
export const redirects = {
  // ── Services hub ────────────────────────────────────────────
  '/seo-services': '/services',
  '/seo-services/[slug]': '/services/[slug]',
  '/capabilities': '/services',
  '/creativity': '/services',
  '/outcomes': '/services',
  '/industries': '/services',
  '/markets': '/services/technical-seo',

  // ── Flat, keyword-first service URLs (generation 2) ─────────
  '/services/seo': '/services/technical-seo',
  '/geo-services-los-angeles': '/services/geo',
  '/geo-services': '/services/geo',
  '/ai-visibility': '/services/geo',
  '/content-marketing-strategies': '/services/content-marketing',
  '/content-marketing-services': '/services/content-marketing',
  '/content-marketing-services-los-angeles': '/services/content-marketing',
  '/link-building-services': '/services/link-building',
  '/link-building-services-los-angeles': '/services/link-building',
  '/ppc-management-services': '/services/ppc',
  '/ppc-management-services-los-angeles': '/services/ppc',
  '/conversion-rate-optimization-cro': '/services/cro',
  '/cro-ux-services-los-angeles': '/services/cro',
  '/web-development-services-los-angeles': '/services/web-dev',
  '/ai-consulting-services-los-angeles': '/services/ai-consulting',
  '/seo-services-los-angeles': '/services/technical-seo',
  '/los-angeles-seo-services': '/services/technical-seo',
  '/on-page-seo-los-angeles': '/services/technical-seo',

  // ── Old nested service slugs (generation 1) ─────────────────
  '/services/web-design-development': '/services/web-dev',
  '/services/web-app-development': '/services/web-dev',
  '/services/authority-link-building': '/services/link-building',
  '/services/cro-ux': '/services/cro',
  '/services/ai-llm-consulting': '/services/ai-consulting',
  '/services/seo-discoverability': '/services/technical-seo',
  '/services/geo-ai-content-writing': '/services/geo',
  '/services/google-ads-ppc': '/services/ppc',
  '/services/seo-web-copywriting': '/services/content-marketing',
  '/services/on-page-seo': '/services/technical-seo',
  '/services/content-strategy': '/services/content-marketing',
  '/services/digital-pr': '/services/link-building',
  '/services/ai-video-ads': '/services/ppc',
  '/capabilities/authority-building': '/services/link-building',
  '/capabilities/conversion-architecture': '/services/cro',
  '/performance/technical-seo-audit-agency': '/services/technical-seo',
  '/relations/authority-building-agency': '/services/link-building',
  '/relations/google-shopping-ads-agency': '/services/ppc',

  // ── Outcome and industry pillars (generation 3) ─────────────
  '/outcomes/traffic': '/services/technical-seo',
  '/outcomes/rankings': '/services/technical-seo',
  '/outcomes/sales': '/services/cro',
  '/outcomes/recovery': '/insights/why-did-my-website-traffic-drop',
  '/industries/enterprise-b2b': '/services/technical-seo',
  '/industries/local-service': '/services/technical-seo',
  '/industries/healthcare': '/services/technical-seo',
  '/industries/professional-services': '/services/technical-seo',

  // ── City pages, all three generations → /areas-we-serve ─────
  // ~26 city URLs consolidate here rather than reviving dedicated city pages.
  '/areas-we-serve/[city]': '/areas-we-serve',
  '/areas-served': '/areas-we-serve',
  '/locations': '/areas-we-serve',
  '/locations/[city]': '/areas-we-serve',
  '/industries/local-service/[city]': '/areas-we-serve',
  '/glendale-seo': '/areas-we-serve',
  '/local-seo-glendale': '/areas-we-serve',
  '/seo-company-encino': '/areas-we-serve',
  '/ai-seo-beverly-hills': '/services/geo',
  '/ai-search-marketing-santa-clarita': '/services/geo',
  '/local-seo-company-burbank': '/areas-we-serve',
  '/seo-silverlake': '/areas-we-serve',
  '/seo-burbank': '/areas-we-serve',
  '/seo-hollywood': '/areas-we-serve',
  '/seo-studio-city': '/areas-we-serve',
  '/seo-koreatown': '/areas-we-serve',
  '/seo-downtown-la': '/areas-we-serve',
  '/seo-echo-park': '/areas-we-serve',
  '/seo-los-feliz': '/areas-we-serve',
  '/seo-sherman-oaks': '/areas-we-serve',
  '/seo-glendale': '/areas-we-serve',
  '/markets/southern-california': '/services/technical-seo',
  '/california/[city]/seo': '/services/technical-seo',
  '/california/[city]/webdesign': '/services/web-dev',

  // ── Case studies ────────────────────────────────────────────
  '/case-studies/[slug]': '/work/[slug]',
  '/work/safety-centric': '/work/safetycentric',
  '/reviews': '/work',

  // ── Insights: nested → flat, and consolidated GEO cluster ───
  '/resources': '/insights',
  '/insights/ai-powered-seo/[slug]': '/insights/[slug]',
  '/insights/ai-paid-media/social-media-ai-transforming-content-creation':
    '/insights/ai-transforming-social-media-content-creation',
  '/capabilities/generative-engine-optimization':
    '/insights/what-is-generative-engine-optimization',
  '/geo-aio': '/insights/what-is-generative-engine-optimization',
  '/insights/what-is-generative-engine-optimization-and-how-does-it-work':
    '/insights/what-is-generative-engine-optimization',
  '/insights/what-is-the-difference-between-google-knowledge-graph-optimization-and-geo':
    '/insights/what-is-generative-engine-optimization',
  '/insights/introducing-open-knowledge-format-why-it-matters-for-ai-ready-businesses':
    '/insights/what-is-generative-engine-optimization',
  '/insights/are-ai-search-engines-scraping-hidden-api-data-or-public-html-text-blocks':
    '/insights/get-cited-by-chatgpt-perplexity-ai-overviews',
  '/insights/how-can-a-startup-figure-out-whether-its-content-is-being-picked-up-by-llms':
    '/insights/get-cited-by-chatgpt-perplexity-ai-overviews',
  '/insights/what-data-sources-do-llms-crawl-to-verify-b2b-company-information':
    '/insights/get-cited-by-chatgpt-perplexity-ai-overviews',
  '/insights/google-business-profile-optimization':
    '/insights/google-business-profile-seo-checklist',
  '/services/google-business-profile-optimization':
    '/insights/google-business-profile-seo-checklist',
  '/capabilities/forensic-seo-penalty-recovery':
    '/insights/algorithmic-update-recovery-entity-seo',
  '/google-penalty-service': '/insights/algorithmic-update-recovery-entity-seo',
  '/guides/google-penalty-recovery': '/insights/algorithmic-update-recovery-entity-seo',
  '/guides/helpful-content-update-recovery': '/insights/why-did-my-website-traffic-drop',
  '/guides/topic-cluster-architecture': '/services/content-marketing',
  '/services/unnatural-links-penalty-recovery': '/insights/toxic-backlinks-disavow-guide',

  // ── Contact / misc ──────────────────────────────────────────
  '/company/about': '/about',
  '/contact-us': '/contact',
  '/onboard': '/contact',
  '/onboarding': '/contact',
  '/user': '/',

  // ── App routes with no home in a static marketing build ─────
  // The Supabase-backed scan funnel, dashboard and admin stay in the old app.
  // Until they are pointed at their own host these land on /contact rather
  // than 404, because several of them are linked from indexed pages.
  '/free-site-scan': '/contact',
  '/lp': '/contact',
  '/stuff': '/insights',
  '/tools': '/services/technical-seo',
  // The eight free lookup tools (DNS, SSL, domain reputation, email
  // verification, IP geolocation, threat intel, categorisation, WHOIS). They
  // were indexed pages backed by an API the static build does not carry, and
  // the hub redirect above did not cover their children — so they were live
  // 404s until this entry.
  '/tools/[tool]': '/services/technical-seo',
  // /about had two indexed children — the founder bio and an approach page —
  // and neither was covered by the /about entry. Matched by shape rather than
  // listed, since the old sitemap is the only record of what lived under here
  // and it is no longer authoritative.
  '/about/steve-martin': '/about',
  '/about/approach': '/about',
  '/about/[page]': '/about',
  // Lead funnel tails. Low search value, but they were reachable URLs and a
  // 404 is a worse answer than the page that replaced the funnel.
  '/free-site-scan/thank-you': '/contact',
  '/free-site-scan/report/[id]': '/contact',
  '/lp/thank-you': '/contact',
  // /glossary, /glossary/[slug], /solutions, /solutions/[slug] and /seo-myths
  // are REAL PAGES again — they were briefly consolidated into /insights and
  // /services, which threw away 77 definition pages that each answered a
  // distinct query. Do not add redirects for them; a redirect here would
  // shadow the page and the route would never be reached.
  '/process': '/about',
  '/pricing': '/contact',
  '/terms': '/privacy',
  '/mcp': '/services/ai-consulting',
};
