import AgriaImage from '@/components/agria/media/AgriaImage';

// Immagine in un contenitore con angoli arrotondati: al passaggio del cursore
// l'immagine si ingrandisce leggermente, il contenitore resta fermo.
// Il contenitore definisce le proporzioni (aspect-* o altezza nella className).
// Anche un antenato con la classe agria-zoom-trigger (es. l'intera card) attiva lo zoom.
export default function ZoomImage({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  className = '',
  imageClassName = '',
  ...props
}) {
  return (
    <div className={`agria-zoom relative overflow-hidden rounded-agria-card ${className}`}>
      <AgriaImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`agria-zoom-img object-cover ${imageClassName}`}
        {...props}
      />
    </div>
  );
}
