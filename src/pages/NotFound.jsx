import { Link } from 'react-router-dom';
import { Home as HomeIcon, MessageCircle } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import CallButton from '../components/common/CallButton.jsx';
import { buttonClasses } from '../components/common/buttonStyles.js';
import { SERVICES } from '../lib/services.js';
import { PAGE_SEO } from '../lib/seoConfig.js';

export default function NotFound() {
  const { title, description, path } = PAGE_SEO.notFound;

  return (
    <>
      <SEO title={title} description={description} path={path} noindex />
      <section className="bg-ink py-20 text-onink sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-7xl font-extrabold text-hi sm:text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">We couldn’t find that page</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-onink/85">
            The link may be broken or the page may have moved. Head back to the homepage or pick one of our services below.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className={buttonClasses({ variant: 'primary', size: 'lg' })}>
              <HomeIcon className="h-5 w-5" aria-hidden="true" /> Back to Home
            </Link>
            <Link to="/contact-us" className={buttonClasses({ variant: 'outline-light', size: 'lg' })}>
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Contact Us
            </Link>
            <CallButton variant="outline-light" size="lg" label="Call Now" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-ink">Our services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={s.path}
                  className="flex min-h-[56px] items-center rounded-xl border border-slate-200 px-5 font-semibold text-link shadow-sm hover:bg-soft"
                >
                  {s.name} in Singapore
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
