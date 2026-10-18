// ============================================================
// SEO SETTINGS — page titles, descriptions, canonical domain and structured data.
// Set your real domain with VITE_SITE_URL in .env (see .env.example).
// ============================================================

import { BUSINESS } from './contactConfig.js';
import { IMAGES } from './images.js';
import { SERVICES } from './services.js';

export const SITE = {
  // Replace with your final domain (no trailing slash), or set VITE_SITE_URL in .env
  url: (import.meta.env?.VITE_SITE_URL || 'https://www.rjhandyman.example').replace(/\/+$/, ''),
  name: BUSINESS.name,
  locale: 'en_SG',
  defaultImage: IMAGES.ogDefault,
};

export const absoluteUrl = (path = '/') => `${SITE.url}${path === '/' ? '/' : path}`;

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'RJ Handyman Singapore | Plumbing, Electrical & Repair Services',
    description:
      'RJ Handyman helps homes and businesses across Singapore with plumbing, electrical, ducting and washing machine repair. Call or WhatsApp to discuss your requirements.',
  },
  contact: {
    path: '/contact-us',
    title: 'Contact RJ Handyman Singapore | Get in Touch',
    description:
      'Call, WhatsApp or send an enquiry to RJ Handyman for plumbing, electrical, ducting or washing machine repair anywhere in Singapore.',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | RJ Handyman Singapore',
    description: 'How RJ Handyman collects, uses and protects the personal information you share when you contact us.',
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found | RJ Handyman Singapore',
    description: 'The page you are looking for could not be found. Return to RJ Handyman to explore our services.',
  },
};

// Used by scripts/generate-seo-files.mjs to build sitemap.xml
export const SITEMAP_PATHS = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  ...SERVICES.map((s) => ({ path: s.path, priority: '0.9', changefreq: 'monthly' })),
  { path: '/contact-us', priority: '0.8', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
];

// ---------- Structured data (only accurate, supplied business facts) ----------

export function localBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE.url}/#business`,
    name: BUSINESS.name,
    url: `${SITE.url}/`,
    telephone: BUSINESS.phoneE164,
    image: absoluteUrl(IMAGES.logo),
    description: BUSINESS.tagline,
    areaServed: { '@type': 'Country', name: 'Singapore' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Handyman services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: absoluteUrl(s.path) },
      })),
    },
    // No street address, opening hours, ratings or prices are included on purpose:
    // add them here only once they are real and accurate.
  };
  // Demo email is never published in structured data
  if (!BUSINESS.emailIsPlaceholder) schema.email = BUSINESS.email;
  return schema;
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.to),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
