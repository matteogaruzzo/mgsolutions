import Link from 'next/link';
import { Button, Container, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { HoverGroup } from '@/components/agria/motion';
import IconBadge from './IconBadge';

// Diagnosi: tre card (icona, problema, conseguenza) in HoverGroup, poi una CTA secondaria.
export default function Diagnosis({ id, title, items, cta }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container>
        <Reveal>
          <Heading level="h2" id={id} className="max-w-[22ch]">
            {title}
          </Heading>
        </Reveal>
        <HoverGroup as="ul" className="mt-10 grid grid-cols-1 gap-[18px] md:mt-12 md:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 70} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-agria-card border border-agria-border bg-agria-white p-8">
                  <IconBadge name={item.icon} />
                  <h3 className="font-agria-sans text-agria-h3 text-agria-graphite">{item.title}</h3>
                  <Text size="md" muted>
                    {item.text}
                  </Text>
                </article>
              </Reveal>
            </li>
          ))}
        </HoverGroup>
        <div className="mt-10">
          <Button as={Link} href={cta.href} variant="secondary">
            {cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
