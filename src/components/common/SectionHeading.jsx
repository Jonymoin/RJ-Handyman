export default function SectionHeading({ eyebrow, title, text, tone = 'light', align = 'center', id }) {
  const dark = tone === 'dark';
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className={`mb-2 text-sm font-semibold uppercase tracking-wider ${dark ? 'text-hi' : 'text-link'}`}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-onink' : 'text-ink'}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-onink/80' : 'text-slate-600'}`}>{text}</p>}
    </div>
  );
}
