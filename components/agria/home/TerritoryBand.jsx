import Image from 'next/image';
import { Container, Eyebrow, Heading } from '@/components/agria/ui';
import { territory } from '@/content/agria/home';

// Banda territoriale a tutta larghezza: fotografia con velo scuro e una frase
// in bianco, nessuna CTA. Il velo è tarato sul punto più chiaro della foto
// (contrasto in docs/agria/11-homepage-definitiva.md).
export default function TerritoryBand() {
  return (
    <section aria-labelledby="home-territorio-title" className="relative isolate overflow-hidden bg-agria-ink">
      <Image
        src={territory.image.src}
        alt={territory.image.alt}
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_60%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, rgb(var(--agria-ink) / 0.7), rgb(var(--agria-ink) / 0.78))' }}
      />
      <Container className="flex min-h-[clamp(320px,38vw,480px)] flex-col items-center justify-center gap-5 py-16 text-center">
        <Eyebrow onDark>{territory.eyebrow}</Eyebrow>
        <Heading level="h2" id="home-territorio-title" onDark className="max-w-[22ch]">
          {territory.title}
        </Heading>
      </Container>
    </section>
  );
}
