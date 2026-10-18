import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import { IMAGES, IMAGE_SIZES } from '../../lib/images.js';
import { BUSINESS } from '../../lib/contactConfig.js';

// Logo placeholder: /public/images/logo.webp (falls back to an icon badge if the file is missing)
export default function Logo({ className = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to="/"
      aria-label={`${BUSINESS.name} — home`}
      className={`flex items-center gap-2.5 text-onink ${className}`}
    >
      {failed ? (
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-onbrand">
          <Wrench className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : (
        <img
          src={IMAGES.logo}
          alt=""
          width={IMAGE_SIZES.logo.width}
          height={IMAGE_SIZES.logo.height}
          onError={() => setFailed(true)}
          className="h-10 w-10 rounded-lg object-cover"
        />
      )}
      <span className="text-lg font-bold tracking-tight">{BUSINESS.name}</span>
    </Link>
  );
}
