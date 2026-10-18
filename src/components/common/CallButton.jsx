import { Phone } from 'lucide-react';
import { BUSINESS } from '../../lib/contactConfig.js';
import { trackGoogleAdsConversion } from '../../lib/conversionTracking.js';
import { buttonClasses } from './buttonStyles.js';

/**
 * Click-to-call link. This anchor is the ONLY element that tracks the click, so tracking can
 * never double-fire. Tracking returns instantly and never blocks the tel: navigation.
 */
export default function CallButton({
  label = 'Call Now',
  variant = 'primary',
  size = 'md',
  className = '',
  labelClassName = '',
  showIcon = true,
}) {
  return (
    <a
      href={BUSINESS.phoneHref}
      onClick={() => trackGoogleAdsConversion('phone_call')}
      aria-label={`Call RJ Handyman on ${BUSINESS.phoneDisplay}`}
      className={buttonClasses({ variant, size, className })}
    >
      {showIcon && <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />}
      <span className={labelClassName}>{label}</span>
    </a>
  );
}
