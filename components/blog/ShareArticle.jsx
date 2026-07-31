'use client';

import { useState } from 'react';

const shareIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.9c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21h-4V9Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18.9 3H22l-7.5 8.6L23 21h-6.9l-5.4-6.6L4.4 21H1.3l8-9.2L1 3h7.1l4.9 6.1L18.9 3Zm-1.2 16h1.7L7.4 5H5.6l12.1 14Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M14 21v-8h2.7l.4-3H14V8c0-.9.3-1.5 1.7-1.5H17V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.6v8H14Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
      <path d="M9 15 15 9M10 6.5 11 5.5a3.5 3.5 0 0 1 5 5l-1 1M14 17.5l-1 1a3.5 3.5 0 0 1-5-5l1-1" />
    </svg>
  ),
};

export default function ShareArticle({ title, url }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { key: 'linkedin', label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { key: 'x', label: 'X', href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
    { key: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { key: 'email', label: 'Email', href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}` },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard non disponibile: nessuna azione, il pulsante resta invariato
    }
  };

  return (
    <div className="my-8 p-6 bg-paper-dim border border-line rounded-xl">
      <h3 className="font-semibold text-ink">Condividi questo articolo</h3>
      <p className="mt-1 text-sm text-ink/60">Pensi possa interessare a un collega?</p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {links.map((l) => (
          <a
            key={l.key}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 border border-line rounded-full text-xs font-semibold text-ink/70 hover:border-forest hover:text-forest transition-colors"
          >
            {shareIcons[l.key]}
            {l.label}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-3.5 py-2 border border-line rounded-full text-xs font-semibold text-ink/70 hover:border-forest hover:text-forest transition-colors"
        >
          {shareIcons.link}
          {copied ? 'Link copiato!' : 'Copia link'}
        </button>
      </div>
    </div>
  );
}
