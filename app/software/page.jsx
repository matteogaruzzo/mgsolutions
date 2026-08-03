import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import SuiteDashboardGraphic from '@/components/graphics/SuiteDashboardGraphic';
import PricingComparison from '@/components/pricing/PricingComparison';
import {
  businessSuiteModules,
  businessSuitePackages,
  softwareOngoing,
} from '@/lib/data';
import {
  ChatIcon,
  TargetIcon,
  CalendarIcon,
  ClockIcon,
  ChartIcon,
  CompassIcon,
  GearIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'MG Business Suite: software modulare per l’agroalimentare (accesso anticipato)',
  description:
    'MG Business Suite è la piattaforma modulare in costruzione di MG Solutions per cantine, frantoi e agriturismi. Lead & Sales è in accesso anticipato; gli altri moduli sono in roadmap.',
  path: '/software',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'business suite agroalimentare',
    'software modulare cantina',
    'crm agriturismo accesso anticipato',
    'roadmap software agribusiness',
  ],
});

const iconMap = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

const howItWorksSteps = [
  {
    icon: CompassIcon,
    title: 'Ci scrivi',
    duration: '5 minuti',
    body: 'Ci racconti quale area del business vuoi automatizzare: contatti, prenotazioni, social, team o controllo direzionale.',
  },
  {
    icon: GearIcon,
    title: 'Valutiamo insieme',
    duration: '1 call',
    body: 'Se il tuo caso è adatto a un modulo già in accesso anticipato, definiamo condizioni e tempi. Se il modulo che ti serve è ancora in roadmap, ti aggiorniamo quando sarà pronto.',
  },
  {
    icon: ChartIcon,
    title: 'Costruiamo insieme',
    duration: 'in corso',
    body: 'Chi entra in accesso anticipato aiuta a definire le funzionalità reali dei moduli successivi, non solo a usarle.',
  },
];

const softwareFaqs = [
  {
    q: 'MG Business Suite è già disponibile?',
    a: 'In parte. MG Lead & Sales è in accesso anticipato e attivabile oggi, con prezzo reale (€89/mese + €249 di setup). Gli altri 4 moduli sono in roadmap: non ancora attivabili.',
  },
  {
    q: 'Che differenza c’è tra i cinque moduli?',
    a: 'Coprono reparti diversi dell’azienda: contenuti social (Social AI), contatti e vendite (Lead & Sales), prenotazioni ed esperienza cliente (Booking & Customer Experience), team e operatività (Staff & Operations), visione d’insieme (Control Tower).',
  },
  {
    q: 'Come scelgo il piano giusto?',
    a: 'Se ti serve solo gestire contatti e vendite, Essenziale (€89/mese) è già attivabile oggi. Se pensi di aver bisogno di più moduli insieme, scrivici: ti aggiorniamo su Crescita ed Ecosistema quando saranno pronti per il tuo caso.',
  },
];

const scenarios = [
  {
    emoji: '🍷',
    label: 'Piccola cantina o agriturismo (1-5 persone)',
    signals: ['Vuoi iniziare a gestire i contatti in un posto solo', 'Team piccolo, una sola sede', 'Niente complicazioni'],
    planId: 'essenziale',
    body: 'Con questo risolvi il tuo primo problema — i contatti commerciali — con MG Lead & Sales, già attivo oggi. Quando cresci, aggiungi altri moduli.',
  },
  {
    emoji: '🌾',
    label: 'Cantina media o frantoio (6-20 persone)',
    signals: ['Vendi online e tramite distributori', 'Hai un team da coordinare', 'Vuoi automatizzare più processi insieme'],
    planId: 'crescita',
    body: 'Il profilo a cui pensiamo per MG Crescita: più moduli che lavorano insieme. Oggi puoi già iniziare con Essenziale (Lead & Sales) e passare a Crescita quando gli altri moduli che ti servono saranno pronti.',
  },
  {
    emoji: '🏢',
    label: 'Azienda strutturata o rete di più sedi (20+ persone)',
    signals: ['Più sedi o filiali', 'Vuoi una visione strategica di tutto', 'Vuoi che ogni cosa si integri'],
    planId: 'ecosistema',
    body: 'Il profilo a cui pensiamo per MG Ecosistema, con Control Tower incluso. Attivabile quando la maggior parte dei moduli sarà pubblicata: scrivici per essere aggiornato.',
  },
];

