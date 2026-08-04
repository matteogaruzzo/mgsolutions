import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import SuiteDashboardGraphic from '@/components/graphics/SuiteDashboardGraphic';
import { businessSuiteModules } from '@/lib/data';
import { SOFTWARE_PLANS, SOFTWARE_PLAN_ORDER } from '@/lib/config/software-plans';
import {
  ChatIcon,
  TargetIcon,
  CalendarIcon,
  ClockIcon,
  ChartIcon,
  CompassIcon,
  BuildingIcon,
  CoinIcon,
  GearIcon,
  UsersIcon,
  CheckCircleIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'MG Business Suite: piattaforma software modulare per l’agroalimentare',
  description:
    'MG Business Suite riunisce vendite, prenotazioni, social, personale e dati aziendali in un’unica piattaforma online. Scegli il piano, attiva i moduli che ti servono.',
  path: '/software',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'business suite agroalimentare',
    'software modulare cantina',
    'crm agriturismo',
    'piattaforma gestionale agroalimentare',
  ],
});

const iconMap = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

const howItWorksSteps = [
  { icon: UsersIcon, title: 'Crei il tuo account' },
  { icon: BuildingIcon, title: 'Configuri la tua azienda' },
  { icon: CoinIcon, title: 'Scegli il piano' },
  { icon: GearIcon, title: 'Selezioni i moduli' },
  { icon: CompassIcon, title: 'Inviti il team' },
  { icon: CheckCircleIcon, title: 'Usi tutto da un’unica piattaforma' },
];

const platformAdvantages = [
  { title: 'Un solo accesso', body: 'Un’unica email e password per tutto quello che attivi.' },
  { title: 'Un solo archivio dati', body: 'I moduli attivi condividono gli stessi dati aziendali.' },
  { title: 'Meno strumenti scollegati', body: 'Niente copia-incolla manuale tra software diversi.' },
  { title: 'Ruoli differenti per il team', body: 'Ogni collaboratore vede solo quello che gli serve.' },
  { title: 'Aggiungi moduli quando servono', body: 'Parti da un modulo e amplia la piattaforma nel tempo, senza migrazioni.' },
];

const scenarios = [
  {
    label: 'Cantina',
    today: 'Contatti commerciali sparsi tra email, agende e WhatsApp; richieste di degustazione gestite a mano.',
    withSuite: 'Attivi MG Lead & Sales per centralizzare contatti e opportunità, poi aggiungi Booking per le degustazioni.',
    result: 'Un’unica pipeline per privati, ristoranti e distributori, con follow-up che aiutano a non perdere un’opportunità.',
    plan: 'essenziale',
  },
  {
    label: 'Frantoio',
    today: 'Vendite dirette e B2B gestite su fogli diversi, senza visibilità unica su clienti e ordini.',
    withSuite: 'Attivi Lead & Sales per la pipeline commerciale e Staff & Operations per coordinare il team nei periodi di raccolta.',
    result: 'Contatti, opportunità e turni del team nello stesso account, con dati condivisi tra i moduli.',
    plan: 'crescita',
  },
  {
    label: 'Agriturismo',
    today: 'Prenotazioni solo telefoniche, calendario confuso, social aggiornati a intermittenza.',
    withSuite: 'Attivi Booking & Experience per le prenotazioni online, Social AI per i contenuti e Lead & Sales per i contatti.',
    result: 'Prenotazioni sempre aperte, presenza social più costante, contatti centralizzati in un solo posto.',
    plan: 'ecosistema',
  },
];

const softwareFaqs = [
  {
    q: 'Cos’è MG Business Suite?',
    a: 'Una piattaforma online modulare: un unico account aziendale in cui attivi i moduli che ti servono in base al piano scelto. Non sono programmi separati da installare.',
  },
  {
    q: 'Cos’è un modulo?',
    a: 'Una sezione specializzata della piattaforma dedicata a un processo aziendale (vendite, prenotazioni, social, personale). Viene attivato nel tuo account e lavora insieme agli altri moduli e agli stessi dati.',
  },
  {
    q: 'Devo installare qualcosa?',
    a: 'No. La piattaforma è accessibile online da browser, senza installazioni. Gli aggiornamenti vengono distribuiti automaticamente da MG Solutions.',
  },
  {
    q: 'Posso iniziare con un solo modulo?',
    a: 'Sì. Hai accesso a tutti i moduli operativi fin dal piano Essenziale, ma puoi scegliere di attivarne uno solo — quello che risolve la priorità del momento — e aggiungere gli altri quando serve.',
  },
  {
    q: 'Posso aggiungere moduli dopo?',
    a: 'Sì, in qualsiasi momento e senza costi aggiuntivi per il cambio. Se invece ti serve più capacità — più utenti, sedi o integrazioni — puoi passare a un piano superiore quando vuoi: i tuoi dati restano nello stesso account, senza migrazioni.',
  },
  {
    q: 'Più persone possono lavorare nello stesso account?',
    a: 'Sì. Ogni piano include più utenti con ruoli e permessi differenti, fino al limite indicato nel piano scelto.',
  },
  {
    q: 'Come funziona l’abbonamento?',
    a: 'Un canone mensile per piano, più un setup una tantum per l’attivazione iniziale. Ogni piano include una prova gratuita.',
  },
  {
    q: 'Dove verranno gestiti pagamenti e fatture?',
    a: 'In un’area dedicata dell’account aziendale, collegata al piano attivo. I dettagli tecnici verranno comunicati in fase di attivazione.',
  },
  {
    q: 'Cosa succede se cambio piano?',
    a: 'Puoi fare upgrade o downgrade quando vuoi: la fatturazione si aggiusta di conseguenza e i tuoi dati restano.',
  },
];

