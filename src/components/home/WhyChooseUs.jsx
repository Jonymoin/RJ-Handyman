import { LayoutGrid, MessageCircle, MapPin, Wrench, HeartHandshake } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

const reasons = [
  {
    icon: LayoutGrid,
    title: 'Multiple services in one place',
    text: 'Plumbing, electrical, ducting and washing machine repair through a single point of contact.',
  },
  {
    icon: MessageCircle,
    title: 'Easy phone and WhatsApp contact',
    text: 'Call, or send a message with photos. Whichever is more convenient for you.',
  },
  {
    icon: MapPin,
    title: 'Coverage across Singapore',
    text: 'We serve customers throughout Singapore, in HDB estates, condos and commercial premises.',
  },
  {
    icon: Wrench,
    title: 'Practical solutions',
    text: 'Straightforward repair and maintenance advice focused on what your situation actually needs.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-focused communication',
    text: 'Scope, availability and pricing are discussed directly with you before work is arranged.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-soft py-16 sm:py-20" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="why-heading" eyebrow="Why us" title="Why Choose RJ Handyman?" />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-hi">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
