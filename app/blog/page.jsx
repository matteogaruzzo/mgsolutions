import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ServiceArea from '@/components/geo/ServiceArea';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { posts, getAllTags } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const tags = getAllTags();
const categories = [...new Set(posts.map((p) => p.category))].sort();

const POSTS_PER_PAGE = 8;

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

function pageHref(activeCategory, page) {
  const params = new URLSearchParams();
  if (activeCategory) params.set('category', activeCategory);
  if (page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : '/blog';
}

export default function Blog({ searchParams }) {
  const activeCategory = searchParams?.category;
  const categoryPosts = activeCategory ? posts.filter((p) => p.category === activeCategory) : posts;
  const sortedPosts = [...categoryPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
  const requestedPage = parseInt(searchParams?.page, 10) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const filteredPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

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

      <CategoryFilter categories={categories} />

      {filteredPosts.length === 0 && (
        <p className="mt-10 text-ink/60">Nessun articolo in questa categoria per ora.</p>
      )}

      <div className="rule">
        {filteredPosts.map((p, i) => (
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

      {totalPages > 1 && (
        <nav aria-label="Paginazione articoli" className="mt-10 flex items-center justify-center gap-2">
          {currentPage > 1 ? (
            <Link
              href={pageHref(activeCategory, currentPage - 1)}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-paper-dim text-ink/65 hover:bg-forest/10 hover:text-forest transition-colors"
            >
              ← Precedente
            </Link>
          ) : (
            <span className="px-3.5 py-1.5 rounded-full text-sm font-medium text-ink/30 cursor-not-allowed">
              ← Precedente
            </span>
          )}

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={pageHref(activeCategory, page)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  page === currentPage
                    ? 'bg-forest text-paper'
                    : 'bg-paper-dim text-ink/65 hover:bg-forest/10 hover:text-forest'
                }`}
              >
                {page}
              </Link>
            ))}
          </div>

          {currentPage < totalPages ? (
            <Link
              href={pageHref(activeCategory, currentPage + 1)}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-paper-dim text-ink/65 hover:bg-forest/10 hover:text-forest transition-colors"
            >
              Successivo →
            </Link>
          ) : (
            <span className="px-3.5 py-1.5 rounded-full text-sm font-medium text-ink/30 cursor-not-allowed">
              Successivo →
            </span>
          )}
        </nav>
      )}

      {totalPages > 1 && (
        <p className="mt-3 text-center text-xs text-ink/45">
          Pagina {currentPage} di {totalPages} · {sortedPosts.length} articoli
        </p>
      )}

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
