'use client';

import { useId } from 'react';

export default function Checkbox({ label, error, id, className = '', ...props }) {
  const autoId = useId();
  const inputId = id || autoId;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={inputId}
        className="flex cursor-pointer items-start gap-3 font-agria-sans text-agria-sm text-agria-graphite"
      >
        <input
          id={inputId}
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={errorId}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-agria-border text-agria-green-dark accent-agria-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2"
          {...props}
        />
        <span>{label}</span>
      </label>
      {error && (
        <p id={errorId} className="pl-7 font-agria-sans text-agria-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
