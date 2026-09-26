import Link from 'next/link';
import { Container, Eyebrow, Heading, Section, Text } from '@/components/agria/ui';
import BookingFrame from '@/components/agria/contatti/BookingFrame';
import { agriaPageMetadata } from '@/lib/seo';
import { booking } from '@/content/agria/contatti';

// Pagina di prenotazione dopo l'invio del modulo con "Fissare una videocall"
// (Prompt 15). Header, footer e branding del sito; il calendario esterno
// compare solo dentro il riquadro. Fuori dall'indice: è un passaggio del modulo.
export const metadata = {
  ...agriaPageMetadata(booking.meta),
  robots: { index: false, follow: false },
};

export default function PrenotaPage() {
  return (
    <Section background="offwhite" spacingTop="compact" aria-labelledby="prenota-title">
      <Container className="max-w-[960px]">
        <div className="flex flex-col gap-4">
          <Eyebrow>{booking.eyebrow}</Eyebrow>
          <Heading level="h1" id="prenota-title" className="max-w-[22ch]">
            {booking.title}
          </Heading>
          <Text size="lg" muted>
            {booking.text}
          </Text>
        </div>
        <div className="mt-10">
          <BookingFrame url={booking.url} title={booking.frameTitle} consent={booking.consent} direct={booking.direct} />
        </div>
        <Link
          href={booking.back.href}
          className="mt-10 inline-flex rounded font-agria-sans text-agria-sm text-agria-grey underline underline-offset-4 hover:text-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2"
        >
          {booking.back.label}
        </Link>
      </Container>
    </Section>
  );
}
