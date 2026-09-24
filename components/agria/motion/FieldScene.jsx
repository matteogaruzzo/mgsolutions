'use client';

import { useEffect, useId, useRef } from 'react';
import { CONTOUR_PATHS, NODES, ROW_PATHS, VIEW, nodeAt } from './fieldGeometry';
import styles from './FieldScene.module.css';

const VIEWBOX = `0 0 ${VIEW.width} ${VIEW.height}`;
const GLOW = 2.6; // raggio dell'alone rispetto al nucleo del nodo
const SMOOTHING_MS = 240; // interpolazione del parallasse verso il cursore
// spostamento massimo per livello (px, orizzontale e verticale) e inclinazione (gradi)
const PARALLAX = { ground: [12, 6], nodes: [22, 11], glow: [-26, -12] };
const TILT = { x: 2, y: 3 };
const SUBTLE_NODES = 6;

const clamp = (v) => Math.max(-1, Math.min(1, v));

// Scena dei filari: terreno ondulato in prospettiva, nodi luminosi che scorrono
// lungo i filari e, con cursore fine, leggera inclinazione con parallasse tra
// terreno, nodi e alone. Il terreno è un SVG statico (nell'HTML del server);
// un solo requestAnimationFrame muove nodi e livelli, fermo quando la scena
// non è visibile. Movimento ridotto: scena statica. Senza JavaScript: statica.
// Il genitore deve essere position: relative e overflow: hidden; il parallasse
// segue il cursore sopra il genitore.
// variant: 'hero' | 'subtle' (più tenue, meno nodi; per il footer).
export default function FieldScene({ variant = 'hero', interactive = true, className = '' }) {
  const rootRef = useRef(null);
  const glowRef = useRef(null);
  const tiltRef = useRef(null);
  const groundRef = useRef(null);
  const nodesRef = useRef(null);
  const gradientId = `agria-field-${useId().replace(/:/g, '')}`;
  const nodeCount = variant === 'subtle' ? SUBTLE_NODES : NODES.length;
  const nodes = NODES.slice(0, nodeCount);

  useEffect(() => {
    const root = rootRef.current;
    const host = root.parentElement;
    const circles = nodesRef.current.querySelectorAll('circle');
    const moving = NODES.slice(0, nodeCount);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;
    let elapsed = 0;
    let visible = false;
    let atRest = true; // parallasse fermo al centro: nessuna scrittura sui livelli

    function drawNodes() {
      moving.forEach((node, i) => {
        const n = nodeAt(node, elapsed);
        circles[i].setAttribute('cx', n.x);
        circles[i].setAttribute('cy', n.y);
        circles[i].setAttribute('r', n.r * GLOW);
        circles[i].setAttribute('opacity', n.opacity);
      });
    }

    function shift(el, [dx, dy]) {
      el.style.transform = `translate3d(${(current.x * dx).toFixed(2)}px, ${(current.y * dy).toFixed(2)}px, 0)`;
    }

    function drawParallax() {
      tiltRef.current.style.transform = `rotateX(${(-current.y * TILT.x).toFixed(3)}deg) rotateY(${(
        current.x * TILT.y
      ).toFixed(3)}deg)`;
      shift(groundRef.current, PARALLAX.ground);
      shift(nodesRef.current, PARALLAX.nodes);
      shift(glowRef.current, PARALLAX.glow);
    }

    function frame(now) {
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;
      elapsed += dt / 1000;
      drawNodes();
      if (interactive) {
        const k = 1 - Math.exp(-dt / SMOOTHING_MS);
        current.x += (target.x - current.x) * k;
        current.y += (target.y - current.y) * k;
        const settled = !target.x && !target.y && Math.abs(current.x) < 0.001 && Math.abs(current.y) < 0.001;
        if (!(settled && atRest)) {
          if (settled) current.x = current.y = 0;
          drawParallax();
          atRest = settled;
        }
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf || !visible || reduce.matches) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    function onReduceChange() {
      if (!reduce.matches) {
        start();
        return;
      }
      // torna allo stato statico iniziale
      stop();
      elapsed = 0;
      target.x = target.y = current.x = current.y = 0;
      atRest = true;
      drawNodes();
      drawParallax();
    }

    function onPointerMove(event) {
      if (event.pointerType === 'touch' || !finePointer.matches) return;
      const rect = host.getBoundingClientRect();
      target.x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1);
      target.y = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1);
    }

    function onPointerLeave() {
      target.x = 0;
      target.y = 0;
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    observer.observe(root);
    reduce.addEventListener('change', onReduceChange);
    if (interactive && host) {
      host.addEventListener('pointermove', onPointerMove, { passive: true });
      host.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      stop();
      observer.disconnect();
      reduce.removeEventListener('change', onReduceChange);
      if (interactive && host) {
        host.removeEventListener('pointermove', onPointerMove);
        host.removeEventListener('pointerleave', onPointerLeave);
      }
    };
  }, [interactive, nodeCount]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`${styles.scene} ${variant === 'subtle' ? styles.subtle : ''} ${className}`}
    >
      <div ref={glowRef} className={styles.glow} />
      <div className={styles.ground}>
        <div ref={tiltRef} className={styles.tilt}>
          <svg
            ref={groundRef}
            className={styles.layer}
            viewBox={VIEWBOX}
            preserveAspectRatio="xMidYMin slice"
            focusable="false"
          >
            <g className={styles.contours}>
              {CONTOUR_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
            <g className={styles.rows}>
              {ROW_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
          </svg>
          <svg
            ref={nodesRef}
            className={`${styles.layer} ${styles.nodes}`}
            viewBox={VIEWBOX}
            preserveAspectRatio="xMidYMin slice"
            focusable="false"
          >
            <defs>
              <radialGradient id={gradientId}>
                <stop offset="0" stopColor="#fff" />
                <stop offset="0.3" className={styles.nodeCore} />
                <stop offset="1" className={styles.nodeEdge} />
              </radialGradient>
            </defs>
            {nodes.map((node) => {
              const n = nodeAt(node, 0);
              return (
                <circle
                  key={`${node.row}-${node.phase}`}
                  cx={n.x}
                  cy={n.y}
                  r={n.r * GLOW}
                  opacity={n.opacity}
                  fill={`url(#${gradientId})`}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