export default function Software() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(softwareFaqs)) }}
      />

      {/* ---------- 1. HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">MG Business Suite</p>
              <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">
                Tutta la gestione della tua azienda, in un’unica piattaforma.
              </h1>
              <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
                MG Business Suite riunisce vendite, prenotazioni, attività, personale e dati aziendali
                in un solo ambiente. Scegli il piano, attiva i moduli che ti servono e amplia la
                piattaforma quando cresce la tua azienda.
              </p>
              <p className="mt-4 text-sm text-ink/60 max-w-xl leading-relaxed">
                Non sono programmi separati: tutti i moduli funzionano all’interno dello stesso
                account aziendale.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="#moduli" className="btn-solid">
                  <GrapeIcon className="w-4 h-4" />
                  Scopri i moduli
                </Link>
                <Link href="/software/pricing" className="btn-ghost">
                  Confronta i piani
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SuiteDashboardGraphic />
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. COME FUNZIONA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come funziona</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Sei passaggi, un unico account.</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorksSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="bg-paper border border-line rounded-2xl p-6 h-full flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-ink">
                    {i + 1}. {s.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. COSA SIGNIFICA "MODULO" ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa significa “modulo”</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            Non un programma separato, una sezione della stessa piattaforma.
          </h2>
          <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
            Un modulo è una sezione specializzata di MG Business Suite dedicata a un processo
            aziendale. Non è un programma separato: viene attivato nel tuo account e lavora insieme
            agli altri moduli e agli stessi dati aziendali.
          </p>
        </Reveal>
      </section>

      {/* ---------- 4. I MODULI ---------- */}
      <section id="moduli" className="bg-paper-dim scroll-mt-24">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">I moduli</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Attivi solo quello che ti serve.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {businessSuiteModules.map((m, i) => {
              const Icon = iconMap[m.icon] || TargetIcon;
              return (
                <Reveal key={m.slug} delay={i * 60}>
                  <Link
                    href={`/software/${m.slug}`}
                    className="group block h-full rounded-2xl p-6 border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="h3 text-lg mt-4 text-ink">{m.name}</h3>
                    <p className="mt-2.5 text-sm text-ink/65 leading-relaxed">{m.cardSummary}</p>
                    <span className="mt-4 inline-block text-xs font-semibold text-forest group-hover:text-brass transition-colors">
                      Scopri di più →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 5. VANTAGGI DELLA PIATTAFORMA UNICA ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Non 5 programmi separati</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            Perché un unico account batte 5 strumenti scollegati.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformAdvantages.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="border border-line rounded-2xl p-6 h-full">
                <p className="text-primary text-lg">✓</p>
                <p className="mt-3 font-semibold text-ink">{v.title}</p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 6. ESEMPI PER TIPO DI AZIENDA ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Esempi per tipo di azienda</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Da quale processo puoi iniziare.</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {scenarios.map((s, i) => {
              const plan = SOFTWARE_PLANS[s.plan];
              return (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="border border-paper/15 rounded-2xl p-7 h-full flex flex-col">
                    <p className="font-semibold text-lg">{s.label}</p>
                    <div className="mt-4 space-y-3 flex-1">
                      <p className="text-sm text-paper/70"><span className="font-semibold text-paper/90">Oggi: </span>{s.today}</p>
                      <p className="text-sm text-paper/70"><span className="font-semibold text-paper/90">Con MG Suite: </span>{s.withSuite}</p>
                      <p className="text-sm text-paper/70"><span className="font-semibold text-paper/90">Risultato possibile: </span>{s.result}</p>
                    </div>
                    <p className="mt-5 text-xs font-semibold tracking-widest text-brass uppercase">
                      Piano consigliato: {plan.name}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 7. SINTESI PIANI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Piani</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Tre piani, stessa piattaforma.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {SOFTWARE_PLAN_ORDER.map((id, i) => {
            const plan = SOFTWARE_PLANS[id];
            return (
              <Reveal key={id} delay={i * 60}>
                <div className="border border-line rounded-2xl p-7 h-full">
                  <p className="text-xs font-semibold tracking-widest text-forest uppercase">{plan.name}</p>
                  <p className="mt-2 text-sm text-ink/60">{plan.moduleLimitLabel}</p>
                  <p className="mt-4 text-3xl font-bold text-primary">€{plan.monthlyPrice}<span className="text-base text-ink/50">/mese</span></p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8">
          <Link href="/software/pricing" className="text-sm font-semibold text-forest hover:text-brass">
            Vedi il confronto completo dei piani →
          </Link>
        </div>
      </section>

      {/* ---------- 8. FAQ ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Domande comuni</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Risposte semplici.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion items={softwareFaqs} />
          </div>
        </div>
      </section>

      {/* ---------- 9. CTA FINALE ---------- */}
      <CTA
        title="Parti dal processo che oggi ti fa perdere più tempo."
        sub="Analizziamo come gestisci contatti, prenotazioni, attività e informazioni aziendali, e troviamo insieme il piano adatto."
        href="/software/pricing"
        ctaLabel="Trova il piano adatto"
      />

      <ServiceArea pageType="software" />
    </>
  );
}
