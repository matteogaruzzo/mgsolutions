'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { Button, Container, Heading, Reveal, Section } from '@/components/agria/ui';
import Icon from '@/components/agria/icons/Icon';
import styles from './ServiceArea.module.css';

// FAQ: sei domande a fisarmonica (pulsante con aria-expanded che controlla la
// risposta), CTA a fianco. Più risposte possono restare aperte. Senza
// JavaScript tutte le risposte sono visibili.
export default function FaqAccordion({ id, title, items, cta }) {
  const [open, setOpen] = useState(() => new Set());
  const baseId = useId();

  function toggle(index) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <Section background="offwhite" aria-labelledby={id}>
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-[clamp(32px,5vw,72px)]">
        <Reveal className="flex flex-col items-start gap-6">
          <Heading level="h2" id={id}>
            {title}
          </Heading>
          <Button as={Link} href={cta.href} variant="secondary">
            {cta.label}
          </Button>
        </Reveal>
        <ul className={`${styles.faqList} border-t border-agria-border`}>
          {items.map((item, index) => {
            const expanded = open.has(index);
            return (
              <li key={item.q} className="border-b border-agria-border">
                <h3>
                  <button
                    type="button"
                    id={`${baseId}-q-${index}`}
                    aria-expanded={expanded}
                    aria-controls={`${baseId}-a-${index}`}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-6 rounded-lg py-5 text-left font-agria-sans text-agria-body font-medium text-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 focus-visible:ring-offset-agria-offwhite"
                  >
                    {item.q}
                    <span className={styles.faqIcon} aria-hidden="true">
                      <Icon name={expanded ? 'minus' : 'plus'} />
                    </span>
                  </button>
                </h3>
                <div id={`${baseId}-a-${index}`} role="region" aria-labelledby={`${baseId}-q-${index}`} hidden={!expanded}>
                  <p className="max-w-[62ch] pb-6 pr-10 font-agria-sans text-agria-md text-agria-grey">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
