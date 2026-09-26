import { Container, Eyebrow, Heading, Reveal, Section, Text } from '@/components/agria/ui';

// Identità e digital experience (solo Digital Presence, Prompt 14): blocco
// editoriale su fondo bianco, titolo a sinistra e testo a destra, separato
// dalla sezione fotografica precedente da un filetto.
export default function IdentityBlock({ id, eyebrow, title, text }) {
  return (
    <Section background="white" spacingTop="none" aria-labelledby={id}>
      <Container>
        <div className="grid grid-cols-1 gap-8 border-t border-agria-border pt-[clamp(3rem,1.875rem+4.5vw,6rem)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-[clamp(32px,5vw,72px)]">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level="h2" id={id} className="max-w-[18ch]">
              {title}
            </Heading>
          </Reveal>
          <Reveal delay={90}>
            <Text size="lg" muted>
              {text}
            </Text>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
