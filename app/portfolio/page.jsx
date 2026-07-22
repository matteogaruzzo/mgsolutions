import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Portfolio',
  description:
    'Progetti e case study di MG Solutions: e-commerce Shopify, siti web, app mobile e brand identity per aziende in tutta Italia.',
};

const stats = [
  ['20+', 'Progetti consegnati'],
  ['5+', 'Anni di esperienza'],
  ['3', 'Specialisti nel team'],
  ['24/7', 'Supporto continuo'],
];

export default function Portfolio() {
  return (
    <>
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="eyebrow">MG://lavori</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Progetti costruiti per convertire, non solo per fare bella figura.
        </h1>
        <p className="mt-6 font-mono text-xs text-ink/50">
          I progetti “CONCEPT” sono dimostrazioni; gli altri sono lavori reali.
        </p>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="border border-line rounded-2xl overflow-hidden bg-paper h-full">
                <div className="h-40 bg-gradient-to-br from-forest to-forest-deep" />
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <h2 className="display text-3xl">{p.title}</h2>
                    {p.concept && (
                      <span className="font-mono text-[10px] tracking-widest border border-line rounded-full px-2 py-0.5 text-ink/50">
                        CONCEPT
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-forest mt-2">{p.kind}</p>
                  <p className="mt-4 text-sm text-ink/65 leading-relaxed">{p.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] bg-paper-dim text-ink/60 rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-paper p-8 text-center">
              <p className="display text-4xl text-forest">{n}</p>
              <p className="font-mono text-xs text-ink/55 mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
