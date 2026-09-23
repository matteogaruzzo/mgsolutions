import Link from 'next/link';
import { Card, Container, Section, TextLink } from '@/components/agria/ui';
import { AutoTabs, HoverGroup } from '@/components/agria/motion';
import { services } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

// Servizi come schede per settore: in ogni scheda le tre aree di servizio
// applicate a quel settore, ognuna collegata alla pagina del servizio.
export default function ServiceCards() {
  const tabs = services.bySector.map((sector) => ({
    id: sector.key,
    label: sector.label,
    content: (
      <HoverGroup as="ul" className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {services.items.map((service) => (
          <li key={service.key}>
            <Card
              interactive
              eyebrow={service.eyebrow}
              title={service.title}
              textSize="md"
              className="h-full"
              action={
                <TextLink
                  as={Link}
                  href={service.href}
                  aria-label={`${services.linkLabel}: ${service.title} per ${sector.label}`}
                >
                  {services.linkLabel}
                </TextLink>
              }
            >
              {sector.lines[service.key]}
            </Card>
          </li>
        ))}
      </HoverGroup>
    ),
  }));

  return (
    <Section background="offwhite" aria-labelledby="home-servizi-title">
      <Container>
        <SectionIntro
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
          titleId="home-servizi-title"
        />
        <AutoTabs items={tabs} label={services.tabsLabel} className="mt-8 md:mt-12" />
      </Container>
    </Section>
  );
}
