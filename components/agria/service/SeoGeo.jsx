import { Container, GradientSection, Heading, Reveal } from '@/components/agria/ui';
import { HoverGroup } from '@/components/agria/motion';
import IconBadge from './IconBadge';

// SEO e GEO (solo Digital Presence, Prompt 14): quattro voci con icona in una
// griglia due per due con filetti, su sfumatura chiara, così la sezione si
// distingue dalle card della Diagnosi e dal blocco scuro dell'AI.
export default function SeoGeo({ id, title, items }) {
  return (
    <GradientSection aria-labelledby={id}>
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-[clamp(32px,5vw,72px)]">
        <Reveal>
          <Heading level="h2" id={id}>
            {title}
          </Heading>
        </Reveal>
        <HoverGroup as="ul" className="grid grid-cols-1 border-t border-agria-border sm:grid-cols-2">
          {items.map((item, index) => (
            <li key={item.title} className="border-b border-agria-border">
              <Reveal delay={index * 70} className="flex h-full flex-col gap-4 py-7 sm:pr-8">
                <IconBadge name={item.icon} />
                <h3 className="font-agria-sans text-agria-h3 text-agria-graphite">{item.title}</h3>
                <p className="font-agria-sans text-agria-md text-agria-grey">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </HoverGroup>
      </Container>
    </GradientSection>
  );
}
