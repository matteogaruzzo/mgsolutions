import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { posts, getPost, site } from '@/lib/data';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: {
      title: p.title,
      description: p.excerpt,
      type: 'article',
      publishedTime: p.date,
    },
    alternates: { canonical: `/blog/${p.slug}` },
  };
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  // JSON-LD: aiuta Google e gli assistenti AI a capire e citare l'articolo (GEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { '@type': 'Person', name: site.founder },
    publisher: { '@type': 'Organization', name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link href="/blog" className="font-mono text-xs text-forest hover:text-brass">
          ← Blog
        </Link>

        <div className="mt-6 font-mono text-xs text-ink/50 flex gap-4">
          <span className="text-forest">{p.category}</span>
          <span>
            {new Date(p.date).toLocaleDateString('it-IT', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span>{p.readingMinutes} min di lettura</span>
        </div>

        <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">{p.title}</h1>
        <p className="mt-6 text-xl text-ink/70 leading-relaxed border-l-2 border-brass pl-5">
          {p.excerpt}
        </p>

        <div className="mt-10 space-y-6">
          {p.body.map((para, i) => (
            <p key={i} className="text-lg text-ink/80 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-14 rule pt-8 font-mono text-sm text-ink/60">
          Scritto da {site.founder} · {site.name}
        </div>
      </article>

      <CTA
        title="Vuoi applicare tutto questo al tuo business?"
        sub="Ne parliamo in una call gratuita: capiamo insieme cosa ha senso per te."
      />
    </>
  );
}
