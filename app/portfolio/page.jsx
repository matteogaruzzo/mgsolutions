import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import PortfolioGrid from '@/components/PortfolioGrid';
import { caseStudies, testimonials } from '@/lib/data';

export const metadata = {
  title: 'Portfolio',
  description:
    'Case study di MG Solutions per cantine, oleifici e agriturismi: e-commerce Shopify, siti immersivi e software su misura.',
};

const stats = [
  ['6', 'Case study'],
  ['3', 'Settori verticali'],
  ['5+', 'Anni di esperienza'],
  ['24/7', 'Supporto continuo'],
];

const featuredTestimonial = testimonials.find((t) => t.caseStudySlug === 'tenuta-monteverdi');

export default function Portfolio() {
  return (
    <>
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="eyebrow">Portfolio · Progetti realizzati</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
          Progetti costruiti per cantine, oleifici e agriturismi.
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Non sono semplici schede tecniche. Sono storie di problemi reali del settore, risolti con
          strumenti concreti.
        </p>
        <p className="mt-3 text-sm font-semibold text-forest">Scegli un progetto. Entra nella storia.</p>
        <p className="mt-6 text-xs text-ink/50 max-w-2xl">
          I case study sono illustrativi: esempi realistici di ciò che sappiamo costruire per
          ciascun settore, non clienti reali. I progetti CONCEPT sono dimostrazioni.
        </p>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-24">
        <PortfolioGrid caseStudies={caseStudies} />
      </section>

      {featuredTestimonial && (
        <section className="bg-paper-dim">
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
            <Reveal>
              <p className="display text-2xl md:text-4xl italic font-semibold leading-snug text-forest">
                “{featuredTestimonial.quote}”
              </p>
              <p className="mt-8 font-semibold text-ink">{featuredTestimonial.name}</p>
              <p className="text-xs text-forest mt-1">{featuredTestimonial.role}</p>
            </Reveal>
          </div>
        </section>
      )}

      <section className="max-w-edge mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-paper p-8 text-center">
              <p className="display text-4xl text-forest">{n}</p>
              <p className="text-xs text-ink/55 mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Vuoi che trasformiamo il tuo business?"
        sub="Prima call conoscitiva gratuita. Ti diciamo con onestà se e come possiamo aiutarti."
      />
    </>
  );
}
