import { Card, Container, Reveal, Section } from '@/components/agria/ui';
import { HoverGroup } from '@/components/agria/motion';
import { method } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

export default function MethodSection() {
  return (
    // scroll-mt: l'ancora "Come lavoriamo" non finisce sotto l'header sticky
    <Section background="white" spacing="compact" id={method.id} className="scroll-mt-20" aria-labelledby="home-metodo-title">
      <Container>
        <SectionIntro eyebrow={method.eyebrow} title={method.title} titleId="home-metodo-title" />
        <HoverGroup as="ol" className="mt-8 grid grid-cols-1 gap-[18px] md:mt-12 md:grid-cols-3">
          {method.steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 70} className="h-full">
                <Card eyebrow={step.number} title={step.title} textSize="md" className="h-full">
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
