import Link from 'next/link';
import { Button, Container, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { HoverGroup } from '@/components/agria/motion';
import IconBadge from './IconBadge';
import styles from './ServiceArea.module.css';

// Sezione AI: fondo bianco con la parola "AI" in filigrana dietro al titolo,
// quattro o cinque card su fondo scuro e una CTA centrale. Con cinque voci la
// griglia da lg ha sei colonne: tre card in alto, due più larghe sotto; da sm
// l'ultima card dispari occupa la riga intera.
const FIVE = ['lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-3', 'sm:col-span-2 lg:col-span-3'];
export default function AiSection({ id, title, text, items, cta }) {
  return (
    <Section background="white" aria-labelledby={id} className="overflow-hidden">
      <Container>
        <div className="relative isolate text-center">
          <span aria-hidden="true" className={styles.watermark}>
            AI
          </span>
          <Reveal className="mx-auto flex max-w-[46rem] flex-col items-center gap-5 pt-[clamp(24px,5vw,64px)]">
            <Heading level="h2" id={id}>
              {title}
            </Heading>
            <Text size="lg" muted>
              {text}
            </Text>
          </Reveal>
        </div>
        <HoverGroup
          as="ul"
          className={`mt-12 grid grid-cols-1 gap-3 rounded-[28px] bg-agria-ink p-3 sm:grid-cols-2 md:mt-16 ${
            items.length === 5 ? 'lg:grid-cols-6' : 'lg:grid-cols-4'
          }`}
        >
          {items.map((item, index) => (
            <li key={item.title} className={items.length === 5 ? FIVE[index] : undefined}>
              <Reveal delay={index * 70} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-7">
                  <IconBadge name={item.icon} tone="dark" />
                  <h3 className="font-agria-sans text-agria-h3 text-agria-on-dark">{item.title}</h3>
                  <Text size="md" onDark muted>
                    {item.text}
                  </Text>
                </article>
              </Reveal>
            </li>
          ))}
        </HoverGroup>
        <div className="mt-10 flex justify-center">
          <Button as={Link} href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
