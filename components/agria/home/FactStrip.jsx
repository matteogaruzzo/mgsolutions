import { Container, Reveal } from '@/components/agria/ui';
import { facts } from '@/content/agria/home';

// Striscia bianca sovrapposta al bordo inferiore dell'hero.
export default function FactStrip() {
  return (
    <Container className="relative z-10 -mt-9 md:-mt-16">
      <Reveal
        as="ul"
        className="grid grid-cols-2 gap-px overflow-hidden rounded-agria-card border border-agria-border bg-agria-border md:grid-cols-4"
      >
        {facts.map((fact) => (
          <li key={fact.value} className="flex flex-col gap-2 bg-agria-white px-5 py-6 md:px-6 md:py-7">
            {/* riga di altezza fissa: valori grandi e piccoli poggiano sulla stessa linea */}
            <span className="flex h-[clamp(1.7rem,2.8vw,2.4rem)] items-end">
              <span
                className={`font-agria-sans font-light leading-none tracking-[-0.03em] text-agria-graphite ${
                  fact.kind === 'word' ? 'text-[clamp(1.2rem,1.95vw,1.7rem)]' : 'text-[clamp(1.7rem,2.8vw,2.4rem)]'
                }`}
              >
                {fact.value}
              </span>
            </span>
            <span className="font-agria-sans text-agria-sm text-agria-grey">{fact.label}</span>
          </li>
        ))}
      </Reveal>
    </Container>
  );
}
