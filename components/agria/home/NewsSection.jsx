import Link from 'next/link';
import { Container, Section, TextLink } from '@/components/agria/ui';
import ArticleCards from '@/components/agria/sections/ArticleCards';
import { news } from '@/content/agria/home';
import SectionIntro from './SectionIntro';

// Tre articoli reali del blog e il link a tutti gli articoli.
export default function NewsSection() {
  return (
    <Section background="offwhite" aria-labelledby="home-news-title">
      <Container>
        <SectionIntro eyebrow={news.eyebrow} title={news.title} titleId="home-news-title" />
        <ArticleCards articles={news.articles} className="mt-8 md:mt-12" />
        <div className="mt-8 md:mt-10">
          <TextLink as={Link} href={news.allHref}>
            {news.allLabel}
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
