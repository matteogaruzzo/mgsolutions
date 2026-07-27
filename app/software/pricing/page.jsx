import Reveal from '@/components/Reveal';
import PricingTiers from '@/components/pricing/PricingTiers';
import PricingComparison from '@/components/pricing/PricingComparison';
import BundleSection from '@/components/pricing/BundleSection';
import ExtrasSection from '@/components/pricing/ExtrasSection';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingCTA from '@/components/pricing/PricingCTA';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'MG Business Suite: pacchetti, prezzi e bundle',
  description:
    'Moduli scelti, attivazione rapida, crescita reale. Non paghi l’illimitato, paghi per quello che usi: 3 pacchetti, Web Care e bundle sito+software.',
  path: '/software/pricing',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['prezzi software agroalimentare', 'pacchetti mg business suite', 'canone software cantina'],
});

export default function SoftwarePricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <Reveal>
          <p className="eyebrow">MG Business Suite</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-3xl leading-[1.05]">
            L’ecosistema completo per il tuo business.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
            Moduli scelti, attivazione rapida, crescita reale. Non paghi l’“illimitato”, paghi per quello che usi.
          </p>
        </Reveal>
      </section>

      {/* ---------- 3 PACCHETTI ---------- */}
      <section className="max-w-edge mx-auto px-6 pb-24">
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

      {/* ---------- WEB CARE + BUNDLE ---------- */}
      <section id="web-care" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
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
