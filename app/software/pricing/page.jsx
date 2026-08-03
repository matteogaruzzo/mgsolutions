import Reveal from '@/components/Reveal';
import PricingTiers from '@/components/pricing/PricingTiers';
import PricingComparison from '@/components/pricing/PricingComparison';
import BundleSection from '@/components/pricing/BundleSection';
import ExtrasSection from '@/components/pricing/ExtrasSection';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingCTA from '@/components/pricing/PricingCTA';
import { businessSuiteFaqs } from '@/lib/data';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';
import { BuildingIcon, CompassIcon, CheckCircleIcon } from '@/components/icons/ServiceIcons';

const PAGE = {
  title: 'MG Business Suite: piani e prezzi',
  description:
    'MG Essenziale costa €89/mese + €249 di setup, con 30 giorni di prova gratis. Crescita ed Ecosistema sono in roadmap: la struttura è già definita, il prezzo arriva quando saranno attivabili.',
  path: '/software/pricing',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['prezzi mg business suite', 'piani mg business suite', 'crm agroalimentare prezzo'],
});

const howItWorksColumns = [
  {
    icon: BuildingIcon,
    title: 'Una sola suite',
    body: 'Un unico software per più aree del business, non cinque piattaforme separate da integrare a mano. È il modo in cui la stiamo costruendo, modulo dopo modulo.',
  },
  {
    icon: CompassIcon,
    title: 'Attivi solo quello che esiste',
    body: 'La suite prevede 5 moduli: Lead & Sales (contatti), Booking (prenotazioni), Social AI (contenuti), Staff & Operations (team), Control Tower (dashboard). Oggi solo Lead & Sales è attivabile.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Prezzo chiaro, non nascosto',
    body: 'Il prezzo di Essenziale (€89/mese) è reale e pubblico, non "richiedi quotazione". Crescita ed Ecosistema mostrano lo stesso numero solo quando sarà un prezzo vero, non una stima.',
  },
];

export default function SoftwarePricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(businessSuiteFaqs)) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <Reveal>
          <p className="eyebrow">MG Business Suite</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-3xl leading-[1.05]">
            Piani e prezzi, senza sorprese.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
            Scegli il piano che ti serve. MG Essenziale è attivabile oggi con un prezzo reale.
            Crescita ed Ecosistema mostrano la struttura futura: il prezzo arriva quando saranno
            davvero attivabili.
          </p>
          <div className="mt-6 inline-flex items-start gap-3 max-w-2xl rounded-xl border border-primary/30 bg-primary/5 px-5 py-4">
            <span className="text-primary text-lg leading-none">●</span>
            <p className="text-sm text-ink/80 leading-relaxed">
              <span className="font-semibold text-primary">MG Essenziale include 30 giorni di prova gratis.</span>{' '}
              Nessuna carta di credito richiesta per iniziare la conversazione.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- COME FUNZIONA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow">Come funziona MG Business Suite</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {howItWorksColumns.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="bg-paper border border-line rounded-2xl p-7 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3 PACCHETTI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <PricingTiers />
      </section>

      {/* ---------- COSTO AL GIORNO (solo per il prezzo reale, Essenziale) ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-16 text-center">
          <Reveal>
            <p className="eyebrow">Se lo guardi al giorno</p>
            <p className="mt-4 text-2xl md:text-3xl text-ink max-w-xl mx-auto leading-snug">
              MG Essenziale costa <span className="font-bold text-primary">circa €2,97 al giorno</span> — meno di un caffè.
            </p>
            <p className="mt-3 text-sm text-ink/50 max-w-md mx-auto">
              (€89/mese ÷ 30 giorni. Crescita ed Ecosistema non hanno ancora un prezzo da calcolare.)
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- PER TE CHI SEI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Per te, chi sei?</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Trova il tuo punto di partenza.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="border border-line rounded-2xl p-6">
            <p className="font-semibold text-ink">Piccolo business, primo passo?</p>
            <p className="mt-2 text-sm text-ink/60">→ MG Essenziale, €89/mese</p>
            <p className="mt-1 text-sm text-ink/60">→ Prova gratis 30 giorni</p>
          </div>
          <div className="border border-line rounded-2xl p-6">
            <p className="font-semibold text-ink">Business in crescita, più processi?</p>
            <p className="mt-2 text-sm text-ink/60">→ MG Crescita, struttura pronta</p>
            <p className="mt-1 text-sm text-ink/60">→ Prezzo quando sarà attivabile</p>
          </div>
          <div className="border border-line rounded-2xl p-6">
            <p className="font-semibold text-ink">Azienda strutturata, più sedi?</p>
            <p className="mt-2 text-sm text-ink/60">→ MG Ecosistema, struttura pronta</p>
            <p className="mt-1 text-sm text-ink/60">→ Prezzo quando sarà attivabile</p>
          </div>
        </div>
      </section>

      {/* ---------- COMPARISON ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Confronto</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Tutte le differenze, in un colpo d’occhio.</h2>
          </Reveal>
          <div className="mt-10">
            <PricingComparison />
          </div>
        </div>
      </section>

      {/* ---------- BUNDLE SITO + SOFTWARE ---------- */}
      <section id="bundle" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
        <BundleSection />
      </section>

      {/* ---------- EXTRA & OPZIONI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <ExtrasSection />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <PricingFAQ />
      </section>

      <PricingCTA />
    </>
  );
}
