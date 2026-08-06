import { pageMetadata, webPageSchema } from '@/lib/seo';
import blogCredits from '@/public/images/blog/CREDITS.json';
import softwareCredits from '@/public/images/software/CREDITS.json';
import serviziCredits from '@/public/images/servizi/CREDITS.json';

const PAGE = {
  title: 'Crediti immagini',
  description: 'Attribuzione dei fotografi Unsplash per le immagini pubblicate sul sito.',
  path: '/crediti-immagini',
};

export const metadata = {
  ...pageMetadata(PAGE),
  robots: { index: false, follow: true },
};

const allCredits = [...blogCredits, ...softwareCredits, ...serviziCredits].sort((a, b) =>
  a.photographer.localeCompare(b.photographer)
);

export default function CreditiImmaginiPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }} />
      <p className="eyebrow">Attribuzione</p>
      <h1 className="h2 text-3xl md:text-4xl mt-4 text-ink">Crediti immagini</h1>
      <p className="mt-4 text-ink/70 leading-relaxed">
        Molte fotografie del sito arrivano da{' '}
        <a href="https://unsplash.com/?utm_source=mg_solutions&utm_medium=referral" className="font-semibold text-forest hover:text-brass" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
        . Le linee guida di Unsplash richiedono di attribuire ogni foto al fotografo: qui sotto l’elenco completo.
      </p>
      <div className="mt-10 rule">
        {allCredits.map((c) => (
          <div key={c.slug} className="rule py-3 flex items-center justify-between gap-4 flex-wrap">
            <span className="text-sm text-ink/70">
              Foto di{' '}
              <a href={c.profileUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest hover:text-brass">
                {c.photographer}
              </a>
            </span>
            <a href={c.photoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-ink/45 hover:text-forest">
              Vedi la foto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
