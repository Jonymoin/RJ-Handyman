import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * items: [{ label, to }]  — the last item is the current page (not a link).
 * Structured data for the same trail is passed to <SEO /> via breadcrumbSchema(items).
 */
export default function Breadcrumbs({ items, className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.to} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-onink">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link to={item.to} className="text-onink/75 underline-offset-2 hover:text-onink hover:underline">
                    {item.label}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-onink/50" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
