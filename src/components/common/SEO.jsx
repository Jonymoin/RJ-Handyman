import { useEffect } from 'react';
import { SITE, absoluteUrl } from '../../lib/seoConfig.js';

function upsert(selector, create, apply) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

const setMeta = (attr, key, content) =>
  upsert(
    `meta[${attr}="${key}"]`,
    () => {
      const m = document.createElement('meta');
      m.setAttribute(attr, key);
      return m;
    },
    (el) => el.setAttribute('content', content),
  );

const setCanonical = (href) =>
  upsert(
    'link[rel="canonical"]',
    () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    },
    (el) => el.setAttribute('href', href),
  );

/**
 * Per-route metadata: title, description, canonical, robots, Open Graph, Twitter card and JSON-LD.
 * Usage: <SEO title="..." description="..." path="/plumbing-service" schema={[...]} />
 */
export default function SEO({ title, description, path = '/', image, noindex = false, schema = [] }) {
  const schemaJson = JSON.stringify(schema);

  useEffect(() => {
    const url = absoluteUrl(path);
    const ogImage = absoluteUrl(image || SITE.defaultImage);

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setCanonical(url);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:locale', SITE.locale);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // Structured data (replaced on every route change, removed on unmount)
    const existing = document.getElementById('page-jsonld');
    if (existing) existing.remove();
    const items = JSON.parse(schemaJson);
    if (items.length) {
      const script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(items.length === 1 ? items[0] : items);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('page-jsonld');
      if (s) s.remove();
    };
  }, [title, description, path, image, noindex, schemaJson]);

  return null;
}
