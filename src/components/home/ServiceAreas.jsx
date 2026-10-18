import { MapPin } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { SERVICE_AREAS } from '../../lib/contactConfig.js';

/**
 * Reused on the homepage and every service page.
 * Props let a service page swap in service-specific wording.
 */
export default function ServiceAreas({
  heading = 'Serving Customers Throughout Singapore',
  text = 'RJ Handyman helps customers across the island, from the east in Tampines and Bedok to the west in Jurong, and the north in Woodlands and Yishun. We operate as a mobile service, so there is no shopfront to visit: just get in touch and tell us where you are.',
  service,
}) {
  return (
    <section className="bg-ink py-16 text-onink sm:py-20" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="areas-heading" tone="dark" eyebrow="Service coverage" title={heading} text={text} />

        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5" aria-label="Examples of areas we serve">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium"
            >
              <MapPin className="h-4 w-4 text-hi" aria-hidden="true" />
              {area}
            </li>
          ))}
          <li className="inline-flex items-center rounded-full border border-dashed border-white/30 px-4 py-2 text-sm font-medium text-onink/85">
            …and other areas in Singapore
          </li>
        </ul>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton label="Call to Check Your Area" />
          <WhatsAppButton service={service} label="WhatsApp Your Location" />
        </div>
      </div>
    </section>
  );
}
