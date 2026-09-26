import { Card, Container, Reveal, Section } from '@/components/agria/ui';
import { HoverGroup } from '@/components/agria/motion';
import SectionIntro from '@/components/agria/home/SectionIntro';

// Indice /servizi: i quattro passi comuni alle tre aree.
export default function IndexSteps({ id, eyebrow, title, steps }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container>
        <SectionIntro eyebrow={eyebrow} title={title} titleId={id} />
        <HoverGroup as="ol" className="mt-8 grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 70} className="h-full">
                <Card eyebrow={String(index + 1).padStart(2, '0')} title={step.title} textSize="md" className="h-full">
                  {step.text}
                </Card>
              </Reveal>
            </li>
          ))}
        </HoverGroup>
      </Container>
    </Section>
  );
}
