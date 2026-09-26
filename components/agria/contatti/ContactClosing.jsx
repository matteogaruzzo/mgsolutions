import Link from 'next/link';
import { Container, Heading, Reveal, Section, Text, TextLink } from '@/components/agria/ui';

const PILL =
  'inline-flex items-center rounded-full border border-agria-border bg-agria-white px-5 py-2.5 font-agria-sans text-agria-sm font-medium text-agria-graphite transition-colors duration-200 hover:border-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 focus-visible:ring-offset-agria-offwhite motion-reduce:transition-none';

// Chiusura sobria per chi non è pronto a scrivere: rimando alle tre aree e
// all'indice dei servizi, nessuna CTA di contatto ripetuta.
export default function ContactClosing({ id, title, text, links, all }) {
  return (
    <Section background="offwhite" spacing="compact" aria-labelledby={id}>
      <Container>
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <Heading level="h2" id={id} className="max-w-[20ch]">
              {title}
            </Heading>
            <Text muted>{text}</Text>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={PILL}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <TextLink as={Link} href={all.href}>
              {all.label}
            </TextLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
