import { GOOGLE_ADS_CONVERSIONS } from './conversionConfig.js';

// Real send_to values look like "AW-123456789/AbCdEfGhIjKl". Anything else
// (including the placeholders in conversionConfig.js) is treated as "not set up yet".
const SEND_TO_PATTERN = /^AW-\d+\/[\w-]+$/;

// Safety net against double-firing if two handlers ever run for one tap.
const DEDUPE_WINDOW_MS = 1000;
const lastFiredAt = {};

export function isConversionConfigured(conversionType) {
  const config = GOOGLE_ADS_CONVERSIONS[conversionType];
  return Boolean(config && SEND_TO_PATTERN.test(config.sendTo));
}

/**
 * Single entry point for ALL conversion tracking on the site.
 * conversionType: 'phone_call' | 'whatsapp_click' | 'form_submit'
 *
 * - Never throws and never blocks navigation: it returns immediately, so tel: and
 *   wa.me links open exactly as normal even if the Google tag is missing.
 * - Does nothing on the server, when gtag is not installed, or when IDs are placeholders.
 * - Call it only from real user actions (clicks / confirmed form success), never on page view.
 *
 * Returns true if an event was handed to gtag, otherwise false.
 */
export function trackGoogleAdsConversion(conversionType) {
  try {
    if (typeof window === 'undefined') return false;

    const config = GOOGLE_ADS_CONVERSIONS[conversionType];
    if (!config) return false;

    if (typeof window.gtag !== 'function') return false;

    if (!SEND_TO_PATTERN.test(config.sendTo)) {
      if (import.meta.env?.DEV) {
        console.debug(`[conversion] "${conversionType}" skipped: add real IDs in src/lib/conversionConfig.js`);
      }
      return false;
    }

    const now = Date.now();
    if (now - (lastFiredAt[conversionType] || 0) < DEDUPE_WINDOW_MS) return false;
    lastFiredAt[conversionType] = now;

    const payload = { send_to: config.sendTo };
    if (typeof config.value === 'number') payload.value = config.value;
    if (config.currency) payload.currency = config.currency;

    window.gtag('event', 'conversion', payload);
    return true;
  } catch {
    // Tracking must never break the page.
    return false;
  }
}
