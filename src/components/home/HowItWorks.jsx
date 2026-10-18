import { MessageSquareText, ClipboardList, CalendarCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

const steps = [
  {
    icon: MessageSquareText,
    title: 'Contact Us',
    text: 'Explain the issue through WhatsApp or a phone call.',
  },
  {
    icon: ClipboardList,
    title: 'Discuss Your Requirements',
    text: 'Share relevant details and photos if helpful.',
  },
  {
    icon: CalendarCheck,
    title: 'Arrange the Service',
    text: 'Confirm availability, service details, and pricing directly with the team.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="how-heading" eyebrow="Simple process" title="How It Works" text="Three easy steps from first message to getting the job arranged." />

        {/* vertical on mobile, horizontal on md+ */}
        <ol className="relative mt-12 grid gap-8 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t-2 border-dashed border-mid/50 md:block" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink text-hi shadow-lg">
                <Icon className="h-7 w-7" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-bold text-onbrand">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="text-xl font-bold text-ink">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-slate-600 md:mx-auto md:max-w-xs">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
