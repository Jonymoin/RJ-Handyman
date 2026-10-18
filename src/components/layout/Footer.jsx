import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import Logo from '../common/Logo.jsx';
import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { BUSINESS } from '../../lib/contactConfig.js';
import { SERVICES } from '../../lib/services.js';

const linkClass = 'inline-block py-1.5 text-onink/80 hover:text-onink hover:underline';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-onink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-onink/75">
            RJ Handyman provides practical plumbing, electrical, ducting and washing machine repair assistance for homes and
            businesses across Singapore.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-hi">Services</h2>
          <ul className="mt-3">
            {SERVICES.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className={linkClass}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-hi">Company</h2>
          <ul className="mt-3">
            <li>
              <Link to="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={linkClass}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-hi">Contact</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <CallButton variant="link" label={BUSINESS.phoneDisplay} className="text-onink/90" />
            </li>
            <li>
              <WhatsAppButton variant="link" label="WhatsApp us" className="text-onink/90" />
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="inline-flex min-h-[44px] items-center gap-2 break-all text-onink/90 hover:underline">
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex min-h-[44px] items-center gap-2 text-onink/90">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              Service area: {BUSINESS.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      {/* Extra bottom padding on small screens keeps the floating WhatsApp button off the text */}
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 pb-24 text-sm text-onink/70 sm:px-6 sm:pb-5 lg:px-8">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
