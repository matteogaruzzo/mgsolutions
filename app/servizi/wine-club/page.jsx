import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import PricingBlock from '@/components/PricingBlock';
import { site } from '@/lib/data';
import { pricing } from '@/lib/pricing-data';
import { GrapeIcon, GlassIcon } from '@/components/icons/WineIcons';
import {
  CoinIcon,
  RefreshIcon,
  HandshakeIcon,
  ChartIcon,
  CompassIcon,
  CalendarIcon,
  ScreenIcon,
  GearIcon,
} from '@/components/icons/ServiceIcons';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema, howToSchema, serviceSchema } from '@/lib/seo';

const PAGE = {
  title: 'Wine Club per Cantine: Revenue Ricorrente',
  description:
    'Aiutiamo le cantine a costruire wine club esclusivi: sito dedicato, CRM e automazioni su misura, consulenza sul lancio. Revenue ricorrente, non occasionale.',
  path: '/servizi/wine-club',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['wine club cantina', 'membership vino ricorrente', 'abbonamento vino cantina', 'fidelizzazione clienti cantina'],
  image: '/servizi/wine-club/opengraph-image',
});

// Usato solo per lo schema HowTo: le fasi del ciclo di vita di un wine club,
// non il nostro processo di consegna (quello è in howWeWork più sotto).
const launchCycle = [
  { title: 'Definite il concept', items: ['Tier di membership (es. Starter, Premium, VIP)', 'Frequenza di consegna', 'Cosa include ogni spedizione', 'Tema di rotazione'] },
  { title: 'Lanciate il programma', items: ['Pagina landing dedicata', 'Email ai clienti attuali', 'Iscrizione in pochi click', 'Primo invio curato'] },
  { title: 'Gestite il ciclo', items: ['Selezione dei vini per il periodo', 'Note di degustazione', 'Spedizione e conferme automatiche', 'Raccolta feedback dai soci'] },
  { title: 'Potenziate con eventi', items: ['Degustazioni virtuali periodiche', 'Visita in cantina per i soci VIP', 'Cena con il vignaiolo', 'Accesso anticipato alle nuove annate'] },
];

const includes = [
  { Icon: ScreenIcon, title: 'Sito dedicato', body: 'Pagina landing per il club, iscrizione integrata, tier, FAQ. Percepito come esclusivo, non come un modulo in più.' },
  { Icon: GearIcon, title: 'CRM e automazioni su misura', body: 'Iscrizioni e benvenuto automatici, reminder di spedizione, richiesta feedback, upsell verso il tier superiore.' },
  { Icon: RefreshIcon, title: 'Gestione del ciclo', body: 'Selezione vini, note di degustazione, spedizioni e conferme, raccolta feedback dai soci.' },
  { Icon: CalendarIcon, title: 'Eventi e retention', body: 'Degustazioni virtuali, visite VIP in cantina, accesso anticipato alle nuove annate.' },
  { Icon: CompassIcon, title: 'Consulenza su tier e lancio', body: 'Struttura dei tier, prezzo, tema di rotazione, timeline di lancio.' },
];

const differentiators = [
  { Icon: CompassIcon, title: 'Su misura, non un tool generico', body: 'Il club è costruito sul vostro brand e sui vostri vini, non su un plugin standardizzato uguale per tutti.' },
  { Icon: HandshakeIcon, title: 'Un solo team per sito, software e strategia', body: 'Non dovete far parlare tra loro tre fornitori diversi.' },
  { Icon: ChartIcon, title: 'Consulenza sul lancio, non solo il tool', body: 'Vi aiutiamo a decidere tier, prezzo e timeline prima di scrivere una riga di codice.' },
  { Icon: CoinIcon, title: 'Revenue ricorrente, non occasionale', body: 'Con 100 iscritti a 50€/mese sono 60.000€/anno calcolabili in anticipo, non sperati — a patto di costruirlo bene.' },
];

const wineClubFaqs = [
  {
    q: 'Quanto tempo serve per ottenere ROI dal wine club?',
    a: 'Se impostato bene, 3-4 mesi. Il primo mese serve a lanciare e acquisire i primi iscritti; dal secondo mese in poi, il revenue ricorrente inizia a coprire i costi di gestione.',
  },
  {
    q: 'Quanti iscritti servono perché abbia senso economico?',
    a: 'Un minimo di 50 iscritti rende il programma sostenibile. Consigliamo di puntare a 100-150 nel primo anno.',
  },
  {
    q: 'Posso gestire il wine club senza software?',
    a: 'Tecnicamente sì, ma con fogli Excel ed email manuali diventa presto ingestibile. Con CRM e automazione email rispondete alle iscrizioni in automatico.',
  },
  {
    q: 'Siete in tre. Riuscite a seguirci?',
    a: 'Proprio perché siamo in tre prendiamo pochi progetti alla volta. Chi vi risponde è chi lavora sul vostro club, non un account che gira la mail a qualcun altro.',
  },
  {
    q: 'Lavorate solo in Umbria?',
    a: 'Siamo a Perugia ma lavoriamo in tutta Italia. Per chi è entro due o tre ore veniamo di persona all’inizio e al lancio.',
  },
];

