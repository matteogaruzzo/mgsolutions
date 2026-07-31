import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ServiceArea from '@/components/geo/ServiceArea';
import { posts, getAllTags } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const tags = getAllTags();

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
      <h1 className="display text-3xl sm:text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.2] break-words">
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
              <div>
                {p.featuredImage && (
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-line mb-3">
                    <Image
                      src={p.featuredImage}
                      alt={p.imageAlt || p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
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

      {tags.length > 0 && (
        <div className="mt-14 rule pt-8">
          <p className="text-xs tracking-widest font-semibold text-forest">ESPLORA PER TAG</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Link
                key={t.slug}
                href={`/blog/tag/${t.slug}`}
                className="px-3 py-1.5 rounded-full bg-paper-dim text-sm text-ink/65 hover:bg-forest/10 hover:text-forest transition-colors"
              >
                #{t.tag} <span className="text-ink/35">({t.count})</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>

      <ServiceArea pageType="blog" />
    </>
  );
}
