import SEO from '../components/common/SEO.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import { BUSINESS } from '../lib/contactConfig.js';
import { PAGE_SEO, breadcrumbSchema } from '../lib/seoConfig.js';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

// NOTE: this is a plain-language starting point, not legal advice.
// Have it reviewed against your actual practices (and Singapore's PDPA) before relying on it.
const sections = [
  {
    title: 'Information we collect',
    body: [
      'When you contact RJ Handyman by phone, WhatsApp, email or the enquiry form on this website, we may receive your name, phone number, the service you are asking about, the description of your issue, any photos or videos you choose to send, and your general location in Singapore.',
      'Like most websites, this site may also collect basic technical information such as your browser type, device and the pages you visit, if analytics or advertising tags are enabled.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'We use your information to respond to your enquiry, discuss and arrange services, provide quotations and follow up with you about your request.',
      'We may also use aggregated, non-identifying data to understand how the website is used and how our advertising performs.',
    ],
  },
  {
    title: 'WhatsApp and phone communication',
    body: [
      'When you tap a WhatsApp or call button, your device opens WhatsApp or your phone app. Messages you send through WhatsApp are handled by WhatsApp under its own terms and privacy policy.',
    ],
  },
  {
    title: 'Cookies, analytics and advertising',
    body: [
      'This website may use Google tags (such as Google Ads or Google Analytics) to measure visits and conversions, such as clicks on call or WhatsApp buttons. These services may use cookies or similar technologies. You can manage cookies through your browser settings.',
    ],
  },
  {
    title: 'Sharing your information',
    body: [
      'We do not sell your personal information. We may share it with service providers who help us operate the website or respond to enquiries (for example, email or messaging services), or where required by law.',
    ],
  },
  {
    title: 'Retention and security',
    body: [
      'We keep enquiry details only for as long as needed to respond to you, carry out the service and meet our legal or business obligations. We take reasonable steps to protect the information you give us, but no method of transmission over the internet is completely secure.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You may ask us to access, correct or delete the personal information we hold about you, or withdraw your consent to us contacting you, by getting in touch using the details below.',
    ],
  },
];

export default function PrivacyPolicy() {
  const { title, description, path } = PAGE_SEO.privacy;

  return (
    <>
      <SEO title={title} description={description} path={path} schema={[breadcrumbSchema(crumbs)]} />

      <section className="bg-ink text-onink">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-onink/85">How RJ Handyman handles the information you share with us.</p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-2xl font-bold text-ink">{s.title}</h2>
              <div className="mt-3 space-y-3 text-lg leading-relaxed text-slate-600">
                {s.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-bold text-ink">Contact us about privacy</h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              Questions about this policy? Call{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold text-link underline underline-offset-2">
                {BUSINESS.phoneDisplay}
              </a>{' '}
              or email{' '}
              <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-link underline underline-offset-2 break-all">
                {BUSINESS.email}
              </a>
              .
            </p>
            <p className="mt-6 text-sm text-slate-500">Last updated: October 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
