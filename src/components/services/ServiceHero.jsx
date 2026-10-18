import Breadcrumbs from '../common/Breadcrumbs.jsx';
import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import SmartImage from '../common/SmartImage.jsx';
import ServiceIcon from '../common/ServiceIcon.jsx';
import { IMAGE_SIZES } from '../../lib/images.js';

export default function ServiceHero({ service, breadcrumbs }) {
  return (
    <section className="relative overflow-hidden bg-ink text-onink">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-mid/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-onbrand">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{service.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-onink/85">{service.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" label="Call Now" />
              <WhatsAppButton size="lg" label="WhatsApp Us" service={service.enquiryName} />
            </div>
          </div>

          <SmartImage
            src={service.images.hero}
            alt={service.alts.hero}
            width={IMAGE_SIZES.hero.width}
            height={IMAGE_SIZES.hero.height}
            priority
            className="rounded-3xl shadow-2xl ring-1 ring-white/15"
          />
        </div>
      </div>
    </section>
  );
}
