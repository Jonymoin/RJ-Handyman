// Runs automatically before `npm run build` (see "prebuild" in package.json).
// Writes public/sitemap.xml and public/robots.txt using your real domain.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, SITEMAP_PATHS } from '../src/lib/seoConfig.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function readEnvFile() {
  const file = resolve(root, '.env');
  if (!existsSync(file)) return {};
  const out = {};
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

const env = { ...readEnvFile(), ...process.env };
const siteUrl = (env.VITE_SITE_URL || SITE.url).replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);

const urls = SITEMAP_PATHS.map(
  ({ path, priority, changefreq }) =>
    `  <url>\n    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(root, 'public/robots.txt'), robots);
console.log(`[seo] sitemap.xml and robots.txt generated for ${siteUrl}`);
if (siteUrl.includes('.example')) {
  console.log('[seo] NOTE: still using the placeholder domain. Set VITE_SITE_URL in .env before going live.');
}
