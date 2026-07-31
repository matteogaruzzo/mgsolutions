import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { getAllTags, getPostsByTagSlug } from '@/lib/data';
import { pageMetadata, webPageSchema, breadcrumbSchema } from '@/lib/seo';

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }));
}

export function generateMetadata({ params }) {
  const tags = getAllTags();
  const match = tags.find((t) => t.slug === params.tag);
  if (!match) return {};
  return pageMetadata({
    title: `Articoli su ${match.tag}`,
    description: `Tutti gli articoli del blog MG Solutions taggati "${match.tag}": strategie e case study per l’agroalimentare.`,
    path: `/blog/tag/${match.slug}`,
  });
}

export default function TagPage({ params }) {
  const tags = getAllTags();
  const match = tags.find((t) => t.slug === params.tag);
  if (!match) notFound();

  const posts = getPostsByTagSlug(params.tag);

  const PAGE = {
    title: `Articoli su ${match.tag}`,
    description: `Tutti gli articoli del blog MG Solutions taggati "${match.tag}".`,
    path: `/blog/tag/${match.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: `#${match.tag}`, path: PAGE.path },
            ])
          ),
        }}
      />

      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="text-xs text-forest">
          <Link href="/blog" className="hover:text-brass">Blog</Link> {'>'} #{match.tag}
        </p>
        <h1 className="display text-3xl sm:text-5xl mt-5 leading-tight break-words">
          Articoli su #{match.tag}
        </h1>
        <p className="mt-4 text-lg text-ink/70 max-w-2xl">
          {posts.length} {posts.length === 1 ? 'articolo' : 'articoli'} taggati &ldquo;{match.tag}&rdquo;.
        </p>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link href={`/blog/${p.slug}`} className="group block h-full">
                {p.featuredImage && (
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-line mb-3">
                    <Image
                      src={p.featuredImage}
                      alt={p.imageAlt || p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <p className="text-xs text-forest font-semibold">{p.category}</p>
                <h2 className="h3 text-lg mt-2 text-ink group-hover:text-forest transition-colors line-clamp-2">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed line-clamp-2">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
