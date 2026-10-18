import { MapPin, MessageCircle, Camera } from 'lucide-react';
import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import SmartImage from '../common/SmartImage.jsx';
import { IMAGES, IMAGE_SIZES } from '../../lib/images.js';
import { buttonClasses } from '../common/buttonStyles.js';

const highlights = [
  { icon: MapPin, text: 'Serving all of Singapore' },
  { icon: MessageCircle, text: 'Call or WhatsApp' },
  { icon: Camera, text: 'Photos welcome' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-onink">
      {/* decorative glow, purely visual */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mid/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-hi">
            RJ Handyman · Singapore
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Reliable Handyman Services Across Singapore
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-onink/85">
            From plumbing and electrical work to ducting services and washing machine repairs, RJ Handyman helps homeowners
            and businesses with practical repair and maintenance solutions across Singapore.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton size="lg" label="Call Now" />
            <WhatsAppButton size="lg" label="WhatsApp Us" />
            <a href="#services" className={buttonClasses({ variant: 'outline-light', size: 'lg' })}>
              Explore Our Services
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-onink/85">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-hi" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* LCP image: eager + fetchPriority high + reserved dimensions */}
        <div className="relative">
          <div aria-hidden="true" className="absolute -inset-2 rounded-[1.75rem] bg-mid/25 blur-xl" />
          <SmartImage
            src={IMAGES.hero}
            alt="RJ Handyman technician carrying out home maintenance work in a Singapore home"
            width={IMAGE_SIZES.hero.width}
            height={IMAGE_SIZES.hero.height}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="relative rounded-3xl shadow-2xl ring-1 ring-white/15"
          />
        </div>
      </div>
    </section>
  );
}
