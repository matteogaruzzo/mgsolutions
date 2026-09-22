'use client';

import { useId, useRef, useState } from 'react';

export default function Tabs({ items, defaultIndex = 0, className = '' }) {
  const [active, setActive] = useState(defaultIndex);
  const tabRefs = useRef([]);
  const baseId = useId();

  function onKeyDown(event, index) {
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % items.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + items.length) % items.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = items.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    setActive(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className={className}>
      <div role="tablist" aria-label="Tabs" className="flex gap-2 border-b border-agria-border">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id ?? index}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`-mb-px border-b-2 px-4 py-3 font-agria-sans text-agria-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 ${
                selected
                  ? 'border-agria-green-dark text-agria-graphite'
                  : 'border-transparent text-agria-grey hover:text-agria-graphite'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item, index) => (
        <div
          key={item.id ?? index}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={index !== active}
          tabIndex={0}
          className="pt-6"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
