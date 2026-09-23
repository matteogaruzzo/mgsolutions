import { Card, Container, Reveal, Section } from '@/components/agria/ui';
import { method } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

export default function MethodSection() {
  return (
    // scroll-mt: l'ancora "Come lavoriamo" non finisce sotto l'header sticky
    <Section background="offwhite" id={method.id} className="scroll-mt-20" aria-labelledby="home-metodo-title">
      <Container>
        <SectionIntro eyebrow={method.eyebrow} title={method.title} titleId="home-metodo-title" />
        <ol className="mt-8 grid grid-cols-1 gap-[18px] md:mt-12 md:grid-cols-3">
          {method.steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 70}>
              <Card eyebrow={step.number} title={step.title} textSize="md" className="h-full">
                {step.text}
              </Card>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
