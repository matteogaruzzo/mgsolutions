'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { NAV_PANELS, NAV_DIRECT, CTA } from './nav-data';

const FOCUSABLE = 'a[href], button:not([disabled])';

export default function MobileMenu({ id, open, onClose, isActive }) {
  const [expanded, setExpanded] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setExpanded(null);
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const firstFocusable = containerRef.current?.querySelector(FOCUSABLE);
    firstFocusable?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !containerRef.current) return;
      const focusable = Array.from(containerRef.current.querySelectorAll(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-agria-white pt-24 md:hidden"
    >
      <div className="flex flex-1 flex-col px-6 pb-10">
        <nav className="flex flex-col" aria-label="Navigazione mobile">
          {NAV_PANELS.map((panel) => {
            const panelActive = panel.items.some((item) => isActive(item.href));
            return (
              <div key={panel.key} className="border-b border-agria-border">
                <button
                  type="button"
                  aria-expanded={expanded === panel.key}
                  aria-controls={`${id}-${panel.key}`}
                  onClick={() => setExpanded((v) => (v === panel.key ? null : panel.key))}
                  className={`flex w-full items-center justify-between py-4 font-agria-sans text-agria-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark ${
                    panelActive ? 'font-medium text-agria-graphite' : 'text-agria-graphite'
                  }`}
                >
                  {panel.label}
                  <span
                    aria-hidden="true"
                    className={`text-agria-grey transition-transform duration-150 motion-reduce:transition-none ${
                      expanded === panel.key ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {expanded === panel.key && (
                  <div id={`${id}-${panel.key}`} className="flex flex-col gap-1 pb-4">
                    {panel.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className="rounded-xl px-3 py-3 hover:bg-agria-offwhite"
                      >
                        <span className="block font-agria-sans text-agria-body font-medium text-agria-graphite">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block font-agria-sans text-agria-sm text-agria-grey">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {NAV_DIRECT.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`border-b border-agria-border py-5 font-agria-sans text-agria-lg ${
                isActive(item.href) ? 'font-medium text-agria-graphite' : 'text-agria-graphite'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={CTA.href}
          onClick={onClose}
          className="mt-8 flex items-center justify-center rounded-full bg-agria-green-dark px-6 py-3.5 font-agria-sans text-agria-sm font-medium text-agria-white transition-colors hover:bg-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2"
        >
          {CTA.label}
        </Link>
      </div>
    </div>
  );
}
