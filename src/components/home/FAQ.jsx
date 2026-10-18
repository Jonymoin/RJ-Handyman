import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

/**
 * Accessible accordion: each question is a <button> with aria-expanded / aria-controls,
 * and each answer is a labelled region. Answers stay in the DOM (hidden attribute),
 * which matches the FAQPage structured data passed to <SEO /> on the same page.
 * Props: items [{q, a}], title, eyebrow, tone ('light' | 'soft')
 */
export default function FAQ({ items, title = 'Frequently Asked Questions', eyebrow = 'FAQ', tone = 'soft' }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`${tone === 'soft' ? 'bg-soft' : 'bg-white'} py-16 sm:py-20`} aria-labelledby={`${baseId}-heading`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading id={`${baseId}-heading`} eyebrow={eyebrow} title={title} />

        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const open = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink sm:text-lg"
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-link transition-transform ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                  <p className="px-5 pb-5 leading-relaxed text-slate-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
