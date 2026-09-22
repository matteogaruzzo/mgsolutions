import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import ProgressBar from '@/components/blog/ProgressBar';
import AuthorBox from '@/components/blog/AuthorBox';
import ShareArticle from '@/components/blog/ShareArticle';
import CtaHeroSection from '@/components/blog/CtaHeroSection';
import SidebarPromo from '@/components/blog/SidebarPromo';
import { posts, getPost, site, slugifyTag } from '@/lib/data';
import { pageMetadata, breadcrumbSchema, SITE_URL } from '@/lib/seo';
import { renderRichText, isBlockquote, stripBlockquoteMarker } from '@/lib/richtext';

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return pageMetadata({
    title: p.seoTitle || p.title,
    description: p.excerpt,
    keywords: p.keywords,
    path: `/blog/${p.slug}`,
    type: 'article',
    publishedTime: p.date,
    image: p.featuredImage,
  });
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  const related = (p.relatedSlugs || [])
    .map((slug) => getPost(slug))
    .filter(Boolean);

  const headingSections = p.body.filter((s) => typeof s !== 'string' && s.h2);
  const wordCount = p.body
    .flatMap((s) => (typeof s === 'string' ? [s] : s.paragraphs))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const midIndex = Math.floor(p.body.length / 2);

  // JSON-LD: aiuta Google e gli assistenti AI a capire e citare l'articolo (GEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    image: p.featuredImage ? `${SITE_URL}${p.featuredImage}` : undefined,
    datePublished: p.date,
    dateModified: p.updated || p.date,
    author: { '@type': 'Person', name: site.founder, image: `${SITE_URL}/images/team/matteo-garuzzo.jpg` },
    publisher: { '@type': 'Organization', name: site.name },
    keywords: (p.keywords || []).join(', '),
    wordCount,
  };

  return (
    <>
      <ProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: p.category, path: '/blog' },
              { name: p.title, path: `/blog/${p.slug}` },
            ])
          ),
        }}
      />

      <div className="max-w-edge mx-auto px-6 pt-32 pb-4">
        <p className="text-xs text-ink/50">
          <Link href="/" className="hover:text-forest">Home</Link> {'>'}{' '}
          <Link href="/blog" className="hover:text-forest">Blog</Link> {'>'} {p.category}
        </p>
      </div>

      <div className="max-w-edge mx-auto px-6 pb-8">
        <CtaHeroSection category={p.category} />
      </div>

      <div className="max-w-edge mx-auto px-6 pb-8">
        <div className="max-w-3xl">
          <div className="text-xs text-ink/50 flex flex-wrap gap-4">
            <span className="text-forest font-semibold">{p.category}</span>
            <span>
              {new Date(p.date).toLocaleDateString('it-IT', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            {p.updated && p.updated !== p.date && (
              <span>
                Aggiornato il{' '}
                {new Date(p.updated).toLocaleDateString('it-IT', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
            <span>{p.readingMinutes} min di lettura</span>
            <span>{wordCount.toLocaleString('it-IT')} parole</span>
          </div>

          <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">{p.title}</h1>
        </div>
      </div>

      {p.featuredImage && (
        <div className="max-w-edge mx-auto px-6">
          <div className="relative aspect-[16/7] rounded-2xl overflow-hidden border border-line">
            <Image
              src={p.featuredImage}
              alt={p.imageAlt || `${p.title} — MG Solutions`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="max-w-edge mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-[200px_1fr_280px] gap-10">
        {headingSections.length >= 2 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs tracking-widest font-semibold text-forest">IN QUESTO ARTICOLO</p>
              <ul className="mt-4 space-y-3">
                {headingSections.map((s) => (
                  <li key={s.h2}>
                    <a
                      href={`#${slugifyHeading(s.h2)}`}
                      className="text-sm text-ink/60 hover:text-forest leading-snug"
                    >
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}

        <article className="max-w-3xl">
          {p.tags && p.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${slugifyTag(tag)}`}
                  className="px-3 py-1 rounded-full bg-paper-dim text-xs text-ink/65 hover:bg-forest/10 hover:text-forest transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          <p className="mt-6 text-xl text-ink/70 leading-relaxed border-l-2 border-brass pl-5">
            {p.excerpt}
          </p>

          <div className="mt-8 lg:hidden">
            <AuthorBox />
          </div>

          <div className="mt-10 space-y-8">
            {p.body.map((section, i) => (
              <div key={i}>
                {typeof section === 'string' ? (
                  isBlockquote(section) ? (
                    <blockquote className="border-l-4 border-forest pl-5 py-1 text-xl italic text-ink/75 leading-relaxed">
                      {renderRichText(stripBlockquoteMarker(section))}
                    </blockquote>
                  ) : (
                    <p className="text-lg text-ink/80 leading-relaxed">{renderRichText(section)}</p>
                  )
                ) : (
                  <div id={slugifyHeading(section.h2)} className="scroll-mt-24">
                    <h2 className="h2 text-2xl md:text-3xl text-ink mb-4">{section.h2}</h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((para, j) =>
                        isBlockquote(para) ? (
                          <blockquote key={j} className="border-l-4 border-forest pl-5 py-1 text-xl italic text-ink/75 leading-relaxed">
                            {renderRichText(stripBlockquoteMarker(para))}
                          </blockquote>
                        ) : (
                          <p key={j} className="text-lg text-ink/80 leading-relaxed">
                            {renderRichText(para)}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )}
                {i === midIndex && (
                  <div className="mt-8 border-l-2 border-forest bg-paper-dim rounded-r-lg p-6">
                    <p className="font-semibold text-ink">
                      Ti riconosci in quello che hai appena letto?
                    </p>
                    <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                      Ne parliamo in una call gratuita di 30 minuti: capiamo insieme se e come ha senso
                      applicarlo al tuo caso.
                    </p>
                    <Link href="/prenota-call" className="mt-4 inline-block text-sm font-semibold text-forest hover:text-brass">
                      Prenota una call →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {p.relatedLinks && p.relatedLinks.length > 0 && (
            <div className="mt-12 rule pt-8">
              <p className="text-xs tracking-widest font-semibold text-forest">APPROFONDISCI SUL SITO</p>
              <ul className="mt-4 space-y-2">
                {p.relatedLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-forest hover:text-brass underline underline-offset-2">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 rule pt-8 text-sm text-ink/60">
            Scritto da {site.founder} · {site.name}
          </div>

          <ShareArticle title={p.title} url={`${SITE_URL}/blog/${p.slug}`} />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AuthorBox />
            <SidebarPromo category={p.category} className="mt-4" />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-16">
            <p className="eyebrow">Continua a leggere</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink">Articoli correlati.</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block border border-line rounded-xl overflow-hidden bg-paper hover:shadow-lg transition-shadow h-full"
                >
                  {r.featuredImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={r.featuredImage}
                        alt={r.imageAlt || r.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs text-forest font-semibold">{r.category}</p>
                    <h3 className="h3 text-lg mt-2 text-ink line-clamp-2">{r.title}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed line-clamp-2">{r.excerpt}</p>
                    <p className="mt-3 text-xs text-ink/40">
                      {new Date(r.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Vuoi applicare tutto questo al tuo business?"
        sub="Ne parliamo in una call gratuita: capiamo insieme cosa ha senso per te."
      />

      <ServiceArea pageType="blog" />
    </>
  );
}
