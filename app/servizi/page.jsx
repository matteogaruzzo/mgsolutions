import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Servizi',
  description:
    'Software e agenti AI, e-commerce Shopify, siti web, restyling, AI integration e consulenza strategica. Tutto ciò che offre MG Solutions.',
};

export default function Servizi() {
  return (
    <>
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="eyebrow">MG://servizi</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Tutto quello che serve per crescere online, in un unico posto.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Dalla vendita di software AI pronti all’uso allo sviluppo su misura, fino a e-commerce e
          consulenza. Ogni servizio ha un solo scopo: portarti risultati misurabili.
        </p>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-24">
        <div className="rule">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className="rule py-10 grid md:grid-cols-[9rem_1fr] gap-6 md:gap-12 items-start">
                <p className="font-mono text-xs tracking-widest text-forest pt-2">
                  {String(i + 1).padStart(2, '0')} · {s.tag}
                </p>
                <div>
                  <h2 className="display text-3xl md:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-ink/70 max-w-2xl leading-relaxed">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/software" className="btn-solid">Vedi i software in vendita →</Link>
          <Link href="/settori" className="btn-ghost">Esplora i settori</Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
