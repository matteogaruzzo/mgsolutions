import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import { site } from '@/lib/data';
import { GrapeIcon, GlassIcon } from '@/components/icons/WineIcons';
import {
  CoinIcon,
  RefreshIcon,
  HandshakeIcon,
  ChartIcon,
  CompassIcon,
  MegaphoneIcon,
  CalendarIcon,
  ScreenIcon,
  GearIcon,
} from '@/components/icons/ServiceIcons';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema, howToSchema } from '@/lib/seo';

const PAGE = {
  title: 'Wine Club per Cantine: Revenue Ricorrente e Fedeltà',
  description:
    'Lanciamo wine club per cantine ed enoteche: revenue ricorrente, community, clienti fedeli. Sito, software e consulenza. Scopri come funziona.',
  path: '/servizi/wine-club',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['wine club cantina', 'membership vino ricorrente', 'abbonamento vino cantina', 'fidelizzazione clienti cantina'],
  image: '/servizi/wine-club/opengraph-image',
});

const whyCards = [
  {
    Icon: CoinIcon,
    title: 'Revenue ricorrente',
    body: 'Non dipendete più solo da acquisti occasionali. Con 100 iscritti a €50/mese, sono €60.000/anno calcolabili in anticipo, non sperati.',
  },
  {
    Icon: RefreshIcon,
    title: 'Retention & loyalty',
    body: 'I wine club ben strutturati trattengono la maggior parte dei soci da un anno all’altro, molto più di un acquisto occasionale via e-commerce.',
  },
  {
    Icon: HandshakeIcon,
    title: 'Comunità & advocacy',
    body: 'I soci del wine club diventano ambassador: raccontano la cantina ai loro amici e portano nuovi clienti senza che voi spendiate in ads.',
  },
  {
    Icon: ChartIcon,
    title: 'Feedback & dati diretti',
    body: 'Sapete esattamente cosa piace ai vostri clienti — non lo scoprite di seconda mano dai distributori, ma da chi il vino lo beve davvero.',
  },
];

const steps = [
  {
    n: '01',
    Icon: CompassIcon,
    title: 'Definite il concept',
    items: [
      'Tier di membership (es. Starter, Premium, VIP)',
      'Frequenza di consegna (mensile, trimestrale, semestrale)',
      'Cosa include: numero bottiglie, sconto, accesso eventi, spedizione',
      'Tema di rotazione: stagionale, per zona, per vitigno',
    ],
  },
  {
    n: '02',
    Icon: MegaphoneIcon,
    title: 'Lanciate il programma',
    items: [
      'Pagina landing dedicata nel sito',
      'Email ai clienti attuali per il lancio',
      'Iscrizione in pochi click',
      'Primo invio curato, con storytelling forte',
    ],
  },
  {
    n: '03',
    Icon: RefreshIcon,
    title: 'Gestite il ciclo',
    items: [
      'Selezione dei vini per il periodo',
      'Note di degustazione: il vignaiolo, la storia, gli abbinamenti',
      'Spedizione e conferme automatiche',
      'Raccolta feedback dai soci per il periodo successivo',
    ],
  },
  {
    n: '04',
    Icon: CalendarIcon,
    title: 'Potenziate con eventi',
    items: [
      'Degustazioni virtuali periodiche',
      'Visita in cantina riservata ai soci VIP',
      'Cena con il vignaiolo o un sommelier',
      'Accesso anticipato alle nuove annate',
    ],
  },
];

const ecosystemCards = [
  {
    Icon: ScreenIcon,
    title: 'Sito dedicato',
    body: 'Pagina landing per il club, form di iscrizione integrato, descrizione dei tier, testimonianze dei soci, FAQ. Un design che fa percepire il club come esclusivo, non come un modulo in più sul sito.',
    price: 'A partire da €3.500',
  },
  {
    Icon: GearIcon,
    title: 'Automazione MG Business Suite',
    body: 'Iscrizioni e email di benvenuto automatiche, reminder di spedizione, richiesta feedback post-consegna, upsell verso il tier superiore, CRM per gli iscritti.',
    price: 'Canone €449-€649/mese',
  },
  {
    Icon: CompassIcon,
    title: 'Consulenza & strategia',
    body: 'Vi aiutiamo a definire struttura dei tier, prezzo, tema di rotazione, copy della pagina, timeline di lancio e strategie di retention e upsell.',
    price: 'Preventivo personalizzato',
  },
];

