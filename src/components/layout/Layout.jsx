import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';
import { themeKeyForPath, themeStyle } from '../../lib/theme.js';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  // The page's palette is applied as CSS variables on this wrapper (header + footer follow it)
  const style = themeStyle(themeKeyForPath(pathname));

  return (
    <div style={style} className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-white px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
