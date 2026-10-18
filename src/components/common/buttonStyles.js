const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-150 text-center';

const sizes = {
  sm: 'px-3 py-2 text-sm sm:px-4',
  md: 'px-5 py-3 text-base',
  lg: 'px-6 py-3.5 text-base sm:text-lg',
};

const variants = {
  // main call-to-action, uses the page's brand colour
  primary: 'bg-brand text-onbrand shadow-sm hover:brightness-110',
  // dark button for light backgrounds
  dark: 'bg-ink text-onink shadow-sm hover:bg-ink/90',
  // WhatsApp green (white text is 4.5:1+ on this shade)
  whatsapp: 'bg-[#128c4a] text-white shadow-sm hover:bg-[#0f7a40]',
  // ghost buttons
  'outline-light': 'border border-white/50 text-white hover:bg-white/10',
  'outline-dark': 'border-2 border-ink text-ink hover:bg-ink hover:text-onink',
  // plain inline link (footer etc.)
  link: 'min-h-[44px] gap-2 hover:underline',
};

export function buttonClasses({ variant = 'primary', size = 'md', className = '' }) {
  if (variant === 'link') return `${variants.link} inline-flex items-center ${className}`;
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}
