/**
 * Image-backed panel for glassmorphism sections.
 *
 *   <GlassPanel image={IMAGES.glass1}> ...children use className="glass" ... </GlassPanel>
 *
 * - The background photo is a CSS background, so it never causes layout shift.
 * - If the image file is missing, a gradient from the page palette shows instead.
 * - A soft dark scrim sits between the photo and the glass so white text stays readable
 *   whatever photo you choose. To make the photo brighter, lower bg-black/35 below.
 */
export default function GlassPanel({ image, className = '', children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-card ${className}`}
      style={{
        backgroundImage: `url(${image}), linear-gradient(135deg, rgb(var(--ink)) 0%, rgb(var(--mid)) 100%)`,
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
      <div className="relative p-4 sm:p-6 lg:p-8">{children}</div>
    </div>
  );
}
