import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import ServiceIcon from '../common/ServiceIcon.jsx';
import { getRelatedServices } from '../../lib/services.js';

export default function RelatedServices({ currentSlug }) {
  const related = getRelatedServices(currentSlug);

  return (
    <section className="bg-soft py-16 sm:py-20" aria-labelledby="related-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="related-heading" eyebrow="More from RJ Handyman" title="Related Services" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                to={s.path}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-hi">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="text-xl font-bold text-ink">{s.name} in Singapore</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-link group-hover:underline">
                  View {s.name.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-slate-600">
          Not sure which service you need?{' '}
          <Link to="/contact-us" className="font-semibold text-link underline underline-offset-2">
            Contact RJ Handyman
          </Link>{' '}
          and we will point you in the right direction.
        </p>
      </div>
    </section>
  );
}
