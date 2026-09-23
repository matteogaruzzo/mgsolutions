import { Container, Reveal, Section, Text } from '@/components/agria/ui';
import { data } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

// Altezze delle barre dello schema: puramente decorative, non rappresentano dati.
const BARS = [40, 54, 47, 66, 59, 74, 68, 83];

export default function DataSection() {
  return (
    <Section background="white" aria-labelledby="home-dati-title">
      <Container className="grid grid-cols-1 items-center gap-[clamp(26px,4vw,58px)] md:grid-cols-[1.02fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionIntro eyebrow={data.eyebrow} title={data.title} titleId="home-dati-title" />
          <Reveal>
            <Text size="lg" muted>
              {data.text}
            </Text>
          </Reveal>
        </div>

        <Reveal
          as="figure"
          className="overflow-hidden rounded-[22px] border border-agria-border bg-agria-white shadow-[0_24px_58px_rgb(var(--agria-graphite)/0.08)]"
        >
          <figcaption className="flex items-center gap-2 border-b border-agria-border px-[18px] py-3 font-agria-mono text-[10.5px] uppercase tracking-[0.12em] text-agria-grey">
            <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-agria-green" />
            {data.schemaLabel}
          </figcaption>
          <div className="p-5">
            <div aria-hidden="true" className="flex h-[122px] items-end gap-2 border-b border-agria-grey/40">
              {BARS.map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-md bg-gradient-to-b from-agria-green/85 to-agria-green/55"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <ul className="mt-4 grid gap-2">
              {data.rows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-agria-border px-3 py-2.5 font-agria-sans text-agria-sm font-medium text-agria-graphite"
                >
                  {row.label}
                  <span className="shrink-0 rounded-full bg-agria-green/[0.12] px-2.5 py-1 font-agria-mono text-[10.5px] uppercase tracking-[0.1em] text-agria-green-dark">
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
