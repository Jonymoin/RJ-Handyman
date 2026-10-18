# RJ Handyman Singapore — website

React + Tailwind CSS + React Router + Lucide icons, built with Vite.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build (also regenerates `public/sitemap.xml` and `public/robots.txt`):

```bash
npm run build
npm run preview
```

Requires Node.js 18 or newer.

## Deploy to Netlify

Push to GitHub, then "Add new site → Import from Git". Build command `npm run build`,
publish directory `dist` (already set in `netlify.toml`, which also handles direct visits to
page URLs). Add `VITE_SITE_URL` (your final domain) under Site settings → Environment variables.

## Things to edit (all in one place each)

| What | File |
| --- | --- |
| Phone, WhatsApp number, **email**, service areas | `src/lib/contactConfig.js` |
| Google Ads conversion IDs / labels | `src/lib/conversionConfig.js` |
| Google tag (gtag.js) and Search Console verification | `index.html` (marked comments in `<head>`) |
| Final domain for canonicals, sitemap, robots | `.env` → `VITE_SITE_URL` (copy `.env.example`) |
| Service text, FAQs, image paths and alt text | `src/lib/services.js`, `src/lib/faqs.js` |
| Page titles and descriptions (home, contact, privacy) | `src/lib/seoConfig.js` |
| Colour palette for each page | `src/lib/theme.js` |
| Contact form backend | `VITE_FORM_ENDPOINT` in `.env`, or `src/lib/submitEnquiry.js` |

## Images

Replace the files in `public/images/` with your own, keeping the same file names (sizes are
listed in `public/images/README.txt`). The files shipped there are neutral placeholders.

## Google Ads conversion tracking

All tracking goes through `trackGoogleAdsConversion(type)` in `src/lib/conversionTracking.js`
(`phone_call`, `whatsapp_click`, `form_submit`). It does nothing until the Google tag is on the
page and real `AW-…/label` values are set, and it never blocks a call or WhatsApp tap.

## Contact form

No backend is connected, so the form does **not** claim success. It shows an honest notice and
a pre-filled WhatsApp button until you set `VITE_FORM_ENDPOINT` (any URL that accepts a JSON POST,
such as Formspree) or edit `submitEnquiry()`.

## Before going live

- Replace the demo email and review every service list: keep only what you really offer.
- Electrical page: state your licensing accurately; the page tells visitors that regulated work
  needs a licensed professional.
- Have a professional review the Privacy Policy template.
- Add a real address / opening hours to the structured data only when they are true.
