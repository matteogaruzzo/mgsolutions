import Link from 'next/link';
import { Container, Heading, Reveal, Section } from '@/components/agria/ui';
import Icon from '@/components/agria/icons/Icon';
import styles from './Contatti.module.css';

// Domande frequenti: quattro schede apribili (details/summary nativi, quindi
// tastiera e assenza di JavaScript gestite dal browser), su due colonne.
// item.link: { before, label, href, after } facoltativo, in coda alla risposta.
export default function ContactFaq({ id, title, items }) {
  return (
    <Section background="white" aria-labelledby={id}>
      <Container>
        <Reveal>
          <Heading level="h2" id={id}>
            {title}
          </Heading>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-[14px] md:mt-10 md:grid-cols-2">
          {items.map((item, index) => (
            <li key={item.q}>
              <Reveal delay={index * 60} className="h-full">
                <details className={styles.faq}>
                  <summary className={styles.faqQuestion}>
                    <span>{item.q}</span>
                    <span className={styles.faqIcon} aria-hidden="true">
                      <Icon name="plus" />
                    </span>
                  </summary>
                  <p className={styles.faqAnswer}>
                    {item.a}
                    {item.link && (
                      <>
                        {' '}
                        {item.link.before}
                        <Link href={item.link.href} className={styles.faqLink}>
                          {item.link.label}
                        </Link>
                        {item.link.after}
                      </>
                    )}
                  </p>
                </details>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
