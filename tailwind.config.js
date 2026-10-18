/** @type {import('tailwindcss').Config} */
// Colours are driven by CSS variables set per page in src/lib/theme.js,
// so every page can have its own palette without touching components.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: token('ink'), // dark background colour (header, hero, footer)
        onink: token('on-ink'), // text on ink
        brand: token('brand'), // primary button / highlight background
        onbrand: token('on-brand'), // text on brand
        hi: token('hi'), // accent text/icons on dark backgrounds
        soft: token('soft'), // light tinted section background
        link: token('link'), // accent text/icons on light backgrounds
        mid: token('mid'), // decorative accent
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,25,49,.06), 0 8px 24px rgba(10,25,49,.08)',
      },
    },
  },
  plugins: [],
};
