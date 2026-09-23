'use client';

import { useEffect, useRef, useState } from 'react';

// Apparizione allo scroll (dissolvenza + 16px verso l'alto), come nella concept v3.
// Il contenuto è nascosto solo se JavaScript è attivo e il movimento non è
// ridotto (vedi .agria-reveal in globals.css): senza JS resta sempre visibile.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-shown={shown ? '' : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`agria-reveal ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
