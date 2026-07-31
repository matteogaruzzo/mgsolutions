import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ServiceArea from '@/components/geo/ServiceArea';
import { posts } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Blog: strategie reali per scalare il tuo agroalimentare',
  description:
    'E-commerce, AI, SEO, marketing. Articoli che risolvono problemi concreti di cantine, agriturismo, frantoi. Niente fuffa, solo cose che funzionano.',
  path: '/blog',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'blog agribusiness',
    'strategie digitali agroalimentare',
    'articoli e-commerce vino',
    'guide automazione aziendale',
  ],
});

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <section className="max-w-edge mx-auto px-6 pt-32 pb-24">
      <p className="eyebrow">Blog</p>
      <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02]">
        Idee chiare su AI, vendite online e crescita.
      </h1>
      <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
        Niente fuffa: solo cose che aiutano davvero un’azienda a vendere di più e farsi trovare —
        da Google e dalle risposte AI.
      </p>

      <div className="mt-16 rule">
        {posts.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group rule py-8 grid md:grid-cols-[10rem_1fr] gap-4 md:gap-10 items-start hover:bg-paper-dim transition-colors -mx-3 px-3 rounded-lg"
            >
              <div className="font-mono text-xs text-ink/50">
                <p className="text-forest">{p.category}</p>
                <p className="mt-1">
                  {new Date(p.date).toLocaleDateString('it-IT', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
                <p className="mt-1">{p.readingMinutes} min</p>
              </div>
              <div>
                <h2 className="display text-2xl md:text-3xl group-hover:text-forest transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-ink/65 leading-relaxed max-w-2xl">{p.excerpt}</p>
                <span className="mt-3 inline-block font-mono text-xs text-forest group-hover:text-brass">
                  Leggi →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

      <ServiceArea pageType="blog" />
    </>
  );
}
