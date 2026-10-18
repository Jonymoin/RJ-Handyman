import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import SmartImage from '../common/SmartImage.jsx';
import ServiceIcon from '../common/ServiceIcon.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { SERVICES } from '../../lib/services.js';
import { IMAGE_SIZES } from '../../lib/images.js';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Our Services"
          text="Four everyday home services from one team. Pick a service to see what we can help with."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-xl"
            >
              <Link to={service.path} tabIndex={-1} aria-hidden="true" className="block">
                <SmartImage
                  src={service.images.card}
                  alt={service.alts.card}
                  width={IMAGE_SIZES.card.width}
                  height={IMAGE_SIZES.card.height}
                  sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 100vw"
                  className="transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-link">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="text-xl font-bold text-ink">
                  <Link to={service.path} className="hover:underline">
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{service.short}</p>

                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    to={service.path}
                    className="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-link hover:underline"
                    aria-label={`Learn more about our ${service.name.toLowerCase()} in Singapore`}
                  >
                    Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <WhatsAppButton service={service.enquiryName} label="WhatsApp Enquiry" size="sm" className="w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
