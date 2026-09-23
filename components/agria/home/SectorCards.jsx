import Link from 'next/link';
import { Container, Heading, Reveal, Section, Text, TextLink } from '@/components/agria/ui';
import { sectors } from '@/content/agria/home';
import SectionIntro from './SectionIntro';
import SectorPattern from './SectorPattern';

const CARD =
  'flex h-full flex-col overflow-hidden rounded-agria-card border border-agria-border bg-agria-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[3px] hover:border-agria-green/45 hover:shadow-[0_18px_42px_rgb(var(--agria-graphite)/0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0';

export default function SectorCards() {
  return (
    <Section background="white" aria-labelledby="home-settori-title">
      <Container>
        <SectionIntro eyebrow={sectors.eyebrow} title={sectors.title} titleId="home-settori-title" />
        <ul className="mt-8 grid grid-cols-1 gap-[18px] md:mt-12 md:grid-cols-3">
          {sectors.items.map((sector, index) => (
            <Reveal as="li" key={sector.key} delay={index * 70}>
              <article className={CARD}>
                {/* segnaposto: qui andrà la foto reale del settore */}
                <div className="relative h-[168px] bg-agria-offwhite">
                  <SectorPattern sector={sector.key} />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-[26px] pb-7 pt-6">
                  <Heading level="h3">{sector.title}</Heading>
                  <Text size="md" muted>
                    {sector.text}
                  </Text>
                  <div className="mt-auto pt-3">
                    <TextLink as={Link} href={sector.href} aria-label={`${sectors.linkLabel}: ${sector.title}`}>
                      {sectors.linkLabel}
                    </TextLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
