import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { IMAGE_SIZES } from '../../lib/images.js';

/**
 * Renders, in order: introduction (+ gallery), common problems, services offered,
 * service process and "why contact RJ Handyman". All text comes from src/lib/services.js.
 */
export default function ServiceDetails({ service }) {
  return (
    <>
      {/* 1. Introduction + images */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="intro-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <h2 id="intro-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {service.introHeading}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              {service.intro.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>

            {service.notice && (
              <div role="note" className="mt-6 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-amber-950">
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" aria-hidden="true" />
                <div>
                  <p className="font-bold">{service.notice.title}</p>
                  <p className="mt-1 text-sm leading-relaxed">{service.notice.text}</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {service.images.gallery.map((src, i) => (
              <SmartImage
                key={src}
                src={src}
                alt={service.alts.gallery[i]}
                width={IMAGE_SIZES.gallery.width}
                height={IMAGE_SIZES.gallery.height}
                sizes="(min-width: 1024px) 280px, 50vw"
                className={`rounded-2xl shadow-card ${i === 1 ? 'mt-8' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Common problems */}
      <section className="bg-soft py-16 sm:py-20" aria-labelledby="problems-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="problems-heading" eyebrow="Common issues" title={service.problemsHeading} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.problems.map((p) => (
              <li key={p.title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Services offered */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="offered-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="offered-heading" eyebrow="What we offer" title={service.offeredHeading} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.offered.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="border-l-4 border-mid pl-3 text-xl font-bold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-link" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="bg-ink py-16 text-onink sm:py-20" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="process-heading" tone="dark" eyebrow="Our process" title={service.processHeading} />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-onbrand">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-onink/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Why contact RJ Handyman */}
      <section className="bg-soft py-16 sm:py-20" aria-labelledby="why-service-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-service-heading" eyebrow="Why us" title={service.whyHeading} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.why.map((w) => (
              <li key={w.title} className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-link" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
