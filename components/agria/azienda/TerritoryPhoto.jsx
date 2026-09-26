import { Container, Eyebrow, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { ZoomImage } from '@/components/agria/motion';
import PhotoCredit from '@/components/agria/media/PhotoCredit';
import Icon from '@/components/agria/icons/Icon';

// Territorio: fotografia reale (pipeline Unsplash, con credito) a sinistra,
// testo e indirizzo a destra. La foto si ingrandisce leggermente al passaggio.
export default function TerritoryPhoto({ id, eyebrow, title, text, address, image }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[clamp(32px,5vw,72px)]">
        <figure className="m-0">
          <ZoomImage
            src={image.src}
            alt={image.alt}
            quality={image.quality}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <PhotoCredit as="figcaption" credit={image.credit} className="mt-3" />
        </figure>
        <Reveal className="flex flex-col items-start gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="h2" id={id}>
            {title}
          </Heading>
          <Text size="lg" muted>
            {text}
          </Text>
          <address className="mt-1 inline-flex items-center gap-2.5 font-agria-sans text-agria-md not-italic text-agria-graphite">
            <span className="text-agria-green-dark">
              <Icon name="map-pin" />
            </span>
            {address}
          </address>
        </Reveal>
      </Container>
    </Section>
  );
}
