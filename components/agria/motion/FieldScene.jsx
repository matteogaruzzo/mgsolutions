'use client';

import { useEffect, useRef, useState } from 'react';
import {
  BANDS,
  CONTOURS,
  CONTOUR_PATHS,
  ROWS,
  ROW_PATHS,
  SAMPLES,
  VIEW,
  bandRange,
  contourPath,
  rowPath,
  rowX,
  sampleZ,
  toGround,
} from './fieldGeometry';
import styles from './FieldScene.module.css';

const VIEWBOX = `0 0 ${VIEW.width} ${VIEW.height}`;
const CELLS = ROWS * SAMPLES;
const DEPTHS = Float64Array.from({ length: SAMPLES }, (_, j) => sampleZ(j));

// parallasse dell'alone (interactive). Il terreno resta fermo di proposito:
// qualunque trasformazione lo porta su un livello separato, che il browser
// rasterizza per intero a ogni deformazione (misurato: 30 fps invece di 60).
const SMOOTHING_MS = 240; // interpolazione verso il cursore
const GLOW_SHIFT = [-26, -12]; // px, orizzontale e verticale

// pianura malleabile (malleable)
const DENT = 0.2; // profondità massima dell'avvallamento, in unità di altezza (~40-100 px)
const DENT_RX = 0.36; // raggio laterale (~3 filari)
const DENT_RZ = 0.32; // raggio in profondità
const PRESS_MS = 200; // la pressione svanisce poco dopo che il cursore si ferma
const SPRING = 110; // rigidità del ritorno
const DAMPING = 9.4; // smorzamento: un piccolo rimbalzo, poi il terreno torna piano
const REST = 1e-4;

const clamp = (v) => Math.max(-1, Math.min(1, v));

