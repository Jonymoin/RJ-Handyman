// ============================================================
// CENTRAL BUSINESS DETAILS — edit here and the whole site updates.
// ============================================================

export const BUSINESS = {
  name: 'RJ Handyman',
  tagline: 'Handyman & home repair services across Singapore',
  phoneDisplay: '+65 8413 0016',
  phoneHref: 'tel:+6584130016',
  phoneE164: '+6584130016',
  whatsappNumber: '6584130016',
  whatsappBase: 'https://wa.me/6584130016',
  // TODO: replace with your real email address
  email: 'Rjhandyman@gmail.com',
  emailIsPlaceholder: true, // set to false once the real email is in place (it is then added to schema.org data)
  serviceArea: 'Singapore',
};

// Areas shown in the "Service Coverage" sections. Add or remove freely.
export const SERVICE_AREAS = [
  'Tampines',
  'Bedok',
  'Jurong',
  'Woodlands',
  'Yishun',
  'Ang Mo Kio',
  'Punggol',
  'Sengkang',
  'Hougang',
  'Toa Payoh',
  'Bishan',
  'Clementi',
  'Bukit Batok',
  'Choa Chu Kang',
  'Pasir Ris',
  'Queenstown',
  'Serangoon',
  'Kallang',
];

/** Builds a wa.me link. The message is URL-encoded so spaces and symbols work. */
export function buildWhatsAppUrl(message) {
  if (!message) return BUSINESS.whatsappBase;
  return `${BUSINESS.whatsappBase}?text=${encodeURIComponent(message)}`;
}

/**
 * Standard enquiry message that includes the service name.
 * buildServiceEnquiryMessage('plumbing service') →
 * "Hello RJ Handyman, I would like to enquire about your plumbing service in Singapore."
 */
export function buildServiceEnquiryMessage(serviceName) {
  if (!serviceName) {
    return 'Hello RJ Handyman, I would like to enquire about your handyman services in Singapore.';
  }
  return `Hello RJ Handyman, I would like to enquire about your ${serviceName} in Singapore.`;
}

export function whatsappUrlForService(serviceName) {
  return buildWhatsAppUrl(buildServiceEnquiryMessage(serviceName));
}
