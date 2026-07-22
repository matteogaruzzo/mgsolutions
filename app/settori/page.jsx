import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { sectors } from '@/lib/data';

export const metadata = {
  title: 'Settori',
  description:
    'I settori in cui lavora MG Solutions: vitivinicolo, ristorazione, servizi professionali, retail e PMI. Cosa possiamo realizzare per ciascuno.',
};

export default function Settori() {
  return (
    <>
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="eyebrow">MG://settori</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Ogni settore ha le sue regole. Le conosciamo.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Non facciamo lo stesso sito per tutti. Entra in un settore e scopri cosa possiamo
          realizzare, con esempi concreti e il risultato che portiamo.
        </p>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link
                href={`/settori/${s.slug}`}
                className="group block border border-line rounded-2xl p-8 bg-paper hover:border-forest transition-colors h-full"
              >
                <div className="flex items-baseline justify-between">
                  <h2 className="display text-3xl">{s.name}</h2>
                  <span className="font-mono text-xs text-ink/40 group-hover:text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm text-forest font-mono">{s.lead}</p>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed">{s.intro}</p>
                <span className="mt-5 inline-block font-mono text-xs text-forest group-hover:text-brass">
                  Cosa realizziamo →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
