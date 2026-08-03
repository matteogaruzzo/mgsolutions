import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import SuiteDashboardGraphic from '@/components/graphics/SuiteDashboardGraphic';
import {
  businessSuiteModules,
  businessSuitePersonas,
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
    a: 'In parte. MG Lead & Sales è in accesso anticipato e attivabile oggi. Gli altri 4 moduli sono in roadmap: non ancora attivabili, ma con una direzione di sviluppo già definita.',
  },
  {
    q: 'Che differenza c’è tra i cinque moduli?',
    a: 'Coprono reparti diversi dell’azienda: contenuti social (Social AI), contatti e vendite (Lead & Sales), prenotazioni ed esperienza cliente (Booking & Customer Experience), team e operatività (Staff & Operations), visione d’insieme (Control Tower).',
  },
  {
    q: 'Quanto costa?',
    a: 'Non c’è ancora un prezzo pubblico: lo definiamo insieme durante l’accesso anticipato, in base a moduli, utenti e integrazioni. La struttura dei piani futuri è su /software/pricing.',
  },
];

function packageName(id) {
  return businessSuitePackages.find((p) => p.id === id)?.name || id;
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
              <p className="eyebrow">Prodotti · MG Business Suite · Accesso anticipato</p>
              <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">
                Una piattaforma modulare, in costruzione con i primi clienti.
              </h1>
              <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
                MG Business Suite prevede 5 moduli — social, vendite, prenotazioni, team, controllo.
                Oggi solo MG Lead & Sales è attivabile, in accesso anticipato. Gli altri sono in
                roadmap: qui sotto trovi lo stato reale di ciascuno.
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

      {/* ---------- QUALE SOFTWARE SERVE A TE ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Direzione futura</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Verso quale combinazione stiamo costruendo la Suite?</h2>
            <p className="mt-4 text-paper/70 max-w-2xl leading-relaxed">
              Questi scenari descrivono a chi si rivolgerà ogni piano quando i moduli citati saranno
              pubblicati. Non sono combinazioni attivabili oggi.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {businessSuitePersonas.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-7 h-full flex flex-col">
                  <p className="font-semibold text-lg leading-snug">{p.label}</p>
                  <p className="mt-4 text-xs font-semibold tracking-widest text-brass uppercase">Userebbe</p>
                  <ul className="mt-2 space-y-1">
                    {p.modules.map((slug) => {
                      const mod = businessSuiteModules.find((m) => m.slug === slug);
                      return (
                        <li key={slug} className="text-sm text-paper/80">
                          {mod?.name}
                          {mod?.status !== 'early-access' && (
                            <span className="text-paper/40"> · in roadmap</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-4 text-xs text-paper/50">Piano previsto: {packageName(p.package)}</p>
                  <p className="mt-4 text-sm text-paper/70 leading-relaxed flex-1">{p.benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/software/pricing" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Vedi la struttura dei piani →
            </Link>
          </div>
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
