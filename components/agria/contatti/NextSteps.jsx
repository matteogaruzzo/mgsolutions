'use client';

import { useEffect, useState } from 'react';
import { Container, Eyebrow, Heading, Reveal, Section } from '@/components/agria/ui';
import Icon from '@/components/agria/icons/Icon';
import styles from './Contatti.module.css';

const DURATION = 4200; // ms per tappa

// Cosa succede dopo: quattro tappe orizzontali che avanzano da sole. Il tempo
// è un'animazione CSS sulla barra della tappa attiva: alla fine si passa alla
// successiva, in ciclo. Si ferma con il cursore sopra le tappe, con il focus
// dentro la sezione o con il pulsante Pausa (necessario su touch, WCAG 2.2.2).
// Tutti i testi sono sempre visibili: l'avanzamento evidenzia, non nasconde.
// Movimento ridotto: nessun avanzamento, tutte le tappe accese. Senza
// JavaScript: tutte accese, nessun pulsante.
export default function NextSteps({ id, eyebrow, title, steps, pause, play }) {
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotion(!media.matches);
    function onChange() {
      setMotion(!media.matches);
    }
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const paused = hovered || focused || userPaused;

  return (
    <Section
      background="ink"
      aria-labelledby={id}
      className="relative isolate overflow-hidden"
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-20%] top-[-60%] -z-10 h-full"
        style={{ background: 'radial-gradient(50% 60% at 50% 0%, rgb(var(--agria-green-bright) / 0.14), transparent 70%)' }}
      />
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Eyebrow onDark>{eyebrow}</Eyebrow>
            <Heading level="h2" id={id} onDark>
              {title}
            </Heading>
          </div>
          {motion && (
            <button
              type="button"
              onClick={() => setUserPaused((value) => !value)}
              aria-pressed={userPaused}
              className={`${styles.pauseButton} ${styles.jsOnly}`}
            >
              <span className={styles.pauseGlyph} data-paused={userPaused || undefined} aria-hidden="true" />
              {userPaused ? play : pause}
            </button>
          )}
        </Reveal>
        <ol
          className={styles.stages}
          data-motion={motion || undefined}
          data-paused={paused || undefined}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {steps.map((step, index) => {
            const state = !motion ? 'done' : index < active ? 'done' : index === active ? 'active' : 'todo';
            return (
              <li key={step.title} className={styles.stage} data-state={state} aria-current={motion && index === active ? 'step' : undefined}>
                <span className={styles.stageTrack} aria-hidden="true">
                  <span
                    className={styles.stageFill}
                    style={state === 'active' ? { animationDuration: `${DURATION}ms` } : undefined}
                    onAnimationEnd={state === 'active' ? () => setActive((index + 1) % steps.length) : undefined}
                  />
                </span>
                <span className={styles.stageMarker} aria-hidden="true">
                  <Icon name={step.icon} size={18} />
                </span>
                <span className="font-agria-mono text-agria-label text-agria-green-bright">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-agria-sans text-agria-h3 text-agria-on-dark">{step.title}</h3>
                <p className="mt-2 font-agria-sans text-agria-md text-agria-on-dark-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