const howWeWork = [
  { n: '1', title: 'Analisi', duration: '1 settimana', body: 'Guardiamo i vostri clienti attuali, i vini disponibili, cosa avete già provato.' },
  { n: '2', title: 'Progetto', duration: '1-2 settimane', body: 'Tier, prezzo, tema di rotazione. Vedete il mockup della pagina prima dello sviluppo.' },
  { n: '3', title: 'Costruzione', duration: '2-4 settimane', body: 'Sito, CRM e automazioni. Avanzamento visibile ogni settimana.' },
  { n: '4', title: 'Lancio e dopo', duration: '3 mesi', body: 'Primo invio curato, e restiamo per sistemare ciò che i dati sui soci dicono.' },
];

export default function WineClubPage() {
  const waNumber = site.phone.replace(/[^\d]/g, '');
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent('Ciao, vorrei parlare del Wine Club.')}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({ name: PAGE.title, description: PAGE.description, path: PAGE.path })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Servizi', path: '/servizi' },
              { name: 'Wine Club', path: PAGE.path },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(wineClubFaqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: 'Come lanciare un Wine Club per la tua cantina',
              description: PAGE.description,
              steps: launchCycle.map((s) => ({ title: s.title, body: s.items.join('. ') })),
            })
          ),
        }}
      />

      {/* ---------- 1. HERO ---------- */}
      <section
        className="relative bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.82) 100%), url(/images/servizi/wine-club-hero.jpg)',
          backgroundPosition: 'center 25%',
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-32 pb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wine-accent/25 border border-wine-gold/40">
              <GlassIcon className="w-7 h-7 text-wine-gold" />
            </span>
            <p className="eyebrow text-wine-gold mt-6">wine club · cantine</p>
            <h1 className="display text-3xl sm:text-4xl md:text-5xl mt-4 max-w-2xl mx-auto leading-[1.2] break-words">
              L’unico modo per far tornare chi ha già comprato.
            </h1>
            <p className="mt-5 text-lg text-paper/85 max-w-xl mx-auto leading-relaxed">
              Trasformiamo i vostri clienti migliori in soci di un programma che genera revenue
              ricorrente, mese dopo mese.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/prenota-call" className="btn-solid bg-paper text-forest hover:bg-paper/90">
                <GrapeIcon className="w-4 h-4" />
                Parliamone in 15 minuti
              </Link>
              <a href="#come-lavoriamo" className="btn-ghost border-wine-gold/50 text-paper hover:border-wine-gold hover:bg-wine-gold hover:text-ink">
                Guarda come lavoriamo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. IL PROBLEMA RICONOSCIBILE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line">
              <Image src="/images/servizi/wine-club-cellar.jpg" alt="Botti di rovere in una cantina, luce calda" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="eyebrow">Ci risulta che vada più o meno così</p>
              <div className="mt-5 space-y-4">
                <p className="text-ink/75 leading-relaxed">Il cliente più costoso è quello che avete già.</p>
                <p className="text-ink/75 leading-relaxed">
                  Trovare qualcuno di nuovo costa. Farlo tornare no — ma solo se avete un motivo per
                  riscrivergli e lui ha un motivo per esserci.
                </p>
                <p className="text-ink/75 leading-relaxed">
                  Un club fa esattamente questo: trasforma una bottiglia comprata una volta in un
                  rapporto che dura. E cambia il modo in cui pianificate, perché sapete in anticipo
                  quante bottiglie escono ogni mese.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 3. COSA CAMBIA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="h2 text-2xl md:text-3xl text-ink">Cosa cambia con un wine club strutturato</h2>
                <div className="mt-5 space-y-4">
                  <p className="text-ink/75 leading-relaxed">
                    Il cliente riceve esclusività, un prezzo migliore del retail, lo storytelling
                    dietro ogni selezione e l’accesso a eventi privati.
                  </p>
                  <p className="text-ink/75 leading-relaxed">
                    Voi guadagnate revenue ricorrente e prevedibile, una relazione diretta che
                    bypassa i grossisti, e ambassador che promuovono il vostro brand senza
                    costarvi in pubblicità.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="grid grid-cols-2 gap-4">
                {differentiators.map(({ Icon, title, body }) => (
                  <div key={title} className="bg-paper border border-line rounded-xl p-4">
                    <Icon className="w-5 h-5 text-wine-accent" />
                    <p className="mt-2 text-xs font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-[11px] text-ink/55 leading-snug">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 4. COSA INCLUDE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa include</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">Non solo una pagina sul sito.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {includes.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="border border-line rounded-xl p-5 h-full bg-paper">
                <Icon className="w-6 h-6 text-forest" />
                <p className="mt-3 font-semibold text-ink">{title}</p>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 5. COME LAVORIAMO ---------- */}
      <section id="come-lavoriamo" className="bg-ink text-paper scroll-mt-24">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Come lavoriamo</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl">Cosa succede dopo che firmate.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-6 h-full flex flex-col">
                  <p className="font-semibold">{s.n} · {s.title}</p>
                  <p className="mt-1 text-xs text-brass">{s.duration}</p>
                  <p className="mt-3 text-sm text-paper/70 leading-relaxed flex-1">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-paper/60">In media: 4-7 settimane dal via al lancio.</p>
        </div>
      </section>

      {/* ---------- 6. PERCHÉ NOI E NON ALTRI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Perché noi e non altri</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">Un confronto onesto.</h2>
        </Reveal>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-3 pr-4 text-ink/50 font-medium"></th>
                <th className="text-left py-3 px-4 text-ink/60 font-medium">Piattaforma di membership generica</th>
                <th className="text-left py-3 px-4 text-ink/60 font-medium">Nessun club (vendita spot)</th>
                <th className="text-left py-3 pl-4 text-forest font-semibold">MG Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 text-ink/70">Conosce il settore</td>
                <td className="py-3 px-4 text-ink/55">No</td>
                <td className="py-3 px-4 text-ink/55">—</td>
                <td className="py-3 pl-4 text-ink font-medium">Solo questo</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 text-ink/70">Costruito sul vostro brand</td>
                <td className="py-3 px-4 text-ink/55">No, template uguale per tutti</td>
                <td className="py-3 px-4 text-ink/55">—</td>
                <td className="py-3 pl-4 text-ink font-medium">Sì</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 text-ink/70">Revenue ricorrente</td>
                <td className="py-3 px-4 text-ink/55">Sì</td>
                <td className="py-3 px-4 text-ink/55">No</td>
                <td className="py-3 pl-4 text-ink font-medium">Sì</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 text-ink/70">Consulenza su tier e lancio</td>
                <td className="py-3 px-4 text-ink/55">No</td>
                <td className="py-3 px-4 text-ink/55">—</td>
                <td className="py-3 pl-4 text-ink font-medium">Sì</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 text-ink/70">Chi vi risponde</td>
                <td className="py-3 px-4 text-ink/55">Un account</td>
                <td className="py-3 px-4 text-ink/55">Nessuno</td>
                <td className="py-3 pl-4 text-ink font-medium">Chi lavora sul progetto</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-ink/60 max-w-xl">
          La differenza non è tecnica. È che quando dite "wine club", "annata" o "DOP" non
          dobbiamo chiedere cosa significa.
        </p>
      </section>

      {/* ---------- 7. INVESTIMENTO ---------- */}
      <PricingBlock
        accent="wine"
        heading="Quanto costa lanciare un wine club"
        subheading="L’unico modo per far tornare chi ha già comprato, prezzato in chiaro."
        plans={[
          {
            ...pricing.wineClub,
            offerName: 'Impianto completo del wine club',
            installmentVariant: 'harvest',
            offerDescription: 'Sito dedicato, CRM e automazioni su misura, consulenza su tier e lancio.',
            benefits: [
              'Struttura del club e pagina dedicata',
              'Iscrizione e pagamento ricorrente',
              'Sequenza email di benvenuto e rinnovo',
              'Gestione rotazione e spedizioni',
              'Report sui soci',
            ],
            exclusions: ['Logistica fisica', 'Packaging', 'Contenuti fotografici'],
            reassurances: ['Prezzi pubblicati: quello che leggete è quello che pagate', 'Tutto resta vostro'],
            closing: 'Cifra precisa dopo una call di 20 minuti. Se non ha senso farlo, ve lo diciamo.',
          },
        ]}
      />

      {/* ---------- 8. FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">FAQ.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <FAQAccordion items={wineClubFaqs} />
        </div>
      </section>

      {/* ---------- 9. CTA FINALE ---------- */}
      <section className="bg-wine-accent text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-wine-gold">Prossimo passo</p>
          <h2 className="display text-4xl md:text-5xl mt-5 max-w-2xl mx-auto leading-tight">Parliamone.</h2>
          <p className="mt-5 text-paper/75 max-w-xl mx-auto">
            Prima call di 15 minuti, senza impegno. Vi diciamo cosa faremmo e quanto costerebbe.
            Se non ha senso ve lo diciamo.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Prenota una call
            </Link>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-ghost border-paper/40 text-paper hover:bg-paper/10">
              Scrivici su WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-paper/60">Oppure passiamo da voi: siamo a Perugia e ci spostiamo volentieri.</p>
        </div>
      </section>

      <ServiceArea pageType="servizi" />
    </>
  );
}
