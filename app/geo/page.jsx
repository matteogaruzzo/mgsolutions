import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { regions } from '@/lib/geo-data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Servizi Digitali per l’Agroalimentare in Italia',
  description:
    'Siti web, e-commerce e software per cantine, oleifici e agriturismi in tutte le regioni italiane. Trova la soluzione digitale per la tua zona.',
  path: '/geo',
};

export const metadata = pageMetadata({ ...PAGE, keywords: ['digitale agroalimentare italia', 'siti web cantine italia'] });

const macroAreas = ['Nord-Ovest', 'Nord-Est', 'Centro', 'Sud', 'Isole'];

export default function GeoHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />

      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <Reveal>
          <p className="eyebrow">Dove lavoriamo</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-2xl leading-tight">
            MG Solutions in tutta Italia.
          </h1>
          <p className="mt-5 text-lg text-ink/70 max-w-xl leading-relaxed">
            Realizziamo siti, e-commerce e software per cantine, oleifici e agriturismi in
            tutte le regioni italiane. Seleziona la tua per scoprire come lavoriamo lì.
          </p>
        </Reveal>
      </section>

      {macroAreas.map((area, ai) => {
        const areaRegions = regions.filter((r) => r.macroArea === area);
        if (!areaRegions.length) return null;
        return (
          <section key={area} className={ai % 2 === 1 ? 'bg-paper-dim' : ''}>
            <div className="max-w-edge mx-auto px-6 py-12">
              <Reveal>
                <p className="eyebrow">{area}</p>
              </Reveal>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {areaRegions.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 50}>
                    <Link
                      href={`/geo/${r.slug}`}
                      className="block bg-paper border border-line rounded-xl p-5 h-full transition-all duration-200 hover:shadow-md hover:border-forest/30"
                    >
                      <p className="font-semibold text-ink">{r.name}</p>
                      <p className="text-xs text-ink/50 mt-1">Capoluogo: {r.capoluogo}</p>
                      <p className="text-sm text-ink/60 mt-3 leading-relaxed">{r.lead}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-forest">
                        Scopri di più →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-20 text-center">
          <h2 className="display text-3xl md:text-4xl max-w-xl mx-auto leading-tight">
            Non trovi la tua regione o vuoi parlarne subito?
          </h2>
          <p className="mt-4 text-paper/75 max-w-md mx-auto">
            Lavoriamo con l’agroalimentare in tutta Italia, da remoto e in presenza dove serve.
          </p>
          <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper mt-8">
            Prenota una call →
          </Link>
        </div>
      </section>
    </>
  );
}
