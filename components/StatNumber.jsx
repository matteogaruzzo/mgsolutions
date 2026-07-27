'use client';

import { useEffect, useRef, useState } from 'react';

// Anima solo valori numerici semplici (es. "+40%", "200", "85%").
// Valori con testo extra (es. "€5.000/mese", "Top 5%") restano statici.
export default function StatNumber({ value, className = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^([+-]?)(\d+)(%?)$/);
    const el = ref.current;
    if (!match || !el) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    let done = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return;
        done = true;
        const duration = 900;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
