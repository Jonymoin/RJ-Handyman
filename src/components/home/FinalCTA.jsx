import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { BUSINESS } from '../../lib/contactConfig.js';

export default function FinalCTA() {
  return (
    <section className="bg-brand py-16 text-onbrand sm:py-20" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 id="final-cta-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Need Help With a Home Repair?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
          Contact RJ Handyman to discuss your requirements and find out how we can help.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton variant="dark" size="lg" label={`Call ${BUSINESS.phoneDisplay}`} />
          <WhatsAppButton size="lg" label="WhatsApp Us" />
        </div>
      </div>
    </section>
  );
}