const wineClubFaqs = [
  {
    q: 'Quanto tempo serve per ottenere ROI dal wine club?',
    a: 'Se impostato bene, 3-4 mesi. Il primo mese serve a lanciare e acquisire i primi iscritti; dal secondo mese in poi, il revenue ricorrente inizia a coprire i costi di gestione.',
  },
  {
    q: 'Quanti iscritti servono perché abbia senso economico?',
    a: 'Un minimo di 50 iscritti rende il programma sostenibile. Consigliamo di puntare a 100-150 nel primo anno: a quel livello il club genera un revenue ricorrente mensile significativo.',
  },
  {
    q: 'Cos’è il churn e come si controlla?',
    a: 'È il tasso di abbandono dei soci, fisiologico in ogni wine club. Si contiene con storytelling forte dietro ogni selezione, eventi esclusivi, un percorso di upgrade tra tier e attenzione al feedback dei soci.',
  },
  {
    q: 'Posso gestire il wine club senza software?',
    a: 'Tecnicamente sì, ma con fogli Excel ed email manuali diventa presto ingestibile. Con CRM e automazione email rispondete alle iscrizioni in automatico e gestite centinaia di soci senza fatica aggiuntiva.',
  },
  {
    q: 'Come gestisco la logistica delle spedizioni?',
    a: 'Tre strade: gestirla internamente (massimo controllo sulla qualità), affidarla a un logista specializzato in vino (più scalabile), o in dropship dai produttori. Valutiamo insieme quale ha senso per i vostri volumi.',
  },
  {
    q: 'Quali tier di prezzo consigliate?',
    a: 'Dipende dal mercato, ma una struttura tipica è: Base (€40-50, alcune bottiglie, spedizione inclusa), Premium (€70-100, più bottiglie, sconto maggiore, evento periodico), VIP (€150+, selezione personalizzata, visita annuale in cantina, posti limitati).',
  },
  {
    q: 'Come trovo i primi iscritti?',
    a: 'Partite dai vostri clienti attuali: una campagna email dedicata converte tipicamente una parte significativa della lista. Aggiungete un incentivo per i primi iscritti e promuovete il lancio su Instagram, LinkedIn e nella newsletter.',
  },
];

