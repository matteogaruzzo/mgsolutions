import { Container, Reveal, Section, Text } from '@/components/agria/ui';
import { clarity, research } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

// "Chiarezza" e "Ricerca e sviluppo": due blocchi brevi affiancati nella stessa
// sezione bianca, ognuno con il proprio h2. In colonna su mobile.
const BLOCKS = [
  { ...clarity, id: 'home-chiarezza-title' },
  { ...research, id: 'home-ricerca-title' },
];

export default function ClaritySection() {
  return (
    <Section as="div" background="white">
      <Container className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-[clamp(26px,4vw,58px)]">
        {BLOCKS.map((block) => (
          <section key={block.id} className="flex flex-col gap-5 border-t border-agria-border pt-8" aria-labelledby={block.id}>
            <SectionIntro eyebrow={block.eyebrow} title={block.title} titleId={block.id} />
            <Reveal>
              <Text size="lg" muted>
                {block.text}
              </Text>
            </Reveal>
          </section>
        ))}
      </Container>
    </Section>
  );
}
