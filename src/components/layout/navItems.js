import { SERVICES } from '../../lib/services.js';

export const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  ...SERVICES.map((s) => ({ to: s.path, label: s.navLabel })),
  { to: '/contact-us', label: 'Contact Us' },
];
