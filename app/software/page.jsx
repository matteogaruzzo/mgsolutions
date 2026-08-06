import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import {
  TargetIcon,
  CalendarIcon,
  CartIcon,
  RefreshIcon,
  UsersIcon,
  ChartIcon,
  CompassIcon,
  ScreenIcon,
  GearIcon,
  HandshakeIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon, OliveIcon, FarmhouseDoorIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema, faqPageSchema, serviceSchema } from '@/lib/seo';

const PAGE = {
  title: 'Software gestionali su misura per l’agroalimentare',
  description:
    'Progettiamo CRM e gestionali su misura per cantine, agriturismi e frantoi. Partiamo dalle vostre esigenze. Prima analisi senza impegno.',
  path: '/software',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'software su misura agroalimentare',
    'gestionale su misura cantina',
    'crm su misura agriturismo',
    'software gestionale frantoio',
  ],
});

const capabilities = [
  {
    Icon: TargetIcon,
    title: 'CRM e anagrafica clienti',
    body: 'Chi compra cosa, quando, quanto spende. Segmentazioni pensate sul vostro settore.',
  },
  {
    Icon: CalendarIcon,
    title: 'Prenotazioni e calendario',
    body: 'Degustazioni, camere, visite. Disponibilità, pagamenti, promemoria automatici.',
  },
  {
    Icon: CartIcon,
    title: 'Ordini e vendite',
    body: 'Ordini diretti, B2B, formati multipli, listini differenziati.',
  },
  {
    Icon: RefreshIcon,
    title: 'Automazioni email',
    body: 'Follow-up, rinnovi, riordini. Impostati una volta, funzionano da soli.',
  },
  {
    Icon: UsersIcon,
    title: 'Gestione team',
    body: 'Chi fa cosa, turni, checklist operative.',
  },
  {
    Icon: ChartIcon,
    title: 'Report e analisi',
    body: 'I numeri che vi servono per decidere, non dashboard piene di grafici che nessuno guarda.',
  },
];

const steps = [
  {
    n: '1',
    Icon: CompassIcon,
    title: 'Analisi',
    body: 'Veniamo da voi o facciamo una call lunga. Capiamo come lavorate oggi, dove perdete tempo, cosa vi manca.',
  },
  {
    n: '2',
    Icon: ScreenIcon,
    title: 'Progetto e preventivo',
    body: 'Vi presentiamo cosa costruiremmo, in che ordine, con quali tempi e quale cifra. Solo a quel punto decidete.',
  },
  {
    n: '3',
    Icon: GearIcon,
    title: 'Sviluppo a blocchi',
    body: 'Non spariamo per sei mesi. Consegniamo il primo pezzo funzionante presto e costruiamo sopra, con voi che provate mano a mano.',
  },
  {
    n: '4',
    Icon: HandshakeIcon,
    title: 'Avvio e assistenza',
    body: 'Formazione al vostro team, e restiamo per far evolvere lo strumento quando cambiano le esigenze.',
  },
];

const sectors = [
  { href: '/software/vitivinicolo', title: 'Software per cantine', Icon: GrapeIcon },
  { href: '/software/hospitality', title: 'Software per agriturismi', Icon: FarmhouseDoorIcon },
  { href: '/software/frantoi', title: 'Software per frantoi', Icon: OliveIcon },
];

const faqs = [
  {
    q: 'Abbiamo già un gestionale, dobbiamo buttarlo?',
    a: 'Quasi mai. Spesso si costruisce il pezzo che manca e lo si collega a quello che c’è già. Ve lo diciamo dopo averlo visto.',
  },
  {
    q: 'Quanto ci vuole?',
    a: 'Dai 2 ai 4 mesi a seconda della complessità. Il primo pezzo utilizzabile lo vedete molto prima della fine.',
  },
  {
    q: 'Il software è nostro o vostro?',
    a: 'Vostro. I dati sono vostri e ve li esportiamo quando volete.',
  },
  {
    q: 'E se poi vogliamo cambiare fornitore?',
    a: 'Ve lo consegniamo documentato. Non lavoriamo con vincoli.',
  },
  {
    q: 'Perché non un gestionale già pronto?',
    a: 'Se ne esiste uno che copre davvero le vostre esigenze, ve lo diciamo noi ed è la scelta giusta. Il su misura ha senso quando quello che c’è sul mercato vi obbliga a lavorare come non lavorate.',
  },
];

