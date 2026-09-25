'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Eyebrow, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { composer } from '@/content/agria/home';
import styles from './SystemComposer.module.css';

// Modulo "Componete il vostro sistema". È un vero form GET verso /contatti:
// le scelte arrivano come parametri ripetuti (?moduli=sito&moduli=e-commerce),
// anche senza JavaScript. La tavola in prospettiva segue le caselle via CSS
// (:has), quindi funziona anch'essa senza JavaScript; il contatore e la
// navigazione senza ricaricare la pagina arrivano con JavaScript.
export default function SystemComposer() {
  const router = useRouter();
  const formRef = useRef(null);
  const [count, setCount] = useState(0);

  const checked = () => formRef.current.querySelectorAll('input:checked').length;
  const update = () => setCount(checked());

  // caselle ripristinate dal browser (torna indietro): il contatore si allinea
  useEffect(() => {
    setCount(formRef.current.querySelectorAll('input:checked').length);
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const query = new URLSearchParams(new FormData(event.currentTarget)).toString();
    router.push(query ? `${composer.action}?${query}` : composer.action);
  }

  return (
    <Section background="white" aria-labelledby="home-componi-title">
      <Container className={`${styles.composer} grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-[clamp(32px,5vw,72px)]`}>
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{composer.eyebrow}</Eyebrow>
          <Heading level="h2" id="home-componi-title">
            {composer.title}
          </Heading>
          <Text size="lg" muted>
            {composer.text}
          </Text>

          <form ref={formRef} action={composer.action} method="get" onChange={update} onSubmit={onSubmit} className="mt-4">
            <fieldset aria-labelledby="home-componi-title">
              <ul className="flex flex-wrap gap-2.5">
                {composer.modules.map((module) => (
                  <li key={module.id}>
                    <label className="block cursor-pointer">
                      <input type="checkbox" name={composer.param} value={module.id} className="peer sr-only" />
                      <span className="flex items-center gap-2 rounded-full border border-agria-border bg-agria-white px-4 py-2.5 font-agria-sans text-agria-sm font-medium text-agria-graphite transition-colors duration-200 hover:border-agria-graphite peer-checked:border-agria-green-dark peer-checked:bg-agria-green-dark peer-checked:text-agria-white peer-focus-visible:ring-2 peer-focus-visible:ring-agria-green-dark peer-focus-visible:ring-offset-2 motion-reduce:transition-none">
                        {module.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button type="submit" variant="primary">
                {composer.cta}
              </Button>
              <p aria-live="polite" className={`${styles.count} font-agria-mono text-agria-label uppercase text-agria-grey`}>
                {composer.count(count)}
              </p>
            </div>
            <Text size="sm" muted className="mt-5">
              {composer.caption}
            </Text>
          </form>
        </Reveal>

        {/* tavola: ripete lo stato delle caselle, solo visiva */}
        <div className={styles.stage} aria-hidden="true">
          <div className={styles.plane}>
            {composer.modules.map((module) => (
              <div key={module.id} className={styles.slot} data-module={module.id}>
                <div className={styles.block}>
                  <span className={styles.blockName}>{module.label}</span>
                  <span className={styles.blockArea}>{module.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
