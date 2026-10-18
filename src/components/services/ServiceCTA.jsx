import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { BUSINESS } from '../../lib/contactConfig.js';

export default function ServiceCTA({ service, variant = 'brand' }) {
  const brand = variant === 'brand';
  return (
    <section
      className={`${brand ? 'bg-brand text-onbrand' : 'bg-white'} py-14 sm:py-16`}
      aria-labelledby={`cta-${variant}-heading`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id={`cta-${variant}-heading`}
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${brand ? '' : 'text-ink'}`}
        >
          {service.ctaHeading}
        </h2>
        <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${brand ? 'opacity-90' : 'text-slate-600'}`}>
          {service.ctaText}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton variant={brand ? 'dark' : 'primary'} size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
          <WhatsAppButton size="lg" label="WhatsApp Us" service={service.enquiryName} />
        </div>
      </div>
    </section>
  );
}
