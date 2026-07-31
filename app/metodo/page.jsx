import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import { metodoSteps, whyMG, getCaseStudy } from '@/lib/data';
import { ChartIcon, CompassIcon, PaletteIcon, CodeIcon } from '@/components/icons/ServiceIcons';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Il nostro metodo: zero fuffa, solo crescita reale',
  description:
    'Niente template generici. Analisi, strategia, esecuzione: come costruiamo siti che vendono davvero per il tuo business agroalimentare.',
  path: '/metodo',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'come lavora una web agency',
    'metodologia web development',
    'processo costruzione sito',
    'consulenza pre-progetto',
  ],
});

const iconMap = { chart: ChartIcon, compass: CompassIcon, palette: PaletteIcon, code: CodeIcon };

const methodStats = [
  ['4', 'Fasi strutturate'],
  ['11-18', 'Settimane, tempo medio totale'],
  ['100%', 'Trasparenza sugli aggiornamenti'],
];

const methodFaqs = [
  { q: 'Quanto tempo ci vuole in totale?', a: 'In media 11-18 settimane, dall’analisi al software funzionante in staging: dipende da quante integrazioni e funzionalità richiede il tuo progetto.' },
  { q: 'Posso intervenire e dare feedback durante il processo?', a: 'Sì, ogni fase prevede un momento di revisione con te prima di passare alla successiva — specialmente su strategia e design.' },
  { q: 'Cosa succede se voglio cambiare idea a metà del progetto?', a: 'Prima si cambia, meno costa: un aggiustamento in fase di strategia o design è molto più semplice che rifare codice già scritto.' },
  { q: 'Che tecnologie usate in ogni fase?', a: 'Figma per strategia e design, poi Shopify, WordPress o Next.js/Node.js per lo sviluppo, a seconda del progetto — lo trovi nel dettaglio di ogni fase.' },
  { q: 'Come comunicate durante il progetto?', a: 'Con call nei momenti chiave (kick-off, revisione strategia, revisione design) e aggiornamenti periodici via email durante lo sviluppo.' },
  { q: 'Cosa succede dopo il lancio?', a: 'Ogni soluzione attiva comporta una gestione continuativa — hosting, aggiornamenti, assistenza — che fa parte del rapporto di lavoro, non un costo nascosto.' },
  { q: 'Quali sono i deliverable di ogni fase?', a: 'Ogni fase ha output concreti (documento di sintesi, wireframe, prototipo Figma, ambiente di staging funzionante): li trovi elencati nella pagina di ciascuna fase.' },
];

// Narrazione passo-passo basata sui fatti già dichiarati per Tenuta
// Monteverdi in portfolio (case study concept, non un cliente reale).
const monteverdi = getCaseStudy('tenuta-monteverdi');
const walkthrough = [
  { phase: 'Analisi (fase 01)', body: 'Il problema emerso: sito statico da anni, zero e-commerce, prenotazioni gestite solo per telefono. La cantina perdeva vendite dirette.' },
  { phase: 'Strategia (fase 02)', body: 'Priorità definite: e-commerce diretto, wine club ricorrente, prenotazione degustazioni online, tracciabilità di lotto.' },
  { phase: 'Design (fase 03)', body: 'Prototipo costruito attorno al racconto del territorio: vigne, storia della cantina, non solo schede prodotto.' },
  { phase: 'Sviluppo (fase 04)', body: 'Shopify per l’e-commerce, software dedicato per la tasting room, automazione del wine club.' },
];

