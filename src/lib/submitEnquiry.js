// ============================================================
// CONTACT FORM SUBMISSION — PLACEHOLDER HANDLER
//
// No backend is connected yet, so this deliberately returns
// { ok: false, reason: 'not_configured' } and the form tells visitors the truth
// (and offers WhatsApp) instead of showing a fake "sent" message.
//
// To connect it later, EITHER:
//   a) set VITE_FORM_ENDPOINT in .env to any URL that accepts a JSON POST
//      (Formspree, a Netlify Function, your own API ...), OR
//   b) replace the body of submitEnquiry() with your own email-service call.
// Return { ok: true } ONLY when the service confirms the message was accepted.
// ============================================================

export const FORM_ENDPOINT = import.meta.env?.VITE_FORM_ENDPOINT || '';

/**
 * @param {{name:string, phone:string, service:string, message:string}} data
 * @returns {Promise<{ok:boolean, reason?:string}>}
 */
export async function submitEnquiry(data) {
  if (!FORM_ENDPOINT) {
    return { ok: false, reason: 'not_configured' };
  }

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        service: data.service,
        message: data.message,
        source: 'rjhandyman-website',
      }),
    });
    return response.ok ? { ok: true } : { ok: false, reason: `http_${response.status}` };
  } catch {
    return { ok: false, reason: 'network' };
  }
}
