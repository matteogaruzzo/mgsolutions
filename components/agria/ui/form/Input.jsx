'use client';

import { useId } from 'react';
import Field from './Field';

export default function Input({ label, error, id, className = '', ...props }) {
  const autoId = useId();
  const inputId = id || autoId;

  return (
    <Field label={label} htmlFor={inputId} error={error} className={className}>
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full rounded-xl border bg-agria-white px-4 py-3 font-agria-sans text-agria-body text-agria-graphite placeholder:text-agria-grey transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 ${
          error ? 'border-red-500' : 'border-agria-border'
        }`}
        {...props}
      />
    </Field>
  );
}
