'use client';

import { useState } from 'react';
import { Container, Eyebrow, GradientSection, Reveal } from '@/components/agria/ui';
import IconBadge from '@/components/agria/service/IconBadge';
import styles from './Azienda.module.css';

// Principi: fisarmonica orizzontale. Da md i quattro pannelli sono affiancati:
// quello sotto il cursore, a fuoco o toccato si allarga e mostra titolo e testo,
// gli altri restano stretti con il titolo in verticale. Sotto md i pannelli
// sono verticali e si aprono allo stesso modo. Il primo è aperto all'inizio.
// I testi restano nel documento anche da chiusi (i lettori di schermo li
// leggono tutti); senza JavaScript sono tutti aperti, in colonna; con movimento
// ridotto l'apertura è senza transizione.
export default function PrinciplesAccordion({ id, label, items }) {
  const [active, setActive] = useState(0);

  return (
    <GradientSection aria-labelledby={id}>
      <Container>
        <Reveal>
          <Eyebrow as="h2" id={id}>
            {label}
          </Eyebrow>
        </Reveal>
        <Reveal delay={90} className="mt-8 md:mt-10">
          <ul className={styles.accordion}>
            {items.map((item, index) => (
              <li
                key={item.title}
                tabIndex={0}
                data-active={index === active || undefined}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`${styles.panel} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2`}
              >
                <div className={styles.panelHead}>
                  <IconBadge name={item.icon} />
                  <span className="font-agria-mono text-agria-label text-agria-green-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* copia visiva del titolo per il pannello chiuso (da md) */}
                <span className={styles.panelSide} aria-hidden="true">
                  {item.title}
                </span>
                <div className={styles.panelMain}>
                  <h3 className="font-agria-sans text-agria-h3 text-agria-graphite">{item.title}</h3>
                  <div className={styles.panelBody}>
                    <p className="pt-3 font-agria-sans text-agria-md text-agria-grey">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </GradientSection>
  );
}
