// ============================================================
// GOOGLE ADS CONVERSION SETTINGS — the ONLY place to edit.
//
// 1. In Google Ads: Goals → Conversions → your conversion action → Tag setup →
//    "Use Google Tag" / event snippet. You will see something like:
//       gtag('event', 'conversion', {'send_to': 'AW-123456789/AbCdEfGhIjKl'});
// 2. Copy the value of send_to ("AW-123456789/AbCdEfGhIjKl") into the matching
//    entry below. Create one conversion action per type if you want separate counts.
// 3. Paste the Google tag (gtag.js) snippet into the <head> of /index.html.
//
// Until a real value is set, NOTHING is sent to Google (placeholders are ignored).
// ============================================================

export const GOOGLE_ADS_CONVERSIONS = {
  // Tap on any "Call" link/button (header, hero, cards, CTAs, footer)
  phone_call: {
    sendTo: 'AW-XXXXXXXXXX/PHONE_CALL_LABEL', // <-- REPLACE with your phone-call conversion ID/label
  },

  // Tap on any WhatsApp link/button (including the floating button)
  whatsapp_click: {
    sendTo: 'AW-XXXXXXXXXX/WHATSAPP_CLICK_LABEL', // <-- REPLACE with your WhatsApp conversion ID/label
  },

  // Contact form, fired ONLY after the submission was confirmed successful
  form_submit: {
    sendTo: 'AW-XXXXXXXXXX/FORM_SUBMIT_LABEL', // <-- REPLACE with your form conversion ID/label
    // value: 1.0,        // optional conversion value
    // currency: 'SGD',   // optional currency (needed if value is set)
  },
};
