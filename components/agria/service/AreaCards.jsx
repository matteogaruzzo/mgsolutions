import Link from 'next/link';
import { Container, Eyebrow, Reveal, Section, Text, TextLink } from '@/components/agria/ui';
import { HoverGroup } from '@/components/agria/motion';
import { areas, servicesIndex } from '@/content/agria/servizi';

const CARD =
  'flex h-full flex-col gap-5 rounded-agria-card border border-agria-border bg-agria-white p-8 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[3px] hover:border-agria-green/45 hover:shadow-[0_18px_42px_rgb(var(--agria-graphite)/0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10';

// Card grandi delle tre aree (indice /servizi) o delle sole altre aree
// (pagine area: exclude = area corrente). headingAs: livello del titolo delle
// card nella gerarchia della pagina.
export default function AreaCards({ exclude, headingAs = 'h2', background = 'white', intro, ...props }) {
  const items = areas.filter((area) => area.key !== exclude);
  const Title = headingAs;
  return (
    <Section background={background} {...props}>
      <Container>
        {intro}
        <HoverGroup
          as="ul"
          className={`grid grid-cols-1 gap-[18px] ${intro ? 'mt-8 md:mt-12' : ''} ${
            items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
          }`}
        >
          {items.map((area, index) => (
            <li key={area.key}>
              <Reveal delay={index * 70} className="h-full">
                <article className={CARD}>
                  <Eyebrow>{area.label}</Eyebrow>
                  <Title className="font-agria-sans text-[clamp(1.55rem,2.4vw,2.1rem)] font-light leading-[1.15] tracking-[-0.02em] text-agria-graphite">
                    {area.title}
                  </Title>
                  <Text muted>{area.text}</Text>
                  <div className="mt-auto pt-2">
                    <TextLink as={Link} href={area.href} aria-label={`${servicesIndex.linkLabel}: ${area.title}`}>
                      {servicesIndex.linkLabel}
                    </TextLink>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </HoverGroup>
      </Container>
    </Section>
  );
}
