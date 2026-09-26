import { Container, Eyebrow, Heading, Reveal, Section } from '@/components/agria/ui';

// Posizionamento: etichetta e titolo a sinistra, testo grande a destra, su due
// colonne da md. Nessuna interazione oltre l'apparizione allo scroll.
export default function Positioning({ id, eyebrow, title, text }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-[clamp(32px,5vw,72px)]">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="h2" id={id} className="max-w-[18ch]">
            {title}
          </Heading>
        </Reveal>
        <Reveal delay={90}>
          <p className="font-agria-sans text-[clamp(1.3rem,1.1rem+1.1vw,1.8rem)] font-light leading-[1.45] tracking-[-0.01em] text-agria-graphite">
            {text}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