function findPlan(id) {
  return businessSuitePackages.find((p) => p.id === id);
}

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

      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">MG Business Suite · Come funziona</p>
              <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">
                Una sola piattaforma. 5 moduli. Oggi ne è già attivo uno.
              </h1>
              <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
                MG Business Suite è pensata per essere semplice: scegli i moduli che ti servono —
                social, vendite, prenotazioni, team, controllo — e li attivi dentro un unico account.
                Oggi MG Lead & Sales è già attivabile; gli altri 4 sono in roadmap.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contatti?interesse=software" className="btn-solid">
                  <GrapeIcon className="w-4 h-4" />
                  Richiedi accesso anticipato →
                </Link>
                <Link href="#software" className="btn-ghost">
                  Guarda lo stato dei moduli
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SuiteDashboardGraphic />
          </Reveal>
        </div>
      </section>

      {/* ---------- COME FUNZIONA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come funziona</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Non è complicato come sembra.
            </h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
              Ecco come MG Business Suite semplifica il tuo lavoro.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {howItWorksSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="bg-paper border border-line rounded-2xl p-7 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="mt-5 text-xs font-semibold tracking-widest text-forest uppercase">
                    {i + 1}. {s.title} · {s.duration}
                  </p>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- I 5 SOFTWARE ---------- */}
      <section id="software" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
        <Reveal>
          <p className="eyebrow">I 5 moduli previsti</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            Lo stato reale di ciascun modulo, senza ambiguità.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessSuiteModules.map((m, i) => {
            const Icon = iconMap[m.icon] || TargetIcon;
            const isAvailable = m.status === 'early-access';
            return (
              <Reveal key={m.slug} delay={i * 60}>
                <Link
                  href={`/software/${m.slug}`}
                  className="group block h-full rounded-2xl p-7 border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Icon className="w-8 h-8 text-forest" />
                    <span
                      className={`shrink-0 text-[11px] font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 ${
                        isAvailable ? 'bg-primary/10 text-primary' : 'bg-line/60 text-ink/60'
                      }`}
                    >
                      {m.statusLabel}
                    </span>
                  </div>
                  <h3 className="h3 text-xl mt-4 text-ink">{m.name}</h3>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed">{m.tagline}</p>
                  <ul className="mt-4 space-y-1.5">
                    {m.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex gap-2 text-xs text-ink/60">
                        <span className="text-primary shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink/50">
                    <span className="font-semibold text-ink/70">Per chi: </span>
                    {m.targetAudience}
                  </p>
                  <span className="mt-5 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                    Scopri →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-ink/50 max-w-2xl">
          I moduli in roadmap non sono ancora attivabili e non hanno una data di uscita confermata.
          Scrivici per essere aggiornato quando cambia lo stato di un modulo.
        </p>
      </section>

      {/* ---------- COME SCEGLIERE IL PIANO GIUSTO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Come scegliere il piano giusto</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Trova la tua situazione qui sotto.</h2>
            <p className="mt-4 text-paper/70 max-w-2xl leading-relaxed">
              Solo lo scenario Essenziale è attivabile con un prezzo reale oggi. Gli altri due
              descrivono a chi si rivolgerà ogni piano quando i moduli citati saranno pronti.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {scenarios.map((s, i) => {
              const plan = findPlan(s.planId);
              const isReal = Boolean(plan.price);
              return (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="border border-paper/15 rounded-2xl p-7 h-full flex flex-col">
                    <p className="text-2xl">{s.emoji}</p>
                    <p className="mt-3 font-semibold text-lg leading-snug">{s.label}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.signals.map((sig) => (
                        <li key={sig} className="text-sm text-paper/70">
                          • {sig}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs font-semibold tracking-widest text-brass uppercase">
                      Piano indicato: {plan.name}
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      {isReal ? `${plan.priceLabel}/mese` : plan.priceLabel}
                    </p>
                    <p className="mt-4 text-sm text-paper/70 leading-relaxed flex-1">{s.body}</p>
                    <Link
                      href={plan.ctaHref}
                      className="mt-5 inline-block text-sm font-semibold text-brass hover:text-paper"
                    >
                      {isReal ? `Scegli ${plan.name} →` : `${plan.cta} →`}
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/software/pricing" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Vedi tutti i dettagli dei piani →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CONFRONTO PIANI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Confronto rapido</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Cosa include ogni piano.</h2>
        </Reveal>
        <div className="mt-10">
          <PricingComparison />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
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

      {/* ---------- GESTIONE CONTINUATIVA (trasparenza) ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Siamo trasparenti</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">{softwareOngoing.title}</h2>
            <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">{softwareOngoing.intro}</p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {softwareOngoing.items.map((item) => (
              <div key={item} className="bg-paper p-6">
                <p className="text-sm text-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Vuoi essere tra i primi a provarlo?"
        sub="Richiedi accesso anticipato a MG Lead & Sales, oppure prenota una call per raccontarci quale modulo in roadmap ti servirebbe di più."
      />

      <ServiceArea pageType="software" />
    </>
  );
}
