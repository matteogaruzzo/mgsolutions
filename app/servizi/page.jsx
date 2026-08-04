import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import {
  servizi,
  heroStats,
  referenceNumbers,
  whyMG,
  businessSuiteModules,
  softwareUpcoming,
  getCaseStudy,
} from '@/lib/data';
import { AIIcon, CartIcon, ScreenIcon, RefreshIcon, GearIcon, CompassIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Servizi web & AI per l’agroalimentare',
  description:
    'E-commerce, automazione, AI agents, CRM, booking engine. Tutto quello che serve per vendere online e automatizzare il tuo business agroalimentare.',
  path: '/servizi',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'servizi web agency agroalimentare',
    'sviluppo e-commerce vino',
    'consulenza digitale agriturismo',
    'software automation cantina',
  ],
});

const iconMap = { ai: AIIcon, cart: CartIcon, web: ScreenIcon, refresh: RefreshIcon, integration: GearIcon, compass: CompassIcon };

const decisionGuide = [
  { problem: 'Il software o il gestionale non è efficiente', goto: 'software-ai-su-misura' },
  { problem: 'Pochi visitatori o vendite dal sito', goto: 'siti-web-contatti' },
  { problem: 'Il sito è vecchio ma funziona in parte', goto: 'restyling-ottimizzazione' },
  { problem: 'L’e-commerce non converte abbastanza', goto: 'ecommerce-shopify' },
  { problem: 'Hai strumenti sparsi che non comunicano', goto: 'ai-integration' },
  { problem: 'Non sai da dove iniziare', goto: 'consulenza-strategica' },
];

const faqs = [
  { q: 'Quale servizio mi serve?', a: 'Se non sei sicuro, la Consulenza Strategica è il punto di partenza più sicuro: chiarisce le priorità prima di scegliere la tecnologia.' },
  { q: 'Posso combinare più servizi?', a: 'Sì, è la situazione più comune: molti progetti nascono da un servizio e ne aggiungono altri nel tempo (vedi l’esempio più sotto).' },
  { q: 'Quanto costa ogni servizio?', a: 'Non pubblichiamo un listino: il costo dipende da obiettivi, funzionalità e integrazioni. Ne parliamo apertamente in call.' },
  { q: 'Quali sono i tempi di realizzazione?', a: 'Variano molto in base al servizio: da poche settimane per un sito vetrina a diversi mesi per un software su misura complesso.' },
  { q: 'Posso iniziare da un servizio e aggiungere altri dopo?', a: 'Sì, è pensato per funzionare così: ogni servizio si integra con gli altri senza dover ripartire da zero.' },
  { q: 'Differenza tra software custom e le future soluzioni preconfigurate?', a: 'Il custom è disponibile oggi, su misura per il tuo processo. Le soluzioni preconfigurate sono ancora in fase di progettazione (vedi la sezione qui sotto).' },
];

const monteverdi = getCaseStudy('tenuta-monteverdi');