export default function MetodoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(methodFaqs)) }}
      />
      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="eyebrow">Il Metodo</p>
        <h1 className="display text-4xl sm:text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.05] break-words">
          Come trasformiamo il tuo business digitale.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          4 fasi strutturate, risultati misurabili, partnership vera. Ecco il nostro processo,
          passo dopo passo.
        </p>
      </section>

      {/* ---------- PERCHÉ IL METODO CONTA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Perché il metodo conta</p>
              <p className="mt-5 text-ink/75 leading-relaxed">
                Potremmo saltare questa parte: sederci al PC, scrivere codice, consegnarti il sito.
                Ma allora non conosceremmo il tuo business, né perché lo costruiamo così invece che
                in un altro modo.
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Il nostro metodo esiste perché il processo precede la soluzione. Non vendiamo un
                sito: vendiamo una crescita strutturata. Per questo ogni fase conta.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {methodStats.map(([n, l]) => (
                <div key={l} className="bg-paper p-5 text-center">
                  <p className="display text-2xl md:text-3xl text-forest">{n}</p>
                  <p className="text-xs text-ink/60 mt-2 leading-snug">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4 STEP PRINCIPALI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Le 4 fasi</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
            Ogni fase ha una pagina di approfondimento.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {metodoSteps.map((s, i) => {
            const Icon = iconMap[s.icon] || ChartIcon;
            return (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/metodo/${s.slug}`}
                  className="group block border border-line rounded-2xl p-7 h-full bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-8 h-8 text-forest" />
                    <span className="text-xs text-ink/40">{s.n}</span>
                  </div>
                  <h3 className="h3 text-xl mt-4 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                  <p className="mt-4 text-xs text-forest font-semibold">{s.duration}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                    Approfondisci →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- TIMELINE VISIVA COMPLETA ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Timeline completa</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">Dalla prima call al lancio.</h2>
          </Reveal>
          <div className="mt-14 relative pl-8 sm:pl-10">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-paper/20" aria-hidden="true" />
            <div className="space-y-10">
              {metodoSteps.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70}>
                  <div className="relative">
                    <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-brass border-4 border-ink" />
                    <p className="text-xs tracking-widest font-semibold text-brass">{s.n} · {s.duration.toUpperCase()}</p>
                    <h3 className="h3 text-xl mt-1">{s.title}</h3>
                    <p className="mt-2 text-paper/70 leading-relaxed max-w-2xl">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DURANTE OGNI FASE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa puoi aspettarti da noi</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Durante ogni fase, ricevi...</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metodoSteps.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <div className="border border-line rounded-xl p-6 h-full bg-paper">
                <p className="text-xs tracking-widest font-semibold text-primary">FASE {s.n}</p>
                <ul className="mt-4 space-y-2">
                  {s.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="text-sm text-ink/70 flex gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Domande frequenti sul metodo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">FAQ.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion items={methodFaqs} />
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIANZE SUL PROCESSO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Social proof</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
            Cosa dicono del nostro modo di lavorare.
          </h2>
        </Reveal>
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* ---------- MG vs AGENZIE GENERICHE ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Perché non siamo un’agenzia web standard</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">Il metodo MG, a confronto.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyMG.map((w, i) => (
              <Reveal key={w.title} delay={i * 50}>
                <div className="border border-paper/15 rounded-xl p-5 h-full">
                  <p className="text-xs tracking-widest font-semibold text-brass">{w.title.toUpperCase()}</p>
                  <p className="mt-3 text-xs text-paper/45 leading-relaxed">{w.generic}</p>
                  <p className="mt-3 text-sm text-paper/90 leading-relaxed font-medium">{w.mg}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDY PASSO PASSO ---------- */}
      {monteverdi && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Un esempio, passo dopo passo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Come abbiamo affrontato {monteverdi.title}.
            </h2>
            <p className="mt-3 text-xs italic text-ink/45">
              Case study illustrativo — esempio di progetto tipo, non un cliente reale.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {walkthrough.map((w, i) => (
              <Reveal key={w.phase} delay={i * 60}>
                <div className="border border-line rounded-xl p-6 h-full">
                  <p className="text-xs tracking-widest font-semibold text-forest">{w.phase.toUpperCase()}</p>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href={`/portfolio/${monteverdi.slug}`}
              className="text-sm font-semibold text-forest hover:text-brass"
            >
              Leggi il case study completo →
            </Link>
          </div>
        </section>
      )}

      <CTA
        title="Pronto a iniziare il processo?"
        sub="Consulenza gratuita. Il primo step è sempre capire il tuo progetto."
      />
    </>
  );
}
