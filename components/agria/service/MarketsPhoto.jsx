import Link from 'next/link';
import { Button, Container, Eyebrow, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { ZoomImage } from '@/components/agria/motion';
import PhotoCredit from '@/components/agria/media/PhotoCredit';

// Fotografia e mercati: testo a sinistra, fotografia reale a destra con angoli
// arrotondati e leggero ingrandimento al passaggio del cursore (ZoomImage).
export default function MarketsPhoto({ id, eyebrow, title, text, cta, image }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[clamp(32px,5vw,72px)]">
        <Reveal className="flex flex-col items-start gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="h2" id={id}>
            {title}
          </Heading>
          <Text size="lg" muted>
            {text}
          </Text>
          <Button as={Link} href={cta.href} variant="secondary" className="mt-3">
            {cta.label}
          </Button>
        </Reveal>
        <figure className="m-0">
          <ZoomImage
            src={image.src}
            alt={image.alt}
            quality={image.quality}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <PhotoCredit credit={image.credit} className="mt-3" />
        </figure>
      </Container>
    </Section>
  );
}
