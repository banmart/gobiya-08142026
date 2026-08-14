/**
 * Brand facts, navigation, and the canonical URL list.
 *
 * Every value here is real and carried over from the live site — NAP taken
 * from the LocalBusiness schema the previous build already published, so the
 * two cannot disagree while both are in Google's index. Nothing in this file
 * is invented; anything the brand has not supplied is absent rather than
 * filled with a plausible-looking placeholder.
 */

export const brand = {
  name: 'Gobiya',
  legalName: 'Gobiya',
  email: 'hello@gobiya.com',
  phone: '+1-323-744-1338',
  phoneDisplay: '(323) 744-1338',
  locality: 'Los Angeles',
  region: 'CA',
  postalCode: '90010',
  country: 'US',
  hours: 'Monday – Friday · 09:00 – 17:00 PT',
  location: 'Los Angeles, CA · Serving Southern California',
  founded: '2019',
  tagline: 'Search engineering for businesses that need the phone to ring.',
} as const;

export const site = {
  url: 'https://www.gobiya.com',
  name: brand.name,
  defaultTitle: 'Gobiya — Los Angeles SEO & AI Search Agency',
  // Kept under 165 characters so it survives intact in a SERP snippet.
  defaultDescription:
    'Los Angeles SEO agency for technical SEO, AI search (GEO), content and paid media. We fix what stops Google and AI assistants finding you — and prove it in GSC.',
  ogImage: '/assets/img/og-default.jpg',
  locale: 'en_US',
} as const;

export const nav = {
  primary: [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ],
  secondary: [
    { label: 'Insights', href: '/insights' },
    { label: 'Areas we serve', href: '/areas-we-serve' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Book a call', href: '/contact' },
} as const;

export const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'Technical SEO', href: '/services/technical-seo' },
      { label: 'AI search (GEO)', href: '/services/geo' },
      { label: 'Content marketing', href: '/services/content-marketing' },
      { label: 'Link building', href: '/services/link-building' },
      { label: 'PPC & ads', href: '/services/ppc' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { label: 'All services', href: '/services' },
      { label: 'Work', href: '/work' },
      { label: 'Insights', href: '/insights' },
      { label: 'Areas we serve', href: '/areas-we-serve' },
      { label: 'About', href: '/about' },
    ],
  },
] as const;
