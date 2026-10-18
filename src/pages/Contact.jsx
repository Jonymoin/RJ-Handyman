import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import CallButton from '../components/common/CallButton.jsx';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';
import GlassPanel from '../components/common/GlassPanel.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import { BUSINESS, SERVICE_AREAS } from '../lib/contactConfig.js';
import { IMAGES } from '../lib/images.js';
import { SERVICES } from '../lib/services.js';
import { PAGE_SEO, breadcrumbSchema, localBusinessSchema } from '../lib/seoConfig.js';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Contact Us', to: '/contact-us' },
];

const iconBadge =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-white';

export default function Contact() {
  const { title, description, path } = PAGE_SEO.contact;

  return (
    <>
      <SEO title={title} description={description} path={path} schema={[breadcrumbSchema(crumbs), localBusinessSchema()]} />

      <section className="bg-ink text-onink">
        <div className="mx-auto bg-[#00bcc8] text-[#d0ff00] max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Contact RJ Handyman in Singapore</h1>
          <p className="mt-4 max-w-2xl text-lg font-bold leading-relaxed text-[#000812]">
            The fastest way to reach us is a call or a WhatsApp message with a photo of the problem. Prefer to write it
            down? Use the form and we will get back to you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton className='bg-[#d0ff00]' size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
            <WhatsAppButton size="lg" label="WhatsApp Us" />
          </div>
        </div>
      </section>

      <section className="bg-soft py-14 sm:py-20" aria-labelledby="contact-details-heading">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8">
          {/* ---------- Panel 1: contact details (background: /images/glass1.webp) ---------- */}
          <GlassPanel image={IMAGES.glass1} className="lg:col-span-2">
            <h2 id="contact-details-heading" className="text-2xl font-bold text-white drop-shadow">
              Contact details
            </h2>

            <ul className="mt-5 space-y-4">
              <li className="glass flex gap-4 rounded-2xl p-5">
                <span className={iconBadge}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <CallButton variant="link" label={BUSINESS.phoneDisplay} showIcon={false} className="text-lg font-semibold text-white" />
                </div>
              </li>

              <li className="glass flex gap-4 rounded-2xl p-5">
                <span className={iconBadge}>
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-white">WhatsApp</h3>
                  <p className="text-white/85">Send photos, videos and details of the problem.</p>
                  <WhatsAppButton label="Chat on WhatsApp" size="sm" className="mt-3" />
                </div>
              </li>

              <li className="glass flex gap-4 rounded-2xl p-5">
                <span className={iconBadge}>
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-white">Email</h3>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="inline-flex min-h-[44px] items-center break-all font-semibold text-white hover:underline"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </li>

              <li className="glass flex gap-4 rounded-2xl p-5">
                <span className={iconBadge}>
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-white">Service coverage</h3>
                  <p className="text-white/85">
                    We serve customers across {BUSINESS.serviceArea}, including {SERVICE_AREAS.slice(0, 6).join(', ')} and
                    other areas. We travel to you.
                  </p>
                </div>
              </li>
            </ul>

            <p className="glass mt-5 rounded-2xl p-5 text-white/90">
              Looking for a specific service?{' '}
              {SERVICES.map((s, i) => (
                <span key={s.slug}>
                  <Link to={s.path} className="font-semibold text-white underline underline-offset-2">
                    {s.name}
                  </Link>
                  {i < SERVICES.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </GlassPanel>

          {/* ---------- Panel 2: enquiry form (background: /images/glass2.webp) ---------- */}
          <GlassPanel image={IMAGES.glass2} className="lg:col-span-3">
            <div className="glass rounded-3xl p-5 sm:p-8">
              <h2 className="text-2xl font-bold text-white">Send us an enquiry</h2>
              <p className="mb-6 mt-2 text-white/85">
                Tell us a little about the problem and we will reply by phone or WhatsApp. Prefer not to use the form? Use
                the WhatsApp button below instead.
              </p>
              <ContactForm />
            </div>

            <div className="glass mt-5 flex flex-col items-start gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-semibold text-white">Prefer not to fill in a form?</p>
              <WhatsAppButton label="Message Us on WhatsApp" />
            </div>
          </GlassPanel>
        </div>
      </section>
    </>
  );
}
