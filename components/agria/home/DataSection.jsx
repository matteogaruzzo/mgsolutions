import { Container, GradientSection, HighlightCard, Reveal } from '@/components/agria/ui';
import { data } from '@/content/agria/home';

// Blocco di rottura: sezione sfumata chiara con una card grande scura che
// contiene i tre segnali dello schema.
export default function DataSection() {
  return (
    <GradientSection variant="light" aria-labelledby="home-dati-title">
      <Container>
        <Reveal>
          <HighlightCard
            tone="dark"
            eyebrow={data.eyebrow}
            title={data.title}
            titleId="home-dati-title"
            text={data.text}
            items={data.rows.map((row) => ({ title: row.label, meta: row.status }))}
            note={data.schemaLabel}
          />
        </Reveal>
      </Container>
    </GradientSection>
  );
}
