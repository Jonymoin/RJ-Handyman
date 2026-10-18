import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CallButton from '../common/CallButton.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { NAV_ITEMS } from './navItems.js';

/**
 * Dropdown panel under the header (not a full-screen takeover).
 * Closes on Escape, on route change (handled by Header) and via the header toggle button.
 */
export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div id="mobile-menu" className="fade-up max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink xl:hidden">
      <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-white/10 text-hi' : 'text-onink/90 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-3 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 min-[420px]:grid-cols-2">
          <CallButton label="Call Now" className="w-full" />
          <WhatsAppButton label="WhatsApp" className="w-full" />
        </div>
      </nav>
    </div>
  );
}
