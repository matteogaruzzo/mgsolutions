'use client';

import { useEffect, useRef, useState } from 'react';
import { FocusOverlay } from '@/components/agria/motion';

const DEMO_ITEMS = ['Prima voce', 'Seconda voce', 'Terza voce'];

// Demo del velo in un riquadro (scope="container"): barra scura e pannello
// restano sopra il velo, il finto contenuto sotto si oscura.
export default function FocusOverlayDemo() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="relative isolate h-[280px] overflow-hidden rounded-agria-card border border-agria-border bg-agria-white">
      <div className="relative z-50 flex items-center gap-4 bg-agria-ink px-5 py-3">
        <span className="font-agria-sans text-agria-sm font-medium text-agria-on-dark">Barra</span>
        <div className="relative">
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls="agria-focus-overlay-demo-panel"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full px-3 py-1.5 font-agria-sans text-agria-sm text-agria-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-agria-ink"
          >
            {open ? 'Chiudi pannello' : 'Apri pannello'}
          </button>
          {open && (
            <ul
              id="agria-focus-overlay-demo-panel"
              className="absolute left-0 top-full mt-3 w-[220px] rounded-2xl border border-white/10 bg-agria-ink p-2 shadow-[0_24px_58px_rgb(0_0_0/0.45)]"
            >
              {DEMO_ITEMS.map((item) => (
                <li key={item} className="rounded-xl px-4 py-2.5 font-agria-sans text-agria-sm text-agria-on-dark">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <FocusOverlay open={open} onClose={() => setOpen(false)} scope="container" />

      <div className="flex flex-col gap-2 p-5 font-agria-sans text-agria-sm text-agria-grey">
        <p>Contenuto della pagina. Con il pannello aperto si oscura leggermente.</p>
        <p>Un clic qui sopra chiude il pannello; anche Esc lo chiude e riporta il focus sul pulsante.</p>
      </div>
    </div>
  );
}
