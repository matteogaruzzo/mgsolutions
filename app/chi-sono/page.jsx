import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { team } from '@/lib/data';

export const metadata = {
  title: 'Chi sono',
  description:
    'Matteo Garuzzo, web designer e sviluppatore specializzato in Shopify e AI. Un freelance con un team dietro: sviluppo, marketing e AI.',
};

const stack = [
  'Shopify / Liquid',
  'WordPress / PHP',
  'HTML · CSS · JavaScript',
  'React / Next.js',
  'Agenti & automazioni AI',
  'SEO tecnica & GEO',
];

export default function ChiSono() {
  return (
    <>
      <section className="max-w-edge mx-auto px-6 pt-32 pb-20">
        <p className="eyebrow">MG://chi-sono</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Un freelance che ci mette la faccia. Un team che fa la differenza.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Mi chiamo Matteo Garuzzo. Da oltre cinque anni progetto e sviluppo siti ed e-commerce,
          con un focus preciso su Shopify e, sempre di più, sull’intelligenza artificiale applicata
          al business. Non vendo “un sito”: vendo il risultato che quel sito deve produrre — più
          contatti, più vendite, più fiducia.
        </p>
      </section>

      <section className="rule">
        <div className="max-w-edge mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Il metodo</p>
              <h2 className="display text-3xl mt-4">Parli con chi costruisce.</h2>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Niente commerciali, niente intermediari. Quando lavori con noi parli direttamente
                con chi progetta e sviluppa. Meno fraintendimenti, tempi più rapidi e un progetto
                costruito intorno ai tuoi obiettivi, non a un pacchetto standard.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Davanti ci sono io. Dietro, un team compatto: uno specialista AI e uno di marketing e
                lead generation. Così un freelance ti dà attenzione da freelance, con la forza di una
                struttura.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="eyebrow">Stack operativo</p>
              <ul className="mt-5 space-y-3">
                {stack.map((s) => (
                  <li key={s} className="font-mono text-sm flex items-center gap-3">
                    <span className="text-brass">→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <p className="eyebrow text-brass">MG://team</p>
          <h2 className="display text-4xl md:text-5xl mt-4">Le persone dietro i progetti</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="border border-paper/15 rounded-xl p-7 h-full">
                  <p className="font-mono text-xs text-brass tracking-widest">0{i + 1}</p>
                  <h3 className="display text-2xl mt-3">{m.name}</h3>
                  <p className="font-mono text-xs text-paper/50 mt-1">{m.role}</p>
                  <p className="mt-4 text-sm text-paper/70 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
