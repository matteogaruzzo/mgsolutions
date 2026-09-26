'use client';

import Link from 'next/link';
import { useId, useRef, useState } from 'react';
import { Container, Eyebrow, Heading, Reveal, Section, TextLink } from '@/components/agria/ui';
import styles from './ServiceArea.module.css';

// Selettore "Da dove si parte" (indice /servizi): tre pill di obiettivo (pattern
// WAI-ARIA Tabs); a ogni scelta compare l'area consigliata, con la riga di
// motivazione e il link alla pagina. Aiuto alla scelta, non un preventivo.
// Senza JavaScript: pill nascoste, le tre risposte visibili, ognuna con il
// proprio obiettivo come titolo.
export default function GoalSelector({ id, title, goals, areas, linkLabel }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const baseId = useId();

  function onKeyDown(event, index) {
    const next = {
      ArrowRight: (index + 1) % goals.length,
      ArrowDown: (index + 1) % goals.length,
      ArrowLeft: (index - 1 + goals.length) % goals.length,
      ArrowUp: (index - 1 + goals.length) % goals.length,
      Home: 0,
      End: goals.length - 1,
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
          <Heading level="h2" id={id}>
            {title}
          </Heading>
        </Reveal>
        <div className={styles.goalsRoot}>
          <div role="tablist" aria-labelledby={id} className="mt-8 flex flex-wrap gap-2.5 md:mt-10">
            {goals.map((goal, index) => {
              const selected = index === active;
              return (
                <button
                  key={goal.label}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`${styles.goal} rounded-full border px-5 py-3 font-agria-sans text-agria-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 focus-visible:ring-offset-agria-offwhite`}
                >
                  {goal.label}
                </button>
              );
            })}
          </div>
          {goals.map((goal, index) => {
            const area = areas[goal.area];
            return (
              <div
                key={goal.label}
                role="tabpanel"
                id={`${baseId}-panel-${index}`}
                aria-labelledby={`${baseId}-tab-${index}`}
                hidden={index !== active}
                className={`${styles.goalPanel} mt-6 rounded-agria-card border border-agria-border bg-agria-white p-8 md:p-10`}
              >
                <p className={styles.goalLabel}>{goal.label}</p>
                <Eyebrow>{area.eyebrow}</Eyebrow>
                <h3 className="mt-3 font-agria-sans text-[clamp(1.5rem,2.4vw,2rem)] font-light leading-[1.15] tracking-[-0.015em] text-agria-graphite">
                  {area.name}
                </h3>
                <p className="mt-3 max-w-[58ch] font-agria-sans text-agria-body text-agria-grey">{goal.text}</p>
                <TextLink as={Link} href={area.href} aria-label={`${linkLabel}: ${area.name}`} className="mt-6">
                  {linkLabel}
                </TextLink>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
