import { Container, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import styles from './ServiceArea.module.css';

// Deliverable: sei righe (numero, descrizione, categoria) con evidenziazione
// al passaggio del cursore. Elenco ordinato: nessuna intestazione di colonna
// da inventare.
export default function Deliverables({ id, title, intro, items }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-[clamp(32px,5vw,72px)]">
        <Reveal className="flex flex-col gap-4">
          <Heading level="h2" id={id}>
            {title}
          </Heading>
          <Text size="lg" muted>
            {intro}
          </Text>
        </Reveal>
        <ol className={styles.deliverables}>
          {items.map((item, index) => (
            <li key={item.text} className={styles.deliverable}>
              <span className="font-agria-mono text-agria-label text-agria-green-dark">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-agria-sans text-agria-body text-agria-graphite">{item.text}</span>
              <span className={styles.category}>{item.category}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
