/**
 * Homepage copy.
 *
 * Everything here is real. The previous build shipped this file full of
 * `PENDING` placeholders — em-dash proof points, `$0,000` prices, an empty
 * testimonial array — because the facts weren't to hand. They are now: the
 * figures below come from the published case studies in `work.js`, the quotes
 * are verbatim Google reviews from `testimonials.js`, and the prices are the
 * ones already stated publicly in the site's own FAQ.
 *
 * The rule that produced those placeholders still stands. Nothing is invented,
 * and any claim that loses its source comes back out.
 */

export const hero = {
  status: 'Two diagnostic slots open this quarter',
  headlineLead: 'Diagnose the drop.',
  headlineTrail: 'Rebuild the rankings.',
  lede: 'Gobiya is a Los Angeles search practice. We trace what actually happens to your site — crawl, render, index, cite — and repair the cause rather than the symptom.',
  primaryCta: { label: 'Book a diagnostic', href: '/contact' },
  secondaryCta: { label: 'See the method', href: '/#method' },
  stamp: 'Est. 2019',
} as const;

/** Sectors, not client names — the case studies carry the named work. */
export const clientLogos = [
  'Healthcare & Dental',
  'Local Service',
  'Professional Services',
  'Enterprise & B2B',
  'Legal',
  'Home Services',
  'Property',
  'Security',
] as const;

export const positioning = {
  lead: 'We work with teams whose search performance stopped behaving the way the dashboards said it would',
  trail: ' — and who need to know why before they spend another quarter guessing.',
  columns: [
    {
      title: 'Evidence first',
      body: 'Every engagement opens with a reproducible audit: server logs, render diffs, index coverage, citation traces. You get the raw evidence, not a scorecard.',
    },
    {
      title: 'Repair, then compound',
      body: 'Recovery work lands before growth work. Once the structural faults are closed, the same measurements become the baseline we grow against.',
    },
  ],
} as const;

/**
 * Each figure below is traceable to a published case study. `href` is not
 * decoration — it is the citation, and a proof point without one does not ship.
 */
export const proofPoints = [
  {
    value: '5×',
    label: 'Patient inquiries',
    note: 'SmileCenter.com',
    href: '/work/smile-center-dentistry',
  },
  {
    value: '3×',
    label: 'Online bookings',
    note: 'American Livescan',
    href: '/work/american-livescan',
  },
  {
    value: '113%',
    label: 'Organic impressions, 90 days',
    note: 'Safety-Centric, verified in GSC',
    href: '/work/safetycentric',
  },
  {
    value: '40%',
    label: 'Lower acquisition cost',
    note: 'Trusted Home Contractors',
    href: '/work',
  },
] as const;

export const capabilities = [
  {
    index: '01',
    title: 'Forensic audit',
    summary:
      'Log-level crawl reconstruction, render-parity testing, and index-coverage forensics. We show you what the crawler saw, not what the plugin reported.',
    tags: ['Log analysis', 'Render parity', 'Index coverage'],
    href: '/services/technical-seo',
  },
  {
    index: '02',
    title: 'AI search & GEO',
    summary:
      'Citation tracing across AI answer surfaces, passage-level citability work, and crawler access repair for the agents that now sit between you and the reader.',
    tags: ['Citation tracing', 'llms.txt', 'Passage structure'],
    href: '/services/geo',
  },
  {
    index: '03',
    title: 'Performance engineering',
    summary:
      'Field-data-led Core Web Vitals work. We optimise against CrUX percentiles from real sessions rather than a synthetic score on a fast laptop.',
    tags: ['LCP', 'INP', 'Field data'],
    href: '/services/web-dev',
  },
] as const;

export const method = {
  steps: [
    {
      index: '01',
      title: 'Diagnose',
      body: 'A fixed-scope forensic audit. Two weeks, reproducible, delivered as evidence plus a ranked repair list.',
    },
    {
      index: '02',
      title: 'Repair',
      body: 'We close the faults in priority order, shipping against your stack and your release process.',
    },
    {
      index: '03',
      title: 'Compound',
      body: 'Once the baseline is honest, the same instrumentation drives content, authority, and AI-surface work.',
    },
  ],
} as const;

/**
 * Real figures, taken from the pricing answer the site already publishes in
 * its homepage FAQ. Month-to-month, no lock-in — also as stated there.
 */
export const plans = [
  {
    name: 'Foundation',
    price: '999',
    cadence: 'per month',
    featured: false,
    summary: 'Local foundation building for a single market.',
    includes: [
      'Technical SEO audit and repair',
      'Google Business Profile management',
      'Local landing page architecture',
      'Core Web Vitals field-data work',
      'Monthly Search Console reporting',
    ],
    cta: 'Start here',
  },
  {
    name: 'Growth',
    price: '2,500',
    cadence: 'per month',
    featured: true,
    summary: 'Mid-sized accounts competing on more than one front.',
    includes: [
      'Everything in Foundation',
      'Content strategy and publication',
      'AI search and citation work',
      'Editorial link acquisition',
      'Conversion rate optimisation',
      'Direct channel access',
    ],
    cta: 'Scope a programme',
  },
  {
    name: 'Enterprise',
    price: '5,500',
    cadence: 'per month',
    featured: false,
    summary: 'Organic search and AI visibility across a multi-property estate.',
    includes: [
      'Everything in Growth',
      'Multi-property and multi-market coverage',
      'Migration and replatform governance',
      'Attribution modelling',
      'Quarterly strategy sessions',
    ],
    cta: 'Talk to us',
  },
] as const;
