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
  title: 'MG Business Suite: struttura dei piani e accesso anticipato',
  description:
    'MG Business Suite è in accesso anticipato: solo Lead & Sales è attivabile oggi. Scopri la struttura dei piani Essenziale, Crescita ed Ecosistema — prezzo in definizione.',
  path: '/software/pricing',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['mg business suite accesso anticipato', 'piani mg business suite', 'crm agroalimentare early access'],
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
    body: 'La suite prevede 5 moduli: Lead & Sales (contatti), Booking (prenotazioni), Social AI (contenuti), Staff & Operations (team), Control Tower (dashboard). Oggi solo Lead & Sales è attivabile in accesso anticipato; gli altri sono in roadmap.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Nessun prezzo nascosto',
    body: 'Non pubblichiamo un canone finché non è reale. Durante l’accesso anticipato definiamo il costo insieme a te, in base a moduli, utenti e integrazioni.',
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
          <p className="eyebrow">MG Business Suite · Accesso anticipato</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-3xl leading-[1.05]">
            La struttura dei piani, con trasparenza su cosa è già reale.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
            MG Business Suite è pensata come un unico software modulare. Oggi solo MG Lead & Sales è
            attivabile, in accesso anticipato: gli altri 4 moduli sono in roadmap.
          </p>
          <p className="mt-4 text-ink/60 max-w-2xl leading-relaxed">
            Qui sotto trovi la struttura dei 3 piani previsti — quanti moduli includeranno e a chi si
            rivolgono — non un listino prezzi. Il canone verrà definito e comunicato quando ogni piano
            sarà davvero attivabile.
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
