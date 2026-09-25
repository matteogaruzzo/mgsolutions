'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import { Container, Heading, Reveal, Section } from '@/components/agria/ui';
import Icon from '@/components/agria/icons/Icon';
import styles from './ServiceArea.module.css';

// "Cosa costruiamo": elenco di quattro voci (schede verticali, pattern WAI-ARIA
// Tabs con attivazione automatica). Il passaggio del cursore o il focus su una
// voce cambia l'anteprima a destra: uno schema di interfaccia con una
// fotografia (se presente, item.image) e tre riquadri.
// Senza JavaScript: elenco nascosto, le quattro anteprime visibili una sotto
// l'altra (ognuna ha il suo titolo). Movimento ridotto: nessuna animazione.
export default function BuildSelector({ id, title, items }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const baseId = useId();

  function onKeyDown(event, index) {
    const next = {
      ArrowDown: (index + 1) % items.length,
      ArrowRight: (index + 1) % items.length,
      ArrowUp: (index - 1 + items.length) % items.length,
      ArrowLeft: (index - 1 + items.length) % items.length,
      Home: 0,
      End: items.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <Section background="offwhite" aria-labelledby={id}>
      <Container>
        <Reveal>
          <Heading level="h2" id={id} className="max-w-[22ch]">
            {title}
          </Heading>
        </Reveal>
        <div
          className={`${styles.selectorRoot} mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-10`}
        >
          <div role="tablist" aria-orientation="vertical" aria-labelledby={id} className={styles.selectorList}>
            {items.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.title}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`${styles.selectorItem} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 focus-visible:ring-offset-agria-offwhite`}
                >
                  <span className="font-agria-mono text-agria-label text-agria-grey">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1">{item.title}</span>
                  <Icon name="arrow-right" className={styles.selectorArrow} />
                </button>
              );
            })}
          </div>

          <div className={styles.previewStage}>
            {items.map((item, index) => (
              <div
                key={item.title}
                role="tabpanel"
                id={`${baseId}-panel-${index}`}
                aria-labelledby={`${baseId}-tab-${index}`}
                hidden={index !== active}
                className={styles.previewPanel}
              >
                <div className={styles.previewBar} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <i />
                </div>
                <div className={styles.previewBody}>
                  {item.image && (
                    <div className={`${styles.previewImage} mb-6`}>
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-agria-sans text-[clamp(1.35rem,2.4vw,1.9rem)] font-light leading-[1.2] tracking-[-0.015em] text-agria-graphite">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[48ch] font-agria-sans text-agria-md text-agria-grey">{item.text}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {item.tiles.map((tile) => (
                      <li key={tile.title} className="rounded-xl border border-agria-border bg-agria-white p-4">
                        <p className="font-agria-sans text-agria-sm font-medium text-agria-graphite">{tile.title}</p>
                        <p className="mt-1 font-agria-sans text-agria-sm text-agria-grey">{tile.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
