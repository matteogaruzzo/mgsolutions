import Link from 'next/link';
import { Card, Container, Eyebrow, Reveal, Section, TextLink } from '@/components/agria/ui';
import { AutoTabs, HoverGroup } from '@/components/agria/motion';
import PageHero from '@/components/agria/sections/PageHero';
import ArticleCards from '@/components/agria/sections/ArticleCards';
import ClosingCta from '@/components/agria/home/ClosingCta';
import AreaCards from './AreaCards';
import {
  SECTOR_PAGES_LIVE,
  sectorLinkLabel,
  sectorTabs,
  serviceClosing,
  serviceSections,
} from '@/content/agria/servizi';
import { AGRIA_BRAND, breadcrumbSchema, serviceSchema, webPageSchema } from '@/lib/seo';

const STATEMENT = 'font-agria-sans text-[clamp(1.3rem,2.2vw,1.85rem)] font-light leading-[1.4] text-agria-graphite';

// Titolo di sezione: etichetta piccola (stile eyebrow) con semantica h2.
function SectionLabel({ id, children }) {
  return (
    <Eyebrow as="h2" id={id}>
      {children}
    </Eyebrow>
  );
}

// Sezione "etichetta a sinistra, testo a destra" (Il problema, Cosa non facciamo).
function Statement({ id, label, text, background }) {
  return (
    <Section background={background} spacing="compact" aria-labelledby={id}>
      <Container className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:gap-[clamp(32px,5vw,72px)]">
        <SectionLabel id={id}>{label}</SectionLabel>
        <Reveal>
          <p className={`max-w-[46ch] ${STATEMENT}`}>{text}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

// Template delle pagine area (Prompt 12): hero, problema, cosa comprende,
// settori (AutoTabs), metodo, cosa non facciamo, approfondimenti, altre aree,
// CTA finale. area: un elemento di areaPages (content/agria/servizi.js).
export default function ServicePage({ area }) {
  const { meta } = area;
  const ids = Object.fromEntries(Object.keys(serviceSections).map((key) => [key, `${area.key}-${key}`]));
  const columns = area.includes.length >= 7 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  const tabs = sectorTabs.map((sector) => ({
    id: sector.key,
    label: sector.label,
    content: (
      <div className="flex flex-col gap-6 rounded-agria-card border border-agria-border bg-agria-white p-8 md:p-10">
        <p className={STATEMENT}>{area.sectors[sector.key]}</p>
        {SECTOR_PAGES_LIVE && (
          <TextLink as={Link} href={sector.href} aria-label={`${sectorLinkLabel}: ${sector.label}`}>
            {sectorLinkLabel}
          </TextLink>
        )}
      </div>
    ),
  }));

  const breadcrumb = [
    { name: 'Home', path: '/' },
    { name: 'Servizi', path: '/servizi' },
    { name: area.name, path: meta.path },
  ];
  const service = serviceSchema({
    name: area.name,
    description: meta.description,
    path: meta.path,
    providerName: AGRIA_BRAND,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(meta)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumb)) }} />

      {/* 1. Hero */}
      <PageHero
        eyebrow={area.eyebrow}
        title={area.title}
        lead={area.lead}
        cta={area.cta}
        pills={area.pills}
        titleId={`${area.key}-title`}
      />

      {/* 2. Il problema */}
      <Statement id={ids.problem} label={serviceSections.problem} text={area.problem} background="white" />

      {/* 3. Cosa comprende */}
      <Section background="offwhite" aria-labelledby={ids.includes}>
        <Container>
          <SectionLabel id={ids.includes}>{serviceSections.includes}</SectionLabel>
          <HoverGroup as="ul" className={`mt-8 grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:mt-10 ${columns}`}>
            {area.includes.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={(index % 4) * 60} className="h-full">
                  <Card title={item.title} textSize="md" className="h-full">
                    {item.text}
                  </Card>
                </Reveal>
              </li>
            ))}
          </HoverGroup>
        </Container>
      </Section>

      {/* 4. Come si applica ai tre settori */}
      <Section background="white" aria-labelledby={ids.sectors}>
        <Container>
          <SectionLabel id={ids.sectors}>{serviceSections.sectors}</SectionLabel>
          <AutoTabs items={tabs} label={serviceSections.sectors} className="mt-8 md:mt-10" />
        </Container>
      </Section>

      {/* 5. Come lavoriamo su questa area */}
      <Section background="offwhite" aria-labelledby={ids.steps}>
        <Container>
          <SectionLabel id={ids.steps}>{serviceSections.steps}</SectionLabel>
          <HoverGroup as="ol" className="mt-8 grid grid-cols-1 gap-[18px] md:mt-10 md:grid-cols-3">
            {area.steps.map((step, index) => (
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

      {/* 6. Cosa non facciamo */}
      <Statement id={ids.notDo} label={serviceSections.notDo} text={area.notDo} background="white" />

      {/* 7. Approfondimenti */}
      <Section background="offwhite" aria-labelledby={ids.articles}>
        <Container>
          <SectionLabel id={ids.articles}>{serviceSections.articles}</SectionLabel>
          <ArticleCards articles={area.articles} columns={2} className="mt-8 md:mt-10" />
        </Container>
      </Section>

      {/* le altre due aree */}
      <AreaCards
        exclude={area.key}
        headingAs="h3"
        aria-labelledby={ids.others}
        intro={<SectionLabel id={ids.others}>{serviceSections.others}</SectionLabel>}
      />

      {/* 8. CTA finale */}
      <ClosingCta title={serviceClosing.title} text={null} cta={serviceClosing.cta} />
    </>
  );
}
