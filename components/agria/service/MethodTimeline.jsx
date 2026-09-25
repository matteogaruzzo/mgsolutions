'use client';

import { useState } from 'react';
import { Container, Heading, Reveal, Section } from '@/components/agria/ui';
import styles from './ServiceArea.module.css';

// Metodo: linea temporale a quattro passi su fondo scuro. Il passaggio del
// cursore, il focus o il tocco su un passo ne mostrano la descrizione (il primo
// è aperto all'inizio). Le descrizioni restano nel documento anche quando sono
// chiuse, quindi i lettori di schermo le leggono tutte. Senza JavaScript: tutte
// aperte. Movimento ridotto: apertura senza transizione.
export default function MethodTimeline({ id, anchor, title, steps }) {
  const [active, setActive] = useState(0);

  return (
    <Section background="ink" id={anchor} aria-labelledby={id}>
      <Container>
        <Reveal>
          <Heading level="h2" id={id} onDark className="max-w-[22ch]">
            {title}
          </Heading>
        </Reveal>
        <ol className={`${styles.timeline} mt-12 md:mt-16`}>
          {steps.map((step, index) => (
            <li
              key={step.title}
              tabIndex={0}
              data-active={index === active || undefined}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`${styles.step} rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-bright focus-visible:ring-offset-4 focus-visible:ring-offset-agria-ink`}
            >
              <span className={styles.stepDot} aria-hidden="true" />
              <span className="font-agria-mono text-agria-label text-agria-green-bright">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-agria-sans text-agria-h3 text-agria-on-dark">{step.title}</h3>
              <div className={styles.stepBody}>
                <p className="pt-3 font-agria-sans text-agria-md text-agria-on-dark-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
