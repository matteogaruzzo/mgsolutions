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
  title: 'MG Business Suite: pacchetti, prezzi e bundle',
  description:
    'Software scelti, attivazione rapida, crescita reale. Non paghi l’illimitato, paghi per quello che usi: 3 pacchetti, Web Care e bundle sito+software.',
  path: '/software/pricing',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['prezzi software agroalimentare', 'pacchetti mg business suite', 'canone software cantina'],
});

const howItWorksColumns = [
  {
    icon: BuildingIcon,
    title: 'Una sola suite',
    body: 'Tutto dentro un unico software. Non devi imparare cinque piattaforme diverse né integrare chissà cosa: è già tutto dentro.',
  },
  {
    icon: CompassIcon,
    title: 'Scegli quello che usi',
    body: 'Dentro la suite ci sono 5 software: Lead & Sales (contatti), Booking (prenotazioni), Social AI (contenuti), Staff & Operations (team), Control Tower (dashboard). Attivi solo quelli che ti servono.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Niente sorprese',
    body: 'Il prezzo che vedi è il prezzo che paghi. Setup iniziale una tantum, canone mensile chiaro. Cresci quando decidi tu, non quando lo decide un upsell.',
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
            Semplice, potente, senza sorprese.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
            Un solo software. Scegli i tool che ti servono, come pezzi di un puzzle. Niente pagamenti
            nascosti, niente funzioni che non usi.
          </p>
          <p className="mt-4 text-ink/60 max-w-2xl leading-relaxed">
            Che tu debba automatizzare i contatti commerciali, gestire le prenotazioni o tenere sotto
            controllo tutta l’azienda, la soluzione è qui dentro. Paghi solo quello che usi e cresci al
            tuo ritmo.
          </p>
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
