'use client';

import Image from 'next/image';

const UNSPLASH = 'https://images.unsplash.com/';

// Loader per le foto Unsplash in hotlinking: chiede al CDN di Unsplash la
// larghezza richiesta da next/image, formato automatico (AVIF/WebP) e
// qualità, senza passare dall'ottimizzatore del sito.
function unsplashLoader({ src, width, quality }) {
  const url = new URL(src);
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality || 75));
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'max');
  return url.toString();
}

// next/image per tutte le foto del sito: le foto della pipeline Unsplash
// (URL images.unsplash.com) usano il loader qui sopra, le foto locali il
// comportamento predefinito. È un componente client perché il loader è una
// funzione, che non può passare da un componente server.
export default function AgriaImage({ src, quality, ...props }) {
  if (typeof src === 'string' && src.startsWith(UNSPLASH)) {
    return <Image src={src} loader={unsplashLoader} quality={Math.min(quality || 75, 75)} {...props} />;
  }
  return <Image src={src} quality={quality} {...props} />;
}
