import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import { businessSuiteModules, softwareOngoing, testimonials } from '@/lib/data';
import { ChatIcon, TargetIcon, CalendarIcon, ClockIcon, ChartIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'MG Business Suite: 5 moduli per il tuo agroalimentare',
  description:
    'Social AI, CRM, booking, operations e control tower in un unico ecosistema modulare. Attivi solo i moduli che ti servono, canone mensile trasparente.',
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

const softwareFaqs = [
  {
    q: 'Come si aggiorna? Devo scaricare qualcosa?',
    a: 'No. Il software vive online, come Gmail o WhatsApp — non come un programma da installare sul computer. Quando facciamo un aggiornamento lo ricevi automaticamente, senza fare nulla.',
  },
  {
    q: 'Che differenza c’è tra i cinque moduli?',
    a: 'Coprono reparti diversi dell’azienda: contenuti social (Social AI), contatti e vendite (Lead & Sales), prenotazioni ed esperienza cliente (Booking & Customer Experience), team e operatività (Staff & Operations), visione d’insieme (Control Tower). Puoi partire da uno e aggiungerne altri nel tempo.',
  },
  {
    q: 'Quanto costa?',
    a: 'Dipende da quanti moduli attivi: i 3 pacchetti (Essenziale, Crescita, Ecosistema) hanno canone e attivazione definiti, senza sorprese. Il dettaglio completo è su /software/pricing.',
  },
];

const relevantTestimonials = testimonials.filter((t) => ['Andrea', 'Giulia'].includes(t.name));

export default function Software() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-14">
        <p className="eyebrow">Prodotti · MG Business Suite</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.05]">
          Un ecosistema digitale per l’agroalimentare.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          5 moduli — social, vendite, prenotazioni, operatività, controllo direzionale — pensati per
          cantine, oleifici e agriturismi. Attivi solo quello che ti serve, con un canone chiaro fin
          dal primo giorno.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/software/pricing" className="btn-solid">
            <GrapeIcon className="w-4 h-4" />
            Scopri i pacchetti →
          </Link>
          <Link href="#moduli" className="btn-ghost">
            Scopri i 5 moduli
          </Link>
        </div>
      </section>

      {/* ---------- COME FUNZIONA DAVVERO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow">Come funziona davvero</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              La semplicità dietro la complessità.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-ink/75 leading-relaxed">
              <p>Immagina di assumere una persona nuova nel team per ogni reparto.</p>
              <p>
                Una che gestisce i social, una che segue i contatti commerciali, una che si occupa
                delle prenotazioni, una che coordina i turni, e una che tiene sott’occhio tutti i
                numeri dell’azienda. Dopo il setup iniziale, lavorano da sole. 24 ore su 24.
              </p>
              <p>Questa è, in pratica, MG Business Suite.</p>
              <p>
                Non è magia: sono moduli AI collegati ai tuoi strumenti (sito, calendario, social,
                CRM) e configurati sui tuoi processi reali.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- I 5 MODULI ---------- */}
      <section id="moduli" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
        <Reveal>
          <p className="eyebrow">I 5 moduli</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            Quale reparto vuoi automatizzare per primo?
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

      {/* ---------- SCEGLI IL TUO PERCORSO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <Reveal>
            <p className="eyebrow text-brass">Prezzi e pacchetti</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">Scegli il tuo percorso.</h2>
            <p className="mt-5 text-paper/70 max-w-xl mx-auto leading-relaxed">
              1 modulo, 3 moduli o l’intera suite: 3 pacchetti con canone e attivazione definiti, più
              Web Care per il sito e bundle sito+software.
            </p>
            <Link href="/software/pricing" className="btn-solid bg-brass text-ink hover:bg-paper mt-9">
              <GrapeIcon className="w-4 h-4" />
              Vedi pacchetti e prezzi →
            </Link>
          </Reveal>
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
        title="Pronto a parlarne?"
        sub="Consulenza gratuita: analizziamo il tuo processo e ti diciamo con onestà quale modulo (o pacchetto) ha senso attivare per primo."
      />
    </>
  );
}
