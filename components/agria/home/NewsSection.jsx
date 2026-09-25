import Link from 'next/link';
import { Container, Eyebrow, Heading, Reveal, Section, TextLink } from '@/components/agria/ui';
import { HoverGroup, ZoomImage } from '@/components/agria/motion';
import { getPost } from '@/content/blog';
import { news } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

const CARD =
  'agria-zoom-trigger relative flex h-full flex-col overflow-hidden rounded-agria-card border border-agria-border bg-agria-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[3px] hover:border-agria-green/45 hover:shadow-[0_18px_42px_rgb(var(--agria-graphite)/0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-agria-green-dark has-[a:focus-visible]:ring-offset-2';

// Tre articoli reali del blog: immagine, etichetta (categoria del post) e titolo.
// Tutta la card porta all'articolo (link esteso sul titolo).
export default function NewsSection() {
  const articles = news.articles
    .map((article) => ({ ...article, post: getPost(article.slug) }))
    .filter((article) => article.post);

  return (
    <Section background="offwhite" aria-labelledby="home-news-title">
      <Container>
        <SectionIntro eyebrow={news.eyebrow} title={news.title} titleId="home-news-title" />
        <HoverGroup as="ul" className="mt-8 grid grid-cols-1 gap-[18px] md:mt-12 md:grid-cols-3">
          {articles.map(({ slug, alt, post }, index) => (
            <li key={slug}>
              <Reveal delay={index * 70} className="h-full">
                <article className={CARD}>
                  <ZoomImage
                    src={post.featuredImage}
                    alt={alt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[2/1] rounded-none"
                  />
                  <div className="flex flex-1 flex-col gap-3 px-[26px] pb-7 pt-6">
                    <Eyebrow>{post.category}</Eyebrow>
                    <Heading level="h3">
                      <Link
                        href={`/blog/${slug}`}
                        className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                      >
                        {post.title}
                      </Link>
                    </Heading>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </HoverGroup>
        <div className="mt-8 md:mt-10">
          <TextLink as={Link} href={news.allHref}>
            {news.allLabel}
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
