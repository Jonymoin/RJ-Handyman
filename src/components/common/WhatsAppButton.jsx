import { buildWhatsAppUrl, buildServiceEnquiryMessage } from '../../lib/contactConfig.js';
import { trackGoogleAdsConversion } from '../../lib/conversionTracking.js';
import { buttonClasses } from './buttonStyles.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

/**
 * WhatsApp link that opens in a new tab with a pre-filled, URL-encoded message.
 *   <WhatsAppButton service="plumbing service" />   → message mentions the service
 *   <WhatsAppButton message="Custom text" />        → fully custom message
 * This anchor is the only element that tracks the click (no nested handlers).
 */
export default function WhatsAppButton({
  label = 'WhatsApp Us',
  service,
  message,
  variant = 'whatsapp',
  size = 'md',
  className = '',
  labelClassName = '',
}) {
  const href = buildWhatsAppUrl(message ?? buildServiceEnquiryMessage(service));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGoogleAdsConversion('whatsapp_click')}
      aria-label={`${label} on WhatsApp (opens in a new tab)`}
      className={buttonClasses({ variant, size, className })}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className={labelClassName}>{label}</span>
    </a>
  );
}