// Scena dei filari: campo lavorato in prospettiva su colline leggere.
// Con cursore fine il terreno si abbassa dove passa il cursore e torna piano
// poco dopo (malleable); con interactive l'alone si sposta in parallasse
// rispetto al terreno. Il terreno è un SVG nell'HTML del server;
// un requestAnimationFrame parte solo durante il movimento e si ferma da solo.
// Touch, movimento ridotto e assenza di JavaScript: scena statica.
// Il genitore deve essere position: relative e overflow: hidden; la scena
// segue il cursore sopra il genitore.
// variant: 'hero' | 'subtle' (più tenue, per fondi con testo sopra).
// lazy: il terreno viene disegnato solo quando la scena si avvicina alla parte
// visibile (per il footer, presente su ogni pagina: l'HTML resta leggero;
// senza JavaScript resta il solo fondo).
export default function FieldScene({
  variant = 'hero',
  interactive = true,
  malleable = true,
  lazy = false,
  className = '',
}) {
  const [ready, setReady] = useState(!lazy);
  const rootRef = useRef(null);
  const glowRef = useRef(null);
  const groundRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (ready) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setReady(true);
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [ready]);

  useEffect(() => {
    if (!ready) return undefined;
    const root = rootRef.current;
    const host = root.parentElement;
    const rowEls = svgRef.current.querySelectorAll(`.${styles.rows} path`);
    const contourEls = svgRef.current.querySelectorAll(`.${styles.contours} path`);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const disp = new Float32Array(CELLS); // avvallamento (negativo = giù)
    const vel = new Float32Array(CELLS);
    const press = new Float32Array(CELLS); // pressione del cursore, 0-1
    // ultimo tracciato scritto nel DOM: si riscrive solo se cambia al pixel,
    // così il browser ridisegna soltanto i filari che si muovono davvero
    const rowD = [...ROW_PATHS];
    const contourD = [...CONTOUR_PATHS];
    let pointer = null; // ultimo punto del cursore sul terreno, consumato dal frame
    let raf = 0;
    let last = 0;
    let visible = false;
    let parallaxAtRest = true;

    function drawParallax() {
      const [dx, dy] = GLOW_SHIFT;
      glowRef.current.style.transform = `translate3d(${(current.x * dx).toFixed(2)}px, ${(current.y * dy).toFixed(
        2,
      )}px, 0)`;
    }

    // coordinate del cursore → punto sul terreno (viewBox in "xMidYMin slice")
    function groundPoint(clientX, clientY) {
      const r = groundRef.current.getBoundingClientRect();
      const scale = Math.max(r.width / VIEW.width, r.height / VIEW.height);
      const offsetX = (r.width - VIEW.width * scale) / 2;
      return toGround((clientX - r.left - offsetX) / scale, (clientY - r.top) / scale);
    }

    function stamp(p) {
      for (let i = 0; i < ROWS; i++) {
        const dx = (rowX(i) - p.x) / DENT_RX;
        if (dx * dx > 6) continue;
        for (let j = 0; j < SAMPLES; j++) {
          const dz = (DEPTHS[j] - p.z) / DENT_RZ;
          const g = Math.exp(-(dx * dx + dz * dz));
          const k = i * SAMPLES + j;
          if (g > 0.01 && g > press[k]) press[k] = g;
        }
      }
    }

    // molla smorzata verso -DENT × pressione; true finché qualcosa si muove
    function step(dt) {
      const fade = Math.exp((-dt * 1000) / PRESS_MS);
      let active = false;
      for (let k = 0; k < CELLS; k++) {
        let p = press[k];
        if (p) {
          p *= fade;
          press[k] = p = p < 1e-3 ? 0 : p;
        }
        const d = disp[k];
        const v = vel[k];
        if (!p && !d && !v) continue;
        const nv = v + (SPRING * (-DENT * p - d) - DAMPING * v) * dt;
        const nd = d + nv * dt;
        if (!p && Math.abs(nd) < REST && Math.abs(nv) < REST * 10) {
          disp[k] = 0;
          vel[k] = 0;
        } else {
          disp[k] = nd;
          vel[k] = nv;
          active = true;
        }
      }
      return active;
    }

    function drawDeform() {
      for (let i = 0; i < ROWS; i++) {
        for (let b = 0; b < BANDS; b++) {
          const [j0, j1] = bandRange(b);
          // il tratto si muove se è deformato lui o un filare vicino (spostamento laterale)
          let live = false;
          for (let r = Math.max(0, i - 1); r <= Math.min(ROWS - 1, i + 1) && !live; r++) {
            for (let k = r * SAMPLES + j0, end = r * SAMPLES + j1; k <= end && !live; k++) live = disp[k] !== 0;
          }
          const n = i * BANDS + b;
          const d = live ? rowPath(i, b, disp) : ROW_PATHS[n];
          if (d !== rowD[n]) {
            rowEls[n].setAttribute('d', d);
            rowD[n] = d;
          }
        }
      }
      for (let c = 0; c < CONTOURS; c++) {
        const d = contourPath(c, disp);
        if (d !== contourD[c]) {
          contourEls[c].setAttribute('d', d);
          contourD[c] = d;
        }
      }
    }

    function frame(now) {
      const dt = last ? Math.min(now - last, 50) / 1000 : 1 / 60;
      last = now;
      let busy = false;
      if (interactive) {
        const k = 1 - Math.exp((-dt * 1000) / SMOOTHING_MS);
        current.x += (target.x - current.x) * k;
        current.y += (target.y - current.y) * k;
        const settled = !target.x && !target.y && Math.abs(current.x) < 0.001 && Math.abs(current.y) < 0.001;
        if (!(settled && parallaxAtRest)) {
          if (settled) current.x = current.y = 0;
          drawParallax();
          parallaxAtRest = settled;
        }
        busy = !settled;
      }
      if (malleable) {
        if (pointer) {
          stamp(pointer);
          pointer = null;
        }
        // due sottopassi: ritorno stabile anche con frame lunghi
        const moving = step(dt / 2) | step(dt / 2);
        drawDeform();
        busy = busy || Boolean(moving);
      }
      raf = busy ? requestAnimationFrame(frame) : 0;
      if (!raf) last = 0;
    }

    function wake() {
      if (raf || !visible || reduce.matches) return;
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    }

    function onReduceChange() {
      if (!reduce.matches) return;
      // torna allo stato statico
      stop();
      disp.fill(0);
      vel.fill(0);
      press.fill(0);
      pointer = null;
      if (malleable) drawDeform();
      if (interactive) {
        target.x = target.y = current.x = current.y = 0;
        drawParallax();
        parallaxAtRest = true;
      }
    }

    function onPointerMove(event) {
      if (event.pointerType === 'touch' || !finePointer.matches || reduce.matches) return;
      if (interactive) {
        const r = host.getBoundingClientRect();
        target.x = clamp(((event.clientX - r.left) / r.width) * 2 - 1);
        target.y = clamp(((event.clientY - r.top) / r.height) * 2 - 1);
      }
      if (malleable) pointer = groundPoint(event.clientX, event.clientY);
      wake();
    }

    function onPointerLeave() {
      target.x = 0;
      target.y = 0;
      wake();
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else stop();
    });
    observer.observe(root);
    reduce.addEventListener('change', onReduceChange);
    const listening = (interactive || malleable) && host;
    if (listening) {
      host.addEventListener('pointermove', onPointerMove, { passive: true });
      host.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      stop();
      observer.disconnect();
      reduce.removeEventListener('change', onReduceChange);
      if (listening) {
        host.removeEventListener('pointermove', onPointerMove);
        host.removeEventListener('pointerleave', onPointerLeave);
      }
    };
  }, [ready, interactive, malleable]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`${styles.scene} ${variant === 'subtle' ? styles.subtle : ''} ${className}`}
    >
      <div ref={glowRef} className={styles.glow} />
      <div ref={groundRef} className={styles.ground}>
        <svg
          ref={svgRef}
          className={styles.layer}
          viewBox={VIEWBOX}
          preserveAspectRatio="xMidYMin slice"
          focusable="false"
        >
          {ready && (
            <>
              <g className={styles.contours}>
                {CONTOUR_PATHS.map((d, c) => (
                  <path key={c} d={d} />
                ))}
              </g>
              <g className={styles.rows}>
                {ROW_PATHS.map((d, n) => (
                  <path key={n} d={d} />
                ))}
              </g>
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
