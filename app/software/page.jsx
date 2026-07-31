import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import SuiteDashboardGraphic from '@/components/graphics/SuiteDashboardGraphic';
import {
  businessSuiteModules,
  businessSuitePersonas,
  businessSuitePackages,
  softwareOngoing,
  testimonials,
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
  title: 'MG Business Suite: 5 software per il tuo agroalimentare',
  description:
    'Una piattaforma, 5 software scelti da te: Social AI, CRM, booking, operations e control tower. Attivi solo quelli che ti servono, canone mensile trasparente.',
  path: '/software',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'business suite agroalimentare',
    'software modulare cantina',
    'crm agriturismo',
    'automazione social ai',
    'dashboard direzionale agribusiness',
  ],
});

const iconMap = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

const howItWorksSteps = [
  {
    icon: CompassIcon,
    title: 'Scegli',
    duration: '1 clic',
    body: 'Decidi quale area del tuo business automatizzare: social, vendite, prenotazioni, team o controllo direzionale.',
  },
  {
    icon: GearIcon,
    title: 'Attiviamo',
    duration: '24-48 ore',
    body: 'Il nostro team configura tutto secondo il tuo processo. Collegamenti, automazioni, utenti: zero complicazioni per te.',
  },
  {
    icon: ChartIcon,
    title: 'Tu lavori',
    duration: '24/7',
    body: 'Il software lavora mentre tu segui il tuo business. Clienti gestiti in automatico, report ogni settimana via email.',
  },
];

const softwareFaqs = [
  {
    q: 'Come si aggiorna? Devo scaricare qualcosa?',
    a: 'No. Il software vive online, come Gmail o WhatsApp — non come un programma da installare sul computer. Quando facciamo un aggiornamento lo ricevi automaticamente, senza fare nulla.',
  },
  {
    q: 'Che differenza c’è tra i cinque software?',
    a: 'Coprono reparti diversi dell’azienda: contenuti social (Social AI), contatti e vendite (Lead & Sales), prenotazioni ed esperienza cliente (Booking & Customer Experience), team e operatività (Staff & Operations), visione d’insieme (Control Tower). Puoi partire da uno e aggiungerne altri nel tempo.',
  },
  {
    q: 'Quanto costa?',
    a: 'Dipende da quanti software attivi: i 3 pacchetti (Essenziale, Crescita, Ecosistema) hanno canone e attivazione definiti, senza sorprese. Il dettaglio completo è su /software/pricing.',
  },
];

const relevantTestimonials = testimonials.filter((t) => ['Andrea', 'Giulia'].includes(t.name));

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
              <p className="eyebrow">Prodotti · MG Business Suite</p>
              <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">
                Una piattaforma, 5 software scelti da te.
              </h1>
              <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
                MG Business Suite parte vuota: tu scegli quali software attivare dentro — social,
                vendite, prenotazioni, team, controllo — e paghi solo per quello che usi, fin dal
                primo giorno.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/software/pricing" className="btn-solid">
                  <GrapeIcon className="w-4 h-4" />
                  Scopri i pacchetti →
                </Link>
                <Link href="#software" className="btn-ghost">
                  Scegli i 5 software
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
          <p className="eyebrow">I 5 software disponibili</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            Scegli quali software ti servono.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessSuiteModules.map((m, i) => {
            const Icon = iconMap[m.icon] || TargetIcon;
            return (
              <Reveal key={m.slug} delay={i * 60}>
                <Link
                  href={`/software/${m.slug}`}
                  className="group block h-full rounded-2xl p-7 border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-forest" />
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
          * Il checkout automatico via Stripe è in arrivo: per attivare un pacchetto oggi, prenota
          una call.
        </p>
      </section>

      {/* ---------- QUALE SOFTWARE SERVE A TE ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Trova il tuo percorso</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Quale software serve a te?</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {businessSuitePersonas.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-7 h-full flex flex-col">
                  <p className="font-semibold text-lg leading-snug">{p.label}</p>
                  <p className="mt-4 text-xs font-semibold tracking-widest text-brass uppercase">Ti servono</p>
                  <ul className="mt-2 space-y-1">
                    {p.modules.map((slug) => {
                      const mod = businessSuiteModules.find((m) => m.slug === slug);
                      return (
                        <li key={slug} className="text-sm text-paper/80">
                          {mod?.name}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-4 text-xs text-paper/50">Pacchetto: {packageName(p.package)}</p>
                  <p className="mt-4 text-sm text-paper/70 leading-relaxed flex-1">{p.benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/software/pricing" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Scopri i pacchetti →
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

      {/* ---------- SOCIAL PROOF ---------- */}
      {relevantTestimonials.length > 0 && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Chi lo sta usando</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Esempi illustrativi dai case study.
            </h2>
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel items={relevantTestimonials} />
          </div>
        </section>
      )}

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
        title="Pronto a lavorare meno e crescere di più?"
        sub="Scegli il tuo pacchetto oppure prenota una call con il nostro team per capire esattamente come funziona per il tuo business."
      />

      <ServiceArea pageType="software" />
    </>
  );
}
