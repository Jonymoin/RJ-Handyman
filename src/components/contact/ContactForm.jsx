import { useId, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import { buttonClasses } from '../common/buttonStyles.js';
import { SERVICES } from '../../lib/services.js';
import { submitEnquiry } from '../../lib/submitEnquiry.js';
import { trackGoogleAdsConversion } from '../../lib/conversionTracking.js';

const OTHER = 'Other / not sure';
const INITIAL = { name: '', phone: '', service: '', message: '', website: '' }; // "website" = honeypot

// Accepts +65 / 65 prefix and common spacing: 8413 0016, 84130016, +65 8413 0016
const SG_PHONE = /^(?:\+?65[\s-]?)?[3689]\d{3}[\s-]?\d{4}$/;

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!v.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!SG_PHONE.test(v.phone.trim())) errors.phone = 'Enter a valid Singapore number, e.g. 8123 4567.';
  if (!v.service) errors.service = 'Please choose a service.';
  if (v.message.trim().length < 10) errors.message = 'Please describe the issue in at least 10 characters.';
  return errors;
}

function whatsappMessage(v) {
  const service = v.service || 'handyman services';
  const parts = [`Hello RJ Handyman, I would like to enquire about ${service} in Singapore.`];
  if (v.name.trim()) parts.push(`My name is ${v.name.trim()}.`);
  if (v.message.trim()) parts.push(`Issue: ${v.message.trim()}`);
  if (v.phone.trim()) parts.push(`My number: ${v.phone.trim()}`);
  return parts.join('\n');
}

// Glass input styling (the .glass-field look lives in src/index.css)
const fieldClass = (hasError) =>
  `glass-field mt-1.5 block w-full rounded-xl px-4 py-3 text-base ${
    hasError ? '!border-red-300 !bg-red-500/15' : ''
  }`;

const labelClass = 'block font-semibold text-white';
const errorClass = 'mt-1.5 text-sm font-semibold text-red-200';

export default function ContactForm() {
  const uid = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  // idle | submitting | success | error | unconfigured
  const [status, setStatus] = useState('idle');

  const id = (name) => `${uid}-${name}`;
  const update = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (values.website) return; // honeypot filled: bot, ignore silently

    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    const result = await submitEnquiry(values);

    if (result.ok) {
      // Conversion is tracked ONLY after the submission is confirmed successful
      trackGoogleAdsConversion('form_submit');
      setStatus('success');
      setValues(INITIAL);
    } else if (result.reason === 'not_configured') {
      setStatus('unconfigured');
    } else {
      setStatus('error');
    }
  }

  const describedBy = (name) => (errors[name] ? `${id(name)}-error` : undefined);

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-green-200/50 bg-green-400/15 p-6 text-white">
        <CheckCircle2 className="h-8 w-8 text-green-300" aria-hidden="true" />
        <h3 className="mt-3 text-xl font-bold">Thank you — your enquiry has been sent</h3>
        <p className="mt-2 leading-relaxed text-white/90">
          RJ Handyman will get back to you using the phone number you provided. If it is urgent, call or WhatsApp us
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 min-h-[44px] rounded-xl border-2 border-white/70 px-5 font-semibold text-white hover:bg-white/15"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-describedby={`${uid}-note`}>
      <p id={`${uid}-note`} className="text-sm text-white/85">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className={labelClass}>
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id={id('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={fieldClass(errors.name)}
            placeholder="e.g. Tan Wei Ming"
          />
          {errors.name && (
            <p id={`${id('name')}-error`} className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={id('phone')} className={labelClass}>
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            className={fieldClass(errors.phone)}
            placeholder="e.g. 8123 4567"
          />
          {errors.phone && (
            <p id={`${id('phone')}-error`} className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={id('service')} className={labelClass}>
          Service needed <span aria-hidden="true">*</span>
        </label>
        {/* The dropdown list itself is drawn by the browser, so its options keep dark text on a light list */}
        <select
          id={id('service')}
          name="service"
          value={values.service}
          onChange={update}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={describedBy('service')}
          className={`${fieldClass(errors.service)} [&>option]:text-slate-900`}
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value={OTHER}>{OTHER}</option>
        </select>
        {errors.service && (
          <p id={`${id('service')}-error`} className={errorClass}>
            {errors.service}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor={id('message')} className={labelClass}>
          Describe the issue <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={5}
          value={values.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={fieldClass(errors.message)}
          placeholder="What is the problem, where is it, and roughly where in Singapore are you?"
        />
        {errors.message && (
          <p id={`${id('message')}-error`} className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
        </label>
      </div>

      {status === 'unconfigured' && (
        <div role="alert" className="mt-6 rounded-2xl border border-amber-200/60 bg-amber-300/15 p-5 text-white">
          <div className="flex gap-3">
            <Info className="mt-0.5 h-6 w-6 shrink-0 text-amber-200" aria-hidden="true" />
            <div>
              <p className="font-bold">The online form isn’t switched on yet — nothing has been sent.</p>
              <p className="mt-1 text-sm leading-relaxed text-white/90">
                Please send these same details on WhatsApp instead (it is pre-filled for you), or call us.
              </p>
              <WhatsAppButton
                label="Send Details on WhatsApp"
                message={whatsappMessage(values)}
                className="mt-3 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="mt-6 flex gap-3 rounded-2xl border border-red-200/60 bg-red-500/20 p-5 text-white">
          <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-200" aria-hidden="true" />
          <div>
            <p className="font-bold">Sorry, we couldn’t send your enquiry.</p>
            <p className="mt-1 text-sm leading-relaxed text-white/90">
              Please try again, or contact us by phone or WhatsApp so we don’t miss your request.
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={buttonClasses({
          variant: 'primary',
          size: 'lg',
          className: 'mt-6 w-full sm:w-auto disabled:opacity-70',
        })}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" /> Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}
