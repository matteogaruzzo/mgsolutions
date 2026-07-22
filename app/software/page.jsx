import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import {
  softwareFamilies,
  softwareFamilyStatus,
  softwareUpcoming,
  softwareCustom,
  softwareOngoing,
  investmentFactors,
} from '@/lib/data';

export const metadata = {
  title: 'Software',
  description:
    'Automazioni e agenti AI configurabili su progetto per i processi aziendali: cosa possiamo costruire oggi, senza prezzi o date inventate.',
};

export default function Software() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-14">
        <p className="eyebrow">MG://software</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Software AI che lavorano al posto di un reparto.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Quattro famiglie di automazione che sappiamo costruire oggi, configurate sui processi
          reali della tua azienda. Non sono ancora prodotti SaaS pronti da attivare in autonomia:
          te lo diciamo chiaramente invece di far finta che lo siano.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/prenota-call" className="btn-solid">
            Richiedi una valutazione →
          </Link>
          <Link href="#famiglie" className="btn-ghost">
            Scopri cosa possiamo automatizzare
          </Link>
        </div>
      </section>

      {/* ---------- FAMIGLIE DI AUTOMAZIONE ---------- */}
      <section id="famiglie" className="max-w-edge mx-auto px-6 pb-24 scroll-mt-24">
        <Reveal>
          <p className="eyebrow">MG://famiglie-di-automazione</p>
          <h2 className="display text-3xl md:text-4xl mt-4 max-w-2xl">
            Quattro famiglie, non sette prodotti scollegati.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
          {softwareFamilies.map((f, i) => (
            <Reveal key={f.slug} delay={i * 60}>
              <div className="h-full rounded-2xl p-7 flex flex-col border border-line bg-paper">
                <span className="font-mono text-[10px] tracking-widest text-brass self-start border border-brass/40 rounded-full px-2.5 py-1">
                  {softwareFamilyStatus.label.toUpperCase()}
                </span>
                <h3 className="display text-xl mt-4">{f.name}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{f.pitch}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {f.scope.map((s) => (
                    <li key={s} className="text-sm flex gap-2.5 text-ink/70">
                      <span className="text-brass">✓</span> {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-ink/50 leading-relaxed">{softwareFamilyStatus.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-ink/50 max-w-2xl">
          * Nessuna famiglia è acquistabile tramite checkout automatico. Ogni attivazione parte da
          un’analisi del processo in call.
        </p>
      </section>

      {/* ---------- SOLUZIONI PRECONFIGURATE IN ARRIVO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow">MG://in-arrivo</p>
            <h2 className="display text-2xl md:text-3xl mt-4 max-w-2xl">{softwareUpcoming.title}</h2>
            <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">{softwareUpcoming.body}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. SOFTWARE AI SU MISURA ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-brass">MG://software-su-misura</p>
              <h2 className="display text-3xl md:text-4xl mt-4">{softwareCustom.title}</h2>
              <p className="mt-5 text-paper/70 leading-relaxed max-w-lg">{softwareCustom.pitch}</p>
              <Link
                href="/prenota-call"
                className="btn-solid bg-brass text-ink hover:bg-paper mt-8 inline-flex"
              >
                Raccontaci il processo da automatizzare →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3">
              {softwareCustom.features.map((f) => (
                <li
                  key={f}
                  className="border border-paper/15 rounded-xl px-5 py-4 text-sm text-paper/80 flex gap-3"
                >
                  <span className="text-brass font-mono">→</span> {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- 3. GESTIONE CONTINUATIVA ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">MG://gestione-continuativa</p>
          <h2 className="display text-3xl md:text-4xl mt-4 max-w-2xl">{softwareOngoing.title}</h2>
          <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">{softwareOngoing.intro}</p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {softwareOngoing.items.map((item) => (
            <div key={item} className="bg-paper p-6">
              <p className="text-sm text-ink/75">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- DA COSA DIPENDE L'INVESTIMENTO ---------- */}
      <section className="rule">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">MG://investimento</p>
            <h2 className="display text-3xl md:text-4xl mt-4 max-w-2xl">
              Da cosa dipende l’investimento.
            </h2>
            <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">
              Non pubblichiamo un listino perché il costo reale cambia in base a come la soluzione
              viene usata, non solo a quale modulo scegli. Ne parliamo apertamente in call, prima
              di qualsiasi proposta.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {investmentFactors.map((f, i) => (
              <Reveal key={f} delay={i * 40}>
                <div className="border border-line rounded-xl px-5 py-4 text-sm text-ink/75">
                  {f}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Parliamo del processo da automatizzare."
        sub="In call guardiamo il processo reale, non un piano prezzi. Ti diciamo con onestà cosa possiamo configurare oggi e cosa richiede sviluppo."
      />
    </>
  );
}
