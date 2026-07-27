'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { site } from '@/lib/data';
import { CONSENT_EVENT, isCategoryAllowed } from '@/lib/consent';

// Calendly invia un postMessage all'iframe genitore quando l'invitato
// completa davvero una prenotazione (evento "calendly.event_scheduled").
// È l'unico modo affidabile di sapere che uno slot è stato confermato senza
// un token API Calendly lato server.
export default function CalendlyEmbed({ height = 700, className = '', prefill, onScheduled }) {
  // Calendly è un servizio di terze parti: il widget/script si carica solo
  // dopo consenso esplicito (categoria "booking"), coerente con la Cookie Policy.
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(isCategoryAllowed('booking'));
    function onChange() {
      setAllowed(isCategoryAllowed('booking'));
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!onScheduled) return undefined;

    function handleMessage(event) {
      if (typeof event.data !== 'object' || !event.data) return;
      if (!String(event.origin).includes('calendly.com')) return;
      if (event.data.event === 'calendly.event_scheduled') {
        onScheduled(event.data.payload);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onScheduled]);

  const params = new URLSearchParams({ hide_event_type_details: '1', hide_gdpr_banner: '1' });
  if (prefill?.name) params.set('name', prefill.name);
  if (prefill?.email) params.set('email', prefill.email);

  if (!allowed) {
    return (
      <div className={`rounded-2xl border border-line bg-paper-dim p-10 text-center ${className}`}>
        <p className="text-sm text-ink/70 max-w-sm mx-auto leading-relaxed">
          Il calendario è fornito da Calendly, un servizio di terze parti. Caricandolo, Calendly potrà
          impostare i propri cookie — vedi la{' '}
          <a href="/cookie-policy" className="underline text-forest hover:text-forest-deep">
            Cookie Policy
          </a>
          .
        </p>
        <button type="button" onClick={() => setAllowed(true)} className="btn-solid mt-5">
          Carica il calendario →
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl overflow-hidden shadow-xl border border-line bg-paper ${className}`}>
      <div
        className="calendly-inline-widget"
        data-url={`${site.calendly}?${params.toString()}`}
        style={{ minWidth: '320px', height: `${height}px` }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