export default function Servizi() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-fixed bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.55) 100%), url(/images/servizi/hero-servizi-main.png)',
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-40 pb-24">
          <p className="text-xs font-medium tracking-wider uppercase text-brass">Cosa Facciamo</p>
          <h1 className="display text-3xl sm:text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.2] break-words">
            Tutto quello che serve per crescere online, in un unico posto.
          </h1>
          <p className="mt-8 text-lg text-paper/85 max-w-2xl leading-relaxed">
            Dalla vendita di software AI su misura all’e-commerce, fino alla consulenza strategica.
            Ogni servizio ha un solo scopo: portarti risultati misurabili.
          </p>
        </div>
      </section>

      {/* ---------- INTRODUZIONE FILOSOFICA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Non vendiamo servizi</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">Vendiamo crescita.</h2>
              <p className="mt-5 text-ink/75 leading-relaxed">
                Un sito bello che non vende non è un successo. Un e-commerce veloce che i clienti
                non trovano non è una vittoria. Un software intelligente che non risolve il
                problema non è innovazione.
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Vendiamo più vendite dirette, più lead qualificati, meno lavoro manuale. La lista
                qui sotto sono i veicoli con cui portiamo quel risultato.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {heroStats.map(([n, l]) => (
                <div key={l} className="bg-paper p-6 text-center">
                  <p className="display text-3xl text-forest">{n}</p>
                  <p className="text-xs text-ink/60 mt-2 leading-snug">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- GRID 6 SERVIZI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">I servizi</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Sei modi per far crescere il tuo business.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servizi.map((s, i) => {
            const Icon = iconMap[s.icon] || AIIcon;
            return (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/servizi/${s.slug}`}
                  className={`group relative block rounded-xl p-7 h-full border-x border-b transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    s.premium
                      ? 'border-t-[3px] border-brass/50 border-x-brass/20 border-b-brass/20 bg-wine-bg'
                      : 'border-t-2 border-forest/70 border-x-line border-b-line bg-paper'
                  }`}
                >
                  {s.premium && (
                    <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase text-paper bg-brass rounded-full px-2.5 py-1">
                      Premium
                    </span>
                  )}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 ${
                      s.premium ? 'bg-brass/20' : 'bg-forest/10'
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${s.premium ? 'text-brass' : 'text-forest'}`} />
                  </div>
                  <h3 className="h3 text-xl mt-5 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                  <p className={`mt-4 text-xs font-semibold ${s.premium ? 'text-brass' : 'text-forest'}`}>{s.resultNote}</p>
                  <span className={`mt-3 inline-block text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${s.premium ? 'text-brass' : 'text-forest'}`}>
                    {s.premium ? 'Richiedi consulenza →' : 'Scopri il servizio →'}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- WINE CLUB ---------- */}
      <section className="bg-wine-bg">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-wine-accent">Wine Club</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Wine Club: quando il vino diventa esperienza.
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div>
                <p className="text-ink/75 leading-relaxed">
                  Un wine club non è un semplice abbonamento. È un modo per trasformare i clienti
                  occasionali in una comunità fedele.
                </p>
                <p className="mt-4 text-ink/75 leading-relaxed">Aiutiamo le cantine a costruire wine club che funzionano:</p>
                <ul className="mt-5 space-y-2">
                  {[
                    'Pagina landing dedicata al club',
                    'Iscrizioni e pagamenti ricorrenti automatici',
                    'Automazioni MG Business Suite (email, reminder, upsell)',
                    'CRM dedicato per gli iscritti',
                    'Consulenza su tier, prezzo e lancio',
                  ].map((b) => (
                    <li key={b} className="flex gap-3 text-ink/80">
                      <span className="text-wine-accent shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-ink/60 leading-relaxed max-w-md">
                  Non è solo per grandi cantine. Anche i piccoli produttori possono costruire una
                  comunità di appassionati veri e trasformarla in revenue ricorrente prevedibile
                  ogni mese.
                </p>
                <Link href="/servizi/wine-club" className="mt-7 btn-solid bg-wine-accent hover:bg-ink inline-flex">
                  <GrapeIcon className="w-4 h-4" />
                  Vai alla pagina Wine Club →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line">
                <Image
                  src="/images/servizi/wine-club-cellar.jpg"
                  alt="Botti di rovere in una cantina, luce calda"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- COME SCEGLIERE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Non sai da dove partire?</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Qual è il primo passo per te?</h2>
          </Reveal>
          <div className="mt-10 rule max-w-3xl">
            {decisionGuide.map((d) => {
              const target = servizi.find((s) => s.slug === d.goto);
              return (
                <Link
                  key={d.problem}
                  href={`/servizi/${d.goto}`}
                  className="rule py-4 flex items-center justify-between gap-4 group"
                >
                  <span className="text-ink/80">{d.problem}</span>
                  <span className="text-sm font-semibold text-forest whitespace-nowrap group-hover:text-brass">
                    {target.title} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- FOCUS CONSULENZA STRATEGICA ---------- */}
      <section className="bg-wine-bg">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-wine-accent">Il punto di partenza più sicuro</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Perché molti iniziano dalla Consulenza Strategica.
            </h2>
            <p className="mt-5 text-ink/75 max-w-2xl leading-relaxed">
              La maggior parte dei problemi digitali non inizia con la tecnologia. Inizia con
              confusione strategica: "voglio un sito", "voglio un e-commerce", "voglio un agente
              AI" — spesso la vera risposta è "prima analizziamo il tuo business".
            </p>
            <ul className="mt-6 space-y-2 max-w-xl">
              {[
                'Chiarisce cosa serve davvero, non quello che pensavi di volere',
                'Evita investimenti nella direzione sbagliata',
                'Definisce una roadmap di priorità concreta',
                'Accelera tutto il resto: meno iterazioni, meno tempo perso',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-ink/80">
                  <span className="text-wine-accent shrink-0">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/servizi/consulenza-strategica" className="btn-solid bg-wine-accent hover:bg-ink">
                <GrapeIcon className="w-4 h-4" />
                Scopri la consulenza strategica →
              </Link>
              <Link href="/metodo/analisi-e-obiettivi" className="btn-ghost">
                Come funziona la fase di analisi
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SOCIAL PROOF ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Social proof</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Cosa dicono dei nostri servizi.</h2>
        </Reveal>
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* ---------- NUMERI DAI PROGETTI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Numeri dai progetti illustrativi</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Cosa mostrano i case study.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {referenceNumbers.map(([n, l, src]) => (
              <div key={l} className="bg-paper p-7 text-center">
                <p className="display text-3xl text-forest">{n}</p>
                <p className="text-xs text-ink/60 mt-2 leading-snug">{l}</p>
                <p className="text-[11px] text-ink/40 mt-2 italic">{src}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs italic text-ink/45 max-w-xl">
            Cifre riprese dai case study concept in portfolio (progetti illustrativi, non un
            cliente reale) — mostrano il tipo di risultato che progettiamo per ottenere.
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">FAQ sui servizi.</h2>
        </Reveal>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ---------- MG BUSINESS SUITE ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">MG Business Suite</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">{softwareUpcoming.title}</h2>
            <p className="mt-4 text-paper/70 max-w-2xl leading-relaxed">{softwareUpcoming.body}</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {businessSuiteModules.map((m) => (
              <div key={m.slug} className="border border-paper/15 rounded-xl p-5">
                <p className="font-semibold">{m.name}</p>
                <p className="mt-2 text-sm text-paper/60 leading-relaxed">{m.tagline}</p>
              </div>
            ))}
          </div>
          <Link href="/software" className="mt-8 inline-block text-sm font-semibold text-brass hover:text-paper">
            Scopri tutto sul software →
          </Link>
        </div>
      </section>

      {/* ---------- MG vs AGENZIE GENERICHE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Perché non siamo un’agenzia web standard</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">I nostri servizi, a confronto.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyMG.map((w, i) => (
            <Reveal key={w.title} delay={i * 50}>
              <div className="border border-line rounded-xl p-5 h-full bg-paper">
                <p className="text-xs tracking-widest font-semibold text-forest">{w.title.toUpperCase()}</p>
                <p className="mt-3 text-xs text-ink/40 leading-relaxed">{w.generic}</p>
                <p className="mt-3 text-sm text-ink/80 leading-relaxed font-medium">{w.mg}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CASE STUDY CROSS-SERVICE ---------- */}
      {monteverdi && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow">Un esempio, tre servizi insieme</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
                Come {monteverdi.title} ha usato più servizi insieme.
              </h2>
              <p className="mt-3 text-xs italic text-ink/45">
                Case study illustrativo — esempio di progetto tipo, non un cliente reale.
              </p>
            </Reveal>
            <div
              className="mt-10 rounded-xl overflow-hidden border border-line aspect-[21/9] bg-cover bg-center"
              style={{ backgroundImage: `url(/images/case-studies/${monteverdi.slug}-desktop.png)` }}
            />
            <div className="mt-6 grid sm:grid-cols-3 gap-5">
              <div className="bg-paper border border-line rounded-xl p-6">
                <p className="text-xs tracking-widest font-semibold text-forest">CONSULENZA STRATEGICA</p>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{monteverdi.problem}</p>
              </div>
              <div className="bg-paper border border-line rounded-xl p-6">
                <p className="text-xs tracking-widest font-semibold text-forest">SITI WEB & E-COMMERCE</p>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{monteverdi.solution}</p>
              </div>
              <div className="bg-paper border border-line rounded-xl p-6">
                <p className="text-xs tracking-widest font-semibold text-forest">SOFTWARE AI</p>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Il software Tasting Flow ha automatizzato prenotazioni e follow-up della tasting room.
                </p>
              </div>
            </div>
            <ul className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl">
              {monteverdi.results.map((r) => (
                <li key={r} className="text-sm text-ink/80 flex gap-2">
                  <span className="text-forest shrink-0">✓</span> {r}
                </li>
              ))}
            </ul>
            <Link href={`/portfolio/${monteverdi.slug}`} className="mt-6 inline-block text-sm font-semibold text-forest hover:text-brass">
              Leggi il case study completo →
            </Link>
          </div>
        </section>
      )}

      {/* ---------- CTA FINALE ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 max-w-2xl mx-auto text-center">
          <p className="eyebrow text-brass">Parliamone insieme</p>
          <h2 className="h2 text-3xl md:text-4xl mt-5">
            Non so ancora se ti serve un sito, un software o un e-commerce. Onestamente, nemmeno tu, forse.
          </h2>
          <p className="mt-5 text-paper/80 leading-relaxed">
            Per questo mettiamoci 30 minuti al telefono, gratuiti e senza pressione. Ti farò
            domande sul tuo business, e insieme capiremo cosa serve davvero — anche se la risposta
            fosse "puoi farcela da solo".
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/servizi/consulenza-strategica" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Richiedi consulenza strategica →
            </Link>
            <Link href="/prenota-call" className="btn-ghost border-paper/30 text-paper hover:bg-paper hover:text-ink">
              Prenota una call diretta →
            </Link>
          </div>
        </div>
      </section>

      <ServiceArea pageType="servizi" />
    </>
  );
}
