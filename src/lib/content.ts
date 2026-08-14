/**
 * Every string and number the homepage renders.
 *
 * PLACEHOLDERS — nothing in this file is invented as fact. Anything the brand
 * has not supplied ships as a visible, labelled blank rather than a plausible
 * lie. Search this file for `PENDING` to find every slot that needs a real
 * value before launch:
 *
 *   · proofPoints[].value   — performance claims (currently em-dash)
 *   · testimonials[]        — client quotes (currently one empty slot)
 *   · plans[].price         — commercial figures (currently placeholder)
 *   · clientLogos[]         — client wordmarks (currently generic)
 */

export const brand = {
  name: "Gobiya",
  email: "hello@gobiya.com",
  phone: "+1 (000) 000-0000", // PENDING
  hours: "Monday – Friday · 09:00 – 17:00 PT",
  location: "Remote-first · North America",
} as const;

export const nav = {
  primary: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ],
  secondary: [
    { label: "Insights", href: "/insights" },
    { label: "Method", href: "/#method" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a call", href: "/contact" },
} as const;

export const hero = {
  status: "Two diagnostic slots open this quarter",
  headlineLead: "Diagnose the drop.",
  headlineTrail: "Rebuild the rankings.",
  lede: "Gobiya is a forensic search practice. We trace what actually happens to your site — crawl, render, index, cite — and repair the cause rather than the symptom.",
  primaryCta: { label: "Book a diagnostic", href: "/contact" },
  secondaryCta: { label: "See the method", href: "/#method" },
  stamp: "Est. 2019",
} as const;

/**
 * PENDING — replace with real client wordmarks (SVG in /public/logos).
 * Generic category names until then; no real company is claimed as a client.
 */
export const clientLogos = [
  "Retail",
  "Fintech",
  "Healthcare",
  "Marketplace",
  "B2B SaaS",
  "Publishing",
  "Logistics",
  "Education",
] as const;

export const positioning = {
  lead: "We work with teams whose search performance stopped behaving the way the dashboards said it would",
  trail:
    " — and who need to know why before they spend another quarter guessing.",
  columns: [
    {
      title: "Evidence first",
      body: "Every engagement opens with a reproducible audit: server logs, render diffs, index coverage, citation traces. You get the raw evidence, not a scorecard.",
    },
    {
      title: "Repair, then compound",
      body: "Recovery work lands before growth work. Once the structural faults are closed, the same measurements become the baseline we grow against.",
    },
  ],
} as const;

/**
 * PENDING — `value` is deliberately an em-dash. Fill from real analytics
 * before launch. A fabricated proof bar is worse than an empty one.
 */
export const proofPoints = [
  { value: "—", label: "Engagements delivered", note: "metric to confirm" },
  { value: "—", label: "Median recovery window", note: "metric to confirm" },
  { value: "—", label: "Audits run to date", note: "metric to confirm" },
  { value: "—", label: "Retained beyond year one", note: "metric to confirm" },
] as const;

export const capabilities = [
  {
    index: "01",
    title: "Forensic audit",
    summary:
      "Log-level crawl reconstruction, render-parity testing, and index-coverage forensics. We show you what the crawler saw, not what the plugin reported.",
    tags: ["Log analysis", "Render parity", "Index coverage"],
  },
  {
    index: "02",
    title: "AI search & GEO",
    summary:
      "Citation tracing across AI answer surfaces, passage-level citability work, and crawler access repair for the agents that now sit between you and the reader.",
    tags: ["Citation tracing", "llms.txt", "Passage structure"],
  },
  {
    index: "03",
    title: "Performance engineering",
    summary:
      "Field-data-led Core Web Vitals work. We optimise against CrUX percentiles from real sessions rather than a synthetic score on a fast laptop.",
    tags: ["LCP", "INP", "Field data"],
  },
] as const;

export const services = [
  {
    title: "Forensic SEO",
    body: "Reconstruct what happened to your visibility from primary evidence — logs, headers, render output, index history.",
  },
  {
    title: "Generative search",
    body: "Earn citations from AI answer engines through structure, accessibility, and verifiable claims rather than keyword volume.",
  },
  {
    title: "Technical recovery",
    body: "Close the structural faults: redirect debt, canonical conflicts, render-blocking, crawl waste, and index bloat.",
  },
  {
    title: "Performance engineering",
    body: "Move the field metrics that Google actually measures, verified against real-user data rather than lab scores.",
  },
  {
    title: "Measurement & attribution",
    body: "Instrument the site so the next decision is made on evidence, and the quarter after that is not another guess.",
  },
] as const;

/**
 * PENDING — one empty slot. Publishing an invented testimonial is both an
 * AI tell and, in the US, an FTC violation. Add real, attributed quotes here
 * and the carousel controls activate automatically.
 */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
}[] = [];

export const method = {
  steps: [
    {
      index: "01",
      title: "Diagnose",
      body: "A fixed-scope forensic audit. Two weeks, reproducible, delivered as evidence plus a ranked repair list.",
    },
    {
      index: "02",
      title: "Repair",
      body: "We close the faults in priority order, shipping against your stack and your release process.",
    },
    {
      index: "03",
      title: "Compound",
      body: "Once the baseline is honest, the same instrumentation drives content, authority, and AI-surface work.",
    },
  ],
} as const;

/**
 * PENDING — placeholder commercial figures. Replace `price` and `cadence`
 * with the real offer before this page goes live.
 */
export const plans = [
  {
    name: "Diagnostic",
    price: "0,000",
    cadence: "one-time",
    featured: false,
    summary: "A fixed-scope forensic audit for teams who need to know why.",
    includes: [
      "Log-level crawl reconstruction",
      "Render-parity and index-coverage report",
      "AI crawler access audit",
      "Ranked repair list with effort estimates",
      "Two-hour findings walkthrough",
    ],
    cta: "Book a diagnostic",
  },
  {
    name: "Recovery",
    price: "0,000",
    cadence: "per month",
    featured: true,
    summary: "Ongoing repair and rebuild for sites actively losing ground.",
    includes: [
      "Everything in Diagnostic",
      "Implementation against your release process",
      "Core Web Vitals field-data programme",
      "Generative search and citation work",
      "Monthly evidence review",
      "Direct channel access",
    ],
    cta: "Start recovery",
  },
  {
    name: "Programme",
    price: "0,000",
    cadence: "per month",
    featured: false,
    summary: "Long-horizon search ownership for multi-property estates.",
    includes: [
      "Everything in Recovery",
      "Multi-property and multi-market coverage",
      "Migration and replatform governance",
      "Attribution modelling",
      "Quarterly strategy sessions",
    ],
    cta: "Scope a programme",
  },
] as const;

export const footerLinks = [
  {
    heading: "Practice",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Disciplines",
    links: [
      { label: "Forensic SEO", href: "/services#forensic-seo" },
      { label: "Generative search", href: "/services#generative-search" },
      { label: "Technical recovery", href: "/services#technical-recovery" },
      { label: "Performance", href: "/services#performance" },
    ],
  },
] as const;
