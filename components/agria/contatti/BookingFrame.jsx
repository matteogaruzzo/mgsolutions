'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/agria/ui';
import { CONSENT_EVENT, isCategoryAllowed, saveConsent, getConsent } from '@/lib/consent';
import styles from './Contatti.module.css';

// Calendario di prenotazione in un riquadro. È un servizio esterno che imposta
// i propri cookie: si carica solo con il consenso della categoria "booking"
// (lo stesso del calendario legacy), altrimenti un pulsante lo attiva e
// registra la scelta. Nessuno script esterno: solo un iframe con ?embed=true.
// Il collegamento diretto resta sempre disponibile sotto il riquadro.
export default function BookingFrame({ url, title, consent, direct }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(isCategoryAllowed('booking'));
    function onChange() {
      setAllowed(isCategoryAllowed('booking'));
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  function accept() {
    const current = getConsent()?.categories || {};
    saveConsent({ ...current, booking: true });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className={styles.bookingFrame}>
        {allowed ? (
          <iframe src={`${url}?embed=true`} title={title} className={styles.bookingIframe} loading="lazy" />
        ) : (
          <div className={styles.bookingConsent}>
            <p className="max-w-[48ch] font-agria-sans text-agria-md text-agria-grey">
              {consent.text}{' '}
              <Link href="/cookie-policy" className="text-agria-green-dark underline underline-offset-4">
                {consent.policy}
              </Link>
            </p>
            <Button variant="primary" onClick={accept}>
              {consent.button}
            </Button>
          </div>
        )}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start rounded font-agria-sans text-agria-sm font-medium text-agria-green-dark underline underline-offset-4 hover:text-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2"
      >
        {direct}
      </a>
    </div>
  );
}
