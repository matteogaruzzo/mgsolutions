'use client';

import { useEffect, useRef, useState } from 'react';

// Anima un valore tipo "20+" o "100%" da 0 al numero finale quando entra in viewport.
export default function CountUp({ value, duration = 1200, className = '' }) {
  const match = String(value).match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const [display, setDisplay] = useState(target === null ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(target);
          }
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