export default function Software() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Sviluppo software gestionale su misura',
              description: PAGE.description,
              path: PAGE.path,
              serviceType: 'Sviluppo software gestionale su misura',
              audienceType: 'Cantine, agriturismi e frantoi',
            })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-20">
        <Reveal>
          <p className="eyebrow">software su misura</p>
          <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05] max-w-3xl">
            Il gestionale che vi serve probabilmente non esiste ancora.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
            Progettiamo CRM e software su misura per cantine, agriturismi e frantoi. Partiamo da come
            lavorate voi, non da un pacchetto da adattare.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/prenota-call" className="btn-solid">
              <GrapeIcon className="w-4 h-4" />
              Raccontateci cosa vi serve
            </Link>
            <Link href="#settori" className="btn-ghost">
              Guarda i tre settori
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- PERCHÉ SU MISURA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Perché su misura</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              I gestionali generalisti sono fatti per tutti. Il che vuol dire che non sono fatti per
              nessuno.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-ink/70 leading-relaxed">
              <p>
                Una cantina che gestisce un wine club, le degustazioni e la vendita diretta ha bisogni
                che un CRM standard non copre. Un frantoio che vende in bottiglia ai privati e in
                latta da 5 litri ai ristoranti ha due mondi diversi da gestire. Un agriturismo che vive
                di prenotazioni dirette non può dipendere da un PMS pensato per gli hotel.
              </p>
              <p>Noi partiamo dal vostro modo di lavorare e costruiamo lo strumento attorno a quello.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- COSA COSTRUIAMO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa costruiamo</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Capacità, non moduli da comprare a pacchetto.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="border border-line rounded-2xl p-6 h-full bg-paper">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <c.Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="h3 text-lg mt-4 text-ink">{c.title}</h3>
                <p className="mt-2.5 text-sm text-ink/65 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- COME LAVORIAMO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Come lavoriamo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Quattro passaggi, nessuna sorpresa.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-6 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-full bg-paper/10 flex items-center justify-center">
                    <s.Icon className="w-5 h-5 text-brass" />
                  </div>
                  <p className="mt-4 font-semibold">
                    {s.n} · {s.title}
                  </p>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed flex-1">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- I TRE SETTORI ---------- */}
      <section id="settori" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
        <Reveal>
          <p className="eyebrow">I tre settori</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Dove abbiamo più esperienza diretta.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <Reveal key={s.href} delay={i * 80}>
              <Link
                href={s.href}
                className="group block h-full rounded-2xl p-7 border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="h3 text-lg mt-4 text-ink">{s.title}</h3>
                <span className="mt-4 inline-block text-xs font-semibold text-forest group-hover:text-brass transition-colors">
                  Scopri di più →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- INVESTIMENTO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Quanto costa</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Dipende da cosa serve.</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-ink/70 leading-relaxed">
              <p>
                E non lo sappiamo prima di averne parlato. Come ordine di grandezza: i progetti che
                seguiamo partono da <strong className="text-ink">8.000€</strong> e la maggior parte sta
                tra <strong className="text-ink">10.000 e 20.000€</strong>, con tempi di 2-4 mesi.
              </p>
              <p>
                A questo si aggiunge un canone di assistenza ed evoluzione a partire da{' '}
                <strong className="text-ink">150€/mese</strong>: hosting, aggiornamenti, supporto e le
                modifiche che servono nel tempo.
              </p>
              <p>Vi diciamo una cifra precisa dopo la prima analisi, non prima.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Risposte dirette.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <CTA
        title="Raccontateci come lavorate."
        sub="Prima call di analisi, senza impegno e senza costo."
        href="/prenota-call"
        ctaLabel="Prenota una call"
      />

      <ServiceArea pageType="software" />
    </>
  );
}
