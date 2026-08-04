import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import BookingForm from '@/components/BookingForm';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import {
  servizi,
  sectors,
  caseStudies,
  heroStats,
  referenceNumbers,
  problemPoints,
  forWho,
  notForWho,
  metodoSteps,
} from '@/lib/data';
import { GrapeIcon, OliveIcon, FarmhouseDoorIcon } from '@/components/icons/WineIcons';
import { AIIcon, CartIcon, ScreenIcon, RefreshIcon, GearIcon, CompassIcon } from '@/components/icons/ServiceIcons';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';
import { faqs } from '@/lib/data';

const PAGE = {
  title: 'Matteo Garuzzo | Sviluppatore & AI Specialist per Agroalimentare',
  description:
    'Specialista Next.js e AI per cantine, frantoi e agriturismi. Costruisco siti web, CRM e software su misura che aumentano vendite dirette e automazioni.',
  path: '/',
};

// La root page condivide il segmento con app/layout.jsx: il title.template
// lì definito non si applica qui (stesso segmento, non un discendente), quindi
// il <title> risulta esattamente PAGE.title, senza suffisso automatico.
export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'web agency agroalimentare',
    'e-commerce vino',
    'automazione agribusiness',
    'software per cantina',
    'digitalizzazione Umbria',
    'Matteo Garuzzo',
  ],
});

const sectorTheme = {
  'wine-viticulture': { icon: GrapeIcon, accent: 'text-wine-accent', border: 'hover:border-wine-accent' },
  'oleifici-food-tech': { icon: OliveIcon, accent: 'text-olio-accent', border: 'hover:border-olio-accent' },
  'wine-hospitality-agriturismi': {
    icon: FarmhouseDoorIcon,
    accent: 'text-hospitality-accent',
    border: 'hover:border-hospitality-accent',
  },
};

const serviceIcon = {
  AI: AIIcon,
  SHOPIFY: CartIcon,
  WEB: ScreenIcon,
  RESTYLING: RefreshIcon,
  INTEGRAZIONI: GearIcon,
  CONSULENZA: CompassIcon,
};

