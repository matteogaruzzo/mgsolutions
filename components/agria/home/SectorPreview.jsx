'use client';

import { useId, useRef, useState } from 'react';
import { Container, Eyebrow, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { preview } from '@/content/agria/home';
import styles from './SectorPreview.module.css';

// Modulo "Cosa costruiamo": tre schede (pattern WAI-ARIA Tabs) cambiano
// l'anteprima dentro un dispositivo inclinato in 3D, che si raddrizza al
// passaggio del cursore o con il focus. Senza JavaScript: prima anteprima,
// schede nascoste. Con movimento ridotto: dispositivo diritto, nessuna animazione.
export default function SectorPreview() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const baseId = useId();
  const count = preview.sectors.length;

  function onKeyDown(event, index) {
    const next = {
      ArrowRight: (index + 1) % count,
      ArrowLeft: (index - 1 + count) % count,
      Home: 0,
      End: count - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <Section background="white" aria-labelledby="home-anteprima-title">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>{preview.eyebrow}</Eyebrow>
          <Heading level="h2" id="home-anteprima-title">
            {preview.title}
          </Heading>
          <Text size="lg" muted>
            {preview.text}
          </Text>
        </Reveal>

        <div role="tablist" aria-label={preview.tabsLabel} className={`${styles.tabs} mx-auto mt-8 md:mt-10`}>
          {preview.sectors.map((sector, index) => {
            const selected = index === active;
            return (
              <button
                key={sector.key}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${sector.key}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${sector.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`${styles.tab} rounded-full px-5 py-2.5 font-agria-sans text-agria-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2`}
              >
                {sector.label}
              </button>
            );
          })}
        </div>

        <div className={`${styles.stage} mt-8 md:mt-12`}>
          <div className={styles.device}>
            <div className={styles.bar} aria-hidden="true">
              <span />
              <span />
              <span />
              <i />
            </div>
            <div className={styles.screen}>
              {preview.sectors.map((sector, index) => (
                <div
                  key={sector.key}
                  role="tabpanel"
                  id={`${baseId}-panel-${sector.key}`}
                  aria-labelledby={`${baseId}-tab-${sector.key}`}
                  hidden={index !== active}
                  tabIndex={0}
                  className={`${styles.panel} rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark`}
                >
                  <p className="font-agria-mono text-agria-label uppercase text-agria-green-dark">{sector.kicker}</p>
                  <p className="mt-3 max-w-[20ch] font-agria-sans text-[clamp(1.4rem,3vw,2.3rem)] font-light leading-[1.1] tracking-[-0.02em] text-agria-graphite">
                    {sector.title}
                  </p>
                  <p className="mt-3 font-agria-sans text-agria-md text-agria-grey">{sector.line}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {sector.tiles.map((tile) => (
                      <li key={tile.title} className="rounded-xl border border-agria-border bg-agria-white p-4">
                        <p className="font-agria-sans text-agria-sm font-medium text-agria-graphite">{tile.title}</p>
                        <p className="mt-1 font-agria-sans text-agria-sm text-agria-grey">{tile.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Text size="sm" muted className="mx-auto mt-6 text-center">
          {preview.note}
        </Text>
      </Container>
    </Section>
  );
}
