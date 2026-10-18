import { buildWhatsAppUrl, buildServiceEnquiryMessage } from '../../lib/contactConfig.js';
import { trackGoogleAdsConversion } from '../../lib/conversionTracking.js';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

/**
 * Fixed bottom-right WhatsApp button shown on every page (rendered once in Layout).
 * - the glow pulse is switched off by prefers-reduced-motion (see index.css)
 * - the footer has extra bottom padding so this never covers footer text
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(buildServiceEnquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGoogleAdsConversion('whatsapp_click')}
      aria-label="Chat with RJ Handyman on WhatsApp (opens in a new tab)"
      className="wa-pulse fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg transition-transform hover:scale-105"
      style={{
        right: 'max(1rem, env(safe-area-inset-right))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
      }}
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
