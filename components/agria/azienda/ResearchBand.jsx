import { Container, Eyebrow, GradientSection, Heading, Reveal, Text } from '@/components/agria/ui';

// Ricerca e sviluppo: banda scura compatta con sfumatura, solo testo.
export default function ResearchBand({ id, eyebrow, title, text }) {
  return (
    <GradientSection variant="dark" spacing="compact" aria-labelledby={id}>
      <Container>
        <Reveal className="flex max-w-[52rem] flex-col gap-4">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <Heading level="h2" id={id} onDark className="max-w-[22ch]">
            {title}
          </Heading>
          <Text size="lg" onDark muted>
            {text}
          </Text>
        </Reveal>
      </Container>
    </GradientSection>
  );
}
