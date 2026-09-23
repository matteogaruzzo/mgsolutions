'use client';

import Link from 'next/link';
import { useRef } from 'react';

export default function HeaderPanel({ panel, isOpen, onOpen, onClose, onToggle, active }) {
  const triggerRef = useRef(null);
  const panelId = `agria-panel-${panel.key}`;

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      onClose();
      triggerRef.current?.focus();
      return;
    }
    if (event.key === 'ArrowDown' && document.activeElement === triggerRef.current) {
      event.preventDefault();
      onOpen();
      requestAnimationFrame(() => {
        document.getElementById(panelId)?.querySelector('a')?.focus();
      });
    }
  }

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex items-center gap-1 rounded-full px-3 py-2 font-agria-sans text-agria-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 ${
          active ? 'font-medium text-agria-graphite' : 'text-agria-grey hover:text-agria-graphite'
        }`}
      >
        {panel.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-150 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="group"
          aria-label={panel.label}
          className="absolute left-1/2 top-full z-10 mt-3 w-[320px] -translate-x-1/2 rounded-2xl border border-agria-border bg-agria-white p-2 shadow-lg"
        >
          {panel.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-agria-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-inset"
            >
              <span className="block font-agria-sans text-agria-sm font-medium text-agria-graphite">
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
}
