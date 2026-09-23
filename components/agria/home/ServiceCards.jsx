import Link from 'next/link';
import { Card, Container, Reveal, Section, TextLink } from '@/components/agria/ui';
import { services } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

export default function ServiceCards() {
  return (
    <Section background="offwhite" aria-labelledby="home-servizi-title">
      <Container>
        <SectionIntro
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
          titleId="home-servizi-title"
        />
        <ul className="mt-8 grid grid-cols-1 gap-[18px] md:mt-12 md:grid-cols-3">
          {services.items.map((service, index) => (
            <Reveal as="li" key={service.href} delay={index * 70}>
              <Card
                interactive
                eyebrow={service.eyebrow}
                title={service.title}
                textSize="md"
                className="h-full"
                action={
                  <TextLink as={Link} href={service.href} aria-label={`${services.linkLabel}: ${service.title}`}>
                    {services.linkLabel}
                  </TextLink>
                }
              >
                {service.text}
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
