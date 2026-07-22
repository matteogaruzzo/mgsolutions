import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { sectors, getSector } from '@/lib/data';

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getSector(params.slug);
  if (!s) return {};
  return {
    title: `${s.name} — soluzioni digitali`,
    description: s.intro,
  };
}

export default function SectorPage({ params }) {
  const s = getSector(params.slug);
  if (!s) notFound();

  return (
    <>
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 pt-36 pb-20">
          <Link href="/settori" className="font-mono text-xs text-paper/60 hover:text-brass">
            ← Tutti i settori
          </Link>
          <p className="eyebrow text-brass mt-6">MG://settori/{s.slug}</p>
          <h1 className="display text-5xl md:text-6xl mt-4 max-w-3xl leading-[1.02]">{s.name}</h1>
          <p className="mt-6 text-lg text-paper/75 max-w-2xl leading-relaxed">{s.intro}</p>
        </div>
      </section>

      <section className="max-w-edge mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">Cosa realizziamo</p>
            <ul className="mt-6 rule">
              {s.deliverables.map((d) => (
                <li key={d} className="rule py-4 flex gap-3 text-ink/80">
                  <span className="text-brass font-mono">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-ink text-paper rounded-2xl p-8 h-full flex flex-col justify-center">
            <p className="eyebrow text-brass">Il risultato</p>
            <p className="display text-3xl mt-4 leading-snug">{s.result}</p>
            <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper mt-8 self-start">
              Parliamone →
            </Link>
          </div>
        </Reveal>
      </section>

      <CTA title={`Un progetto nel ${s.name.toLowerCase()}?`} />
    </>
  );
}
