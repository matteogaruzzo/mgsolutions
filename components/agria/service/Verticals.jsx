'use client';

import { useId, useRef, useState } from 'react';
import { Container, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import IconBadge from './IconBadge';
import styles from './ServiceArea.module.css';

// Verticali: tre schede (pattern WAI-ARIA Tabs) con una griglia di quattro voci
// con icona. Ogni pannello ha il nome del settore come h3: nascosto alla vista
// con JavaScript (lo dice già la scheda), visibile senza JavaScript, quando le
// schede spariscono e i tre pannelli restano uno sotto l'altro.
export default function Verticals({ id, title, sectors, labels }) {
  const keys = Object.keys(sectors);
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const baseId = useId();

  function onKeyDown(event, index) {
    const next = {
      ArrowRight: (index + 1) % keys.length,
      ArrowLeft: (index - 1 + keys.length) % keys.length,
      Home: 0,
      End: keys.length - 1,
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
        <div className={styles.verticalsRoot}>
          <div role="tablist" aria-labelledby={id} className={`${styles.segmented} mt-8 md:mt-10`}>
            {keys.map((key, index) => {
              const selected = index === active;
              return (
                <button
                  key={key}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${key}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`${styles.segment} rounded-full px-5 py-2.5 font-agria-sans text-agria-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2`}
                >
                  {labels[key]}
                </button>
              );
            })}
          </div>
          {keys.map((key, index) => (
            <div
              key={key}
              role="tabpanel"
              id={`${baseId}-panel-${key}`}
              aria-labelledby={`${baseId}-tab-${key}`}
              hidden={index !== active}
              className={`${styles.verticalPanel} mt-8`}
            >
              <h3 className={styles.panelTitle}>{labels[key]}</h3>
              <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
                {sectors[key].map((item) => (
                  <li key={item.title} className="flex flex-col gap-4 rounded-agria-card border border-agria-border bg-agria-white p-7">
                    <IconBadge name={item.icon} />
                    <h4 className="font-agria-sans text-agria-body font-medium text-agria-graphite">{item.title}</h4>
                    <Text size="sm" muted>
                      {item.text}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