export default function Home() {
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
        className="relative overflow-hidden pt-16 min-h-[90vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero/home-hero.png)' }}
      >
        {/* sfumato bianco da sinistra a destra: testo leggibile, sfondo visibile a destra */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.45) 70%, rgba(255,255,255,0.15) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-edge mx-auto px-6 w-full py-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest flex items-center gap-2">
            <GrapeIcon className="w-4 h-4" /> Digital Architect · Wine & Agribusiness · Perugia
          </p>

          <h1 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6 max-w-3xl break-words">
            Digitalizziamo l’eccellenza agroalimentare.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">
            Siti, e-commerce e software per <strong className="body-strong">cantine</strong>,{' '}
            <strong className="body-strong">produttori</strong> e{' '}
            <strong className="body-strong">strutture ricettive rurali</strong> che uniscono
            terra, accoglienza e innovazione.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/prenota-call" className="btn-solid">
              <GrapeIcon className="w-4 h-4" />
              Prenota una call →
            </Link>
            <Link href="/settori" className="btn-ghost">
              Scopri i tre settori
            </Link>
          </div>

          {/* hero stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-paper p-8 rounded-2xl shadow-lg w-fit">
            {heroStats.map(([n, l], i) => (
              <div key={l} className={`text-center ${i > 0 ? 'md:border-l md:border-line md:pl-6' : ''}`}>
                <p className="display text-3xl md:text-4xl text-forest">{n}</p>
                <p className="text-sm text-ink/60 mt-3 font-medium leading-snug">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FORM PRENOTAZIONE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div>
              <p className="eyebrow">Consulenza gratuita</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-md text-ink">
                Parliamo del tuo progetto in 30 minuti.
              </h2>
              <p className="mt-4 text-ink/65 max-w-md leading-relaxed">
                Compila il form: apriamo una conversazione su WhatsApp e ti dico con onestà se e
                come possiamo aiutarti. Nessun impegno.
              </p>
            </div>
            <BookingForm />
          </div>
        </Reveal>
      </section>

      {/* ---------- TERRITORIO / ACCOGLIENZA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20 grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          <Reveal>
            <div className="bg-paper p-8 md:p-10 h-full">
              <p className="text-xs tracking-widest font-semibold text-brass">01 · TERRITORIO</p>
              <h3 className="h3 text-2xl mt-3 text-ink max-w-sm">
                Siti e-commerce che raccontano una storia.
              </h3>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed max-w-sm">
                Non vendiamo bottiglie online. Vendiamo il tuo territorio, la tua eredità, le tue
                radici. Un sito di vino non è un negozio — è una porta aperta sulla tua cantina.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-paper p-8 md:p-10 h-full">
              <p className="text-xs tracking-widest font-semibold text-brass">02 · ACCOGLIENZA</p>
              <h3 className="h3 text-2xl mt-3 text-ink max-w-sm">
                Software intelligente per esperienze indimenticabili.
              </h3>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed max-w-sm">
                Dai tasting room al wine hotel, dalle prenotazioni alle degustazioni, gestiamo la
                tua ospitalità senza che tu debba seguire ogni dettaglio. La tecnologia non deve
                essere visibile — deve lavorare per te.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- I TRE SETTORI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">I tre settori</p>
          <h2 className="h2 text-4xl md:text-5xl mt-4 max-w-2xl text-ink">
            Tre settori verticali. Un solo standard di qualità.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {sectors.map((sec, i) => {
            const t = sectorTheme[sec.slug];
            const Icon = t.icon;
            return (
              <Reveal key={sec.slug} delay={i * 60}>
                <Link
                  href={`/settori/${sec.slug}`}
                  className={`group block border border-line rounded-xl p-7 h-full bg-paper transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${t.border}`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-7 h-7 ${t.accent} transition-colors`} />
                    <span className="text-xs text-ink/30">0{i + 1}</span>
                  </div>
                  <h3 className="h3 text-xl mt-4 text-ink">{sec.name}</h3>
                  <p className="mt-2 text-sm text-ink/60">{sec.lead}</p>
                  <span className={`mt-4 inline-block text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${t.accent}`}>
                    Vedi cosa realizziamo →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- COSA FACCIO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cosa faccio</p>
            <h2 className="h2 text-4xl md:text-5xl mt-4 max-w-2xl text-ink">
              Un solo interlocutore, un team specializzato dietro.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servizi.map((s, i) => {
              const Icon = serviceIcon[s.tag] || AIIcon;
              return (
                <Reveal key={s.title} delay={i * 60}>
                  <Link
                    href={`/servizi/${s.slug}`}
                    className="group block bg-paper border border-line rounded-xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon className="w-7 h-7 text-forest" />
                    <h3 className="h3 text-xl mt-4 text-ink">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                    <span className="mt-4 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                      Scopri il servizio →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8">
            <Link href="/servizi" className="text-sm font-semibold text-forest hover:text-brass">
              Tutto quello che faccio →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- QUIZ CTA ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-20 text-center">
          <Reveal>
            <p className="eyebrow text-brass">Non sai da dove iniziare?</p>
            <h2 className="display text-3xl md:text-4xl mt-4 max-w-2xl mx-auto leading-tight">
              Scopri la tua strategia digitale in 2 minuti.
            </h2>
            <p className="mt-4 text-paper/75 max-w-xl mx-auto">
              Rispondi a poche domande e ricevi una proposta preliminare su misura per la tua
              attività. Nessun prezzo qui: solo chiarezza su cosa ha senso valutare.
            </p>
            <Link href="/quiz?fresh=1" className="btn-solid bg-brass text-ink hover:bg-paper mt-8">
              <GrapeIcon className="w-4 h-4" />
              Inizia il quiz →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- CHI SONO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-gradient-to-br from-wine-bg via-paper to-olio-bg flex items-end justify-center">
              <Image
                src="/images/matteo/matteo-hero-nobg.png"
                alt="Matteo Garuzzo, fondatore di MG Solutions"
                width={900}
                height={1273}
                className="relative w-[85%] h-auto object-contain"
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="eyebrow">Chi sono</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">
                Chi sono e cosa faccio per te.
              </h2>
              <p className="mt-5 text-ink/70 leading-relaxed max-w-xl">
                Non sono un’agenzia che osserva dall’esterno. Sono <strong className="body-strong">Matteo
                Garuzzo</strong>, e sviluppo sistemi digitali per il vino e l’agroalimentare da oltre
                cinque anni. Ho fondato MG Solutions quando mi sono accorto che le cantine e i
                produttori di eccellenza non trovavano partner digitali che capissero il loro mondo.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
                Conosco il territorio, i tempi della vigna, l’importanza della tracciabilità, come
                funziona una tasting room. Ogni progetto che realizzo lo penso chiedendomi:{' '}
                <em>“Questo sito funzionerebbe per la cantina di accanto?”</em>
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
                Sono un web developer prima di tutto. <strong className="body-strong">Non delego mai lo
                sviluppo.</strong> Chi lavora con me sa che dietro c’è una persona, non una macchina
                che genera template.
              </p>
              <Link href="/chi-sono" className="mt-6 inline-block text-sm font-semibold text-forest hover:text-brass">
                Scopri di più su di me →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- IL PROBLEMA ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Il problema</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">
              Ti riconosci in almeno uno di questi?
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemPoints.map((p, i) => (
              <Reveal key={p} delay={i * 50}>
                <div className="border border-paper/15 rounded-xl p-6 h-full">
                  <p className="text-paper/85 leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- IL METODO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow">Il metodo</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Come lavoro con te.</h2>
            </div>
            <Link href="/metodo" className="text-sm font-semibold text-forest hover:text-brass">
              Il metodo in dettaglio →
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metodoSteps.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <Link
                href={`/metodo/${p.slug}`}
                className="group block border border-line rounded-xl p-6 h-full bg-paper hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <p className="text-xs tracking-widest text-primary font-semibold">{p.n}</p>
                <h3 className="h3 text-lg mt-3 text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{p.body}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                  Approfondisci →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- NUMERI DI RIFERIMENTO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Numeri di riferimento</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Numeri presi dai nostri progetti illustrativi.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {referenceNumbers.map(([n, l, src]) => (
              <div key={l} className="bg-paper p-4 sm:p-7 text-center">
                <p className="display text-xl sm:text-2xl md:text-4xl text-forest break-words">{n}</p>
                <p className="text-xs text-ink/60 mt-2 leading-snug">{l}</p>
                <p className="text-[11px] text-ink/40 mt-2 italic">{src}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs italic text-ink/45 max-w-xl">
            Cifre riprese dai case study concept in portfolio (progetti illustrativi, non un
            cliente reale) — mostrano il tipo di risultato che progettiamo per ottenere, non un
            aggregato di fatturato reale di MG Solutions.
          </p>
        </div>
      </section>

      {/* ---------- CASE STUDY PREVIEW ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow">Case study</p>
              <h2 className="h2 text-4xl md:text-5xl mt-4 text-ink">Esempi dai tre settori</h2>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-forest hover:text-brass">
              Tutto il portfolio →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link
                href={`/portfolio/${c.slug}`}
                className="group block border border-line rounded-2xl p-8 bg-paper hover:shadow-lg transition-shadow h-full"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="h3 text-2xl text-ink">{c.title}</h3>
                  {c.concept && (
                    <span className="text-[10px] tracking-widest border border-line rounded-full px-2 py-0.5 text-ink/50">
                      CONCEPT
                    </span>
                  )}
                </div>
                <p className="text-xs text-forest mt-2 font-semibold">{c.kind}</p>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed">{c.problem}</p>
                <p className="mt-3 text-sm text-ink/80 font-semibold">→ {c.results[0]}</p>
                <span className="mt-5 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                  Leggi il case study completo →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- TESTIMONIANZE ---------- */}
      <section className="bg-hospitality-bg">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-hospitality-accent">Testimonianze</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Cosa dicono i clienti dei nostri progetti.
            </h2>
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Domande frequenti</h2>
        </Reveal>
        <div className="mt-10">
          <FAQAccordion />
        </div>
      </section>

      {/* ---------- SELEZIONE: PER CHI È / NON È ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Per chi è</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">
              Lavoro solo con le persone giuste.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border border-paper/15 rounded-xl p-7 h-full">
                <p className="text-xs tracking-widest font-semibold text-primary">PER TE, SE</p>
                <ul className="mt-5 space-y-3">
                  {forWho.map((f) => (
                    <li key={f} className="flex gap-3 text-paper/85 leading-relaxed">
                      <span className="text-primary shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-paper/15 rounded-xl p-7 h-full">
                <p className="text-xs tracking-widest font-semibold text-paper/50">NON PER TE, SE</p>
                <ul className="mt-5 space-y-3">
                  {notForWho.map((f) => (
                    <li key={f} className="flex gap-3 text-paper/60 leading-relaxed">
                      <span className="text-paper/40 shrink-0">✗</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceArea pageType="homepage" />
    </>
  );
}
