// Foto Unsplash della pipeline (scripts/fetch-images.mjs): il manifest
// content/agria/image-credits.json contiene URL (hotlinking, come chiedono le
// Unsplash API Guidelines), alt, qualità massima e crediti.
import manifest from '@/content/agria/image-credits.json';

// { src, alt, width, height, quality, credit } pronto per AgriaImage/ZoomImage.
// Una chiave assente è un errore esplicito: va aggiunta a
// scripts/images.config.json e scaricata con `node scripts/fetch-images.mjs`.
export function agriaImage(key) {
  const image = manifest.images[key];
  if (!image) {
    throw new Error(`Immagine "${key}" assente dal manifest: esegui node scripts/fetch-images.mjs`);
  }
  return {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    quality: image.quality,
    credit: {
      name: image.photographer.name,
      profileUrl: image.photographer.profileUrl,
      photoUrl: image.photoUrl,
      unsplashUrl: image.unsplashUrl,
    },
  };
}

// Foto della pipeline se la chiave è già nel manifest, altrimenti la foto di
// ripiego (stessa forma { src, alt }). Serve nel passaggio tra una voce
// aggiunta a scripts/images.config.json e il lancio dello script: la build
// resta verde. Quando la chiave è nel manifest il ripiego si può togliere.
export function agriaImageOr(key, fallback) {
  return manifest.images[key] ? agriaImage(key) : fallback;
}

// Tutte le foto della pipeline, per /crediti-immagini.
export function agriaImageCredits() {
  return Object.values(manifest.images).map((image) => ({
    key: image.key,
    photographer: image.photographer.name,
    profileUrl: image.photographer.profileUrl,
    photoUrl: image.photoUrl,
  }));
}