export default function WineClubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(wineClubFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: 'Come lanciare un Wine Club per la tua cantina',
              description: PAGE.description,
              steps: steps.map((s) => ({ title: s.title, body: s.items.join('. ') })),
            })
          ),
        }}
      />

      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(26,26,26,0.45) 0%, rgba(26,26,26,0.8) 100%), url(/images/sectors/wine-hero.png)',
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-32 pb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-paper/15">
              <GlassIcon className="w-7 h-7" />
            </span>
            <p className="eyebrow text-brass mt-6">Wine Club</p>
            <h1 className="display text-4xl md:text-5xl mt-4 max-w-2xl mx-auto leading-tight">
              Fedeltà, comunità e nuove entrate ricorrenti.
            </h1>
            <p className="mt-5 text-lg text-paper/85 max-w-xl mx-auto leading-relaxed">
              Trasformate i vostri clienti migliori in ambassador della cantina, con un
              programma che genera revenue prevedibile mese dopo mese.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#come-funziona" className="btn-solid bg-paper text-forest hover:bg-paper/90">
                Scopri come funziona ↓
              </a>
              <Link href="/prenota-call" className="btn-ghost border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-forest">
                <GrapeIcon className="w-4 h-4" />
                Prenota una consulenza
              </Link>
            </div>
            <p className="mt-6 text-sm text-paper/60">
              Per cantine che vogliono vendite prevedibili e clienti davvero fidelizzati.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- COS'È UN WINE CLUB ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow">Le basi</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">
            Cos’è un wine club (e perché ogni cantina dovrebbe averne uno).
          </h2>
          <div className="mt-8 space-y-5 max-w-3xl">
            <p className="text-ink/70 leading-relaxed">
              Un wine club è un programma di fedeltà strutturato: i soci si iscrivono per
              ricevere periodicamente — mensilmente, trimestralmente, annualmente — una
              selezione curata di vini della vostra cantina. Non è un e-commerce con acquisti
              a caso: è una relazione che si costruisce nel tempo.
            </p>
            <p className="text-ink/70 leading-relaxed">
              <strong className="body-strong">Il cliente riceve</strong>: esclusività (vini non
              disponibili al pubblico), un prezzo migliore rispetto al retail, una comunità di
              appassionati, lo storytelling dietro ogni selezione e l’accesso a eventi privati.
            </p>
            <p className="text-ink/70 leading-relaxed">
              <strong className="body-strong">Voi guadagnate</strong>: revenue ricorrente e
              prevedibile, una relazione diretta che bypassa i grossisti, feedback immediato sui
              vini e ambassador che promuovono il vostro brand senza costarvi in pubblicità.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- PERCHÉ FUNZIONA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Perché funziona</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
              Quattro motivi per cui un wine club conviene.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {whyCards.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full flex gap-4">
                  <Icon className="w-6 h-6 text-forest shrink-0 mt-0.5" />
                  <div>
                    <h3 className="h3 text-base text-ink">{title}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- COME FUNZIONA ---------- */}
      <section id="come-funziona" className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Come funziona</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
            La struttura che consigliamo.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ n, Icon, title, items }, i) => (
            <Reveal key={n} delay={i * 70}>
              <div className="bg-paper border border-line rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-forest/10">
                    <Icon className="w-5 h-5 text-forest" />
                  </span>
                  <span className="font-mono text-xs text-ink/35">{n}</span>
                </div>
                <h3 className="h3 text-base mt-5 text-ink">{title}</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-ink/60 leading-relaxed">
                  {items.map((it) => (
                    <li key={it} className="flex gap-1.5">
                      <span className="text-forest">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CASE STUDY ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Esempio concreto</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
              Wine Club Pro, per Azienda Rossi.
            </h2>
            <p className="mt-2 text-xs italic text-ink/45 text-center">
              Case study illustrativo — esempio di progetto tipo per il settore, non un cliente reale.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal>
              <div>
                <p className="text-xs font-semibold text-forest uppercase tracking-wide">Il problema</p>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Gli abbonamenti venivano gestiti a mano tra fogli di calcolo e pagamenti
                  singoli, con perdita di soci per mancanza di follow-up e nessuna
                  personalizzazione delle spedizioni.
                </p>
                <p className="mt-5 text-xs font-semibold text-forest uppercase tracking-wide">La soluzione</p>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Onboarding guidato, pagamenti ricorrenti automatici, quiz AI per capire le
                  preferenze di gusto di ogni socio, tracking spedizione e automazione
                  anti-abbandono (churn prevention).
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="bg-paper border border-line rounded-2xl p-6">
                <p className="text-xs font-semibold text-forest uppercase tracking-wide">Risultati</p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="display text-2xl text-forest">85%</p>
                    <p className="text-[11px] text-ink/55 mt-1 leading-snug">retention M1→M12</p>
                  </div>
                  <div>
                    <p className="display text-2xl text-forest">3%</p>
                    <p className="text-[11px] text-ink/55 mt-1 leading-snug">churn mensile</p>
                  </div>
                  <div>
                    <p className="display text-2xl text-forest">€450</p>
                    <p className="text-[11px] text-ink/55 mt-1 leading-snug">LTV medio per socio</p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold text-forest uppercase tracking-wide">Cosa abbiamo imparato</p>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  La retention si gioca nei primi tre mesi, non dopo un anno: l’onboarding è il
                  momento più critico. Il churn si previene, non si recupera — intercettare i
                  segnali prima della disdetta costa meno che riconquistare un socio perso.
                </p>
                <Link href="/portfolio/azienda-rossi" className="mt-5 inline-block text-sm font-semibold text-forest hover:text-brass">
                  Leggi il caso studio completo →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- WINE CLUB + SITO + SOFTWARE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">L’ecosistema</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
            Come supportiamo il vostro wine club.
          </h2>
          <p className="mt-2 text-sm text-ink/55 text-center max-w-lg mx-auto">
            Non è solo una pagina sul sito. È un ecosistema completo.
          </p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {ecosystemCards.map(({ Icon, title, body, price }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="bg-paper border border-line rounded-2xl p-6 h-full flex flex-col">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-forest/10">
                  <Icon className="w-5 h-5 text-forest" />
                </span>
                <h3 className="h3 text-base mt-5 text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">{body}</p>
                <p className="mt-4 text-xs font-semibold text-forest">{price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Domande frequenti</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Dubbi? Risolti.</h2>
          </Reveal>
          <div className="mt-10 max-w-2xl mx-auto">
            <FAQAccordion items={wineClubFaqs} />
          </div>
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-brass">Prossimo passo</p>
          <h2 className="display text-3xl md:text-4xl mt-5 max-w-xl mx-auto leading-tight">
            Pronti a lanciare il vostro wine club?
          </h2>
          <p className="mt-4 text-paper/75 max-w-xl mx-auto">
            Aiutiamo cantine come la vostra a costruire un canale di revenue ricorrente.
            Non è magia: è struttura, software e storytelling.
          </p>
          <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper mt-9">
            <GrapeIcon className="w-4 h-4" />
            Prenota una consulenza Wine Club →
          </Link>
          <p className="mt-6 text-xs text-paper/60">
            Oppure leggete il caso studio completo:{' '}
            <Link href="/portfolio/azienda-rossi" className="underline hover:text-paper">
              Wine Club Pro, per Azienda Rossi
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
