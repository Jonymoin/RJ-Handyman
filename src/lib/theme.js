// ============================================================
// PER-PAGE COLOUR PALETTES
// Each page gets its own palette. Change a hex value here and every component follows.
//
//   ink      dark background (header, hero, footer)
//   onInk    text on ink
//   brand    primary button / highlight background
//   onBrand  text on brand (chosen for readable contrast)
//   hi       accent text & icons on dark backgrounds
//   soft     light tinted section background
//   link     accent text & icons on white/light backgrounds
//   mid      decorative accent
// ============================================================

export const THEMES = {
  // Navy + #4a7fa7 steel blue (your brief)
  home: {
    ink: '#0a1931',
    onInk: '#ffffff',
    brand: '#5b94be',
    onBrand: '#06122a',
    hi: '#9cc3e4',
    soft: '#eef4fa',
    link: '#2b5f8a',
    mid: '#4a7fa7',
  },
  // Your cyan #04e1d9 with violet #5e00d9
  plumbing: {
    ink: '#14052e',
    onInk: '#ffffff',
    brand: '#04e1d9',
    onBrand: '#0b0620',
    hi: '#04e1d9',
    soft: '#f3ecff',
    link: '#5e00d9',
    mid: '#5e00d9',
  },
  // Your lime #bef532 on black
  electrical: {
    ink: '#0a0a0a',
    onInk: '#ffffff',
    brand: '#bef532',
    onBrand: '#0a0a0a',
    hi: '#bef532',
    soft: '#f4fbe0',
    link: '#4d7c0f',
    mid: '#bef532',
  },
  // Your orange-red #ff6700 on warm black
  ducting: {
    ink: '#1b0f08',
    onInk: '#ffffff',
    brand: '#ff6700',
    onBrand: '#140a04',
    hi: '#ff8a3d',
    soft: '#fff1e6',
    link: '#c2410c',
    mid: '#ff6700',
  },
  // My pick: deep green + mint
  washing: {
    ink: '#062b22',
    onInk: '#ffffff',
    brand: '#34d399',
    onBrand: '#04231b',
    hi: '#6ee7b7',
    soft: '#e8faf2',
    link: '#047857',
    mid: '#10b981',
  },
  // My pick: charcoal + amber
  contact: {
    ink: '#16181d',
    onInk: '#ffffff',
    brand: '#f5b301',
    onBrand: '#17120a',
    hi: '#fbc934',
    soft: '#fff8e1',
    link: '#a16207',
    mid: '#f5b301',
  },
};

export const ROUTE_THEME = {
  '/': 'home',
  '/plumbing-service': 'plumbing',
  '/electrical-service': 'electrical',
  '/ducting-service': 'ducting',
  '/washing-machine-repair': 'washing',
  '/contact-us': 'contact',
  '/privacy-policy': 'home',
};

export function themeKeyForPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return ROUTE_THEME[clean] || 'home';
}

const toTriplet = (hex) => {
  const h = hex.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)} ${parseInt(h.slice(2, 4), 16)} ${parseInt(h.slice(4, 6), 16)}`;
};

/** Inline-style object of CSS variables for the given theme key. */
export function themeStyle(key) {
  const t = THEMES[key] || THEMES.home;
  return {
    '--ink': toTriplet(t.ink),
    '--on-ink': toTriplet(t.onInk),
    '--brand': toTriplet(t.brand),
    '--on-brand': toTriplet(t.onBrand),
    '--hi': toTriplet(t.hi),
    '--soft': toTriplet(t.soft),
    '--link': toTriplet(t.link),
    '--mid': toTriplet(t.mid),
  };
}
