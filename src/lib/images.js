// All image paths live here. Files sit in /public/images, so they are referenced by URL
// (never imported). Replace the .webp files with your real photos using the SAME file
// names and these sizes, and no code changes are needed.
//
//   hero-handyman.webp ........ 1200 x 900   (4:3)
//   *-service.webp (cards) .... 800 x 600    (4:3)
//   *-hero.webp ............... 1200 x 900   (4:3)
//   *-repair-N / *-work-N ..... 800 x 600    (4:3)
//   logo.webp ................. 160 x 160    (square)
//   og-image.webp ............. 1200 x 630   (social sharing)

export const IMAGES = {
  logo: '/images/logo.webp',
  ogDefault: '/images/og-image.webp',
  hero: '/images/hero-handyman.webp',
  // Contact page glass panels: glass1 = "Contact details", glass2 = "Send us an enquiry"
  // Recommended 1600 x 1200. Any photo works; very busy or very bright photos may reduce text contrast.
  glass1: '/images/glass1.jpg',
  glass2: '/images/glass2.jpg',
};

export const IMAGE_SIZES = {
  hero: { width: 1200, height: 900 },
  card: { width: 800, height: 600 },
  gallery: { width: 800, height: 600 },
  logo: { width: 160, height: 160 },
};
