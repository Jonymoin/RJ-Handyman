import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

/**
 * Image with reserved space (no layout shift) and a neutral placeholder if the file is missing.
 * - priority: use ONLY for the main above-the-fold (LCP) image: eager + fetchPriority high.
 * - everything else is lazy-loaded and decoded off the main thread.
 */
export default function SmartImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = '(min-width: 1024px) 560px, 100vw',
  className = '',
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-200 ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-200 to-slate-300 text-slate-500"
        >
          <ImageIcon className="h-10 w-10" aria-hidden="true" />
          <span className="px-4 text-center text-xs font-medium">Photo coming soon</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
