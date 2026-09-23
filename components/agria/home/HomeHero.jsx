import Link from 'next/link';
import { Button, Container, Eyebrow, Heading, Text } from '@/components/agria/ui';
import { RotatingHeadline } from '@/components/agria/motion';
import { hero } from '@/content/agria/home';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.sky} aria-hidden="true" />
      <div className={styles.land} aria-hidden="true">
        <div className={styles.rows} />
        <div className={styles.sweep} />
      </div>
      <ul className={styles.chips} aria-hidden="true">
        {hero.chips.map((chip) => (
          <li key={chip} className={styles.chip}>
            {chip}
          </li>
        ))}
      </ul>

      <Container className={styles.content}>
        <Eyebrow onDark className={styles.enter}>
          {hero.eyebrow}
        </Eyebrow>
        <Heading
          level="display"
          as="h1"
          id="home-hero-title"
          onDark
          className={`mx-auto mt-5 max-w-[19ch] ${styles.enter}`}
        >
          <RotatingHeadline prefix={hero.titlePrefix} phrases={hero.titlePhrases} suffix={hero.titleSuffix} />
        </Heading>
        <Text size="lg" onDark muted measure={false} className={`mx-auto mt-6 max-w-[54ch] ${styles.enter}`}>
          {hero.lead}
        </Text>
        <div className={`mt-9 flex flex-wrap justify-center gap-3 ${styles.enter}`}>
          <Button as={Link} href={hero.primary.href} variant="bright">
            {hero.primary.label}
          </Button>
          <Button href={hero.secondary.href} variant="line">
            {hero.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
