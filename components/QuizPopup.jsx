'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import QuizFlow from '@/components/Quiz/QuizFlow';

// localStorage (non sessionStorage): deve ricordare per giorni reali, anche
// se l'utente chiude la scheda o il browser, non solo per la sessione corrente.
const LAST_SHOWN_KEY = 'mg_quiz_popup_last_shown';
const COOLDOWN_DAYS = 3;
const COOLDOWN_MS = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
const DELAY_MS = 5000;
const QUIZ_STATE_KEYS = ['mg_quiz_state_v3', 'mg_quiz_state_v2', 'mg_quiz_state_v1'];

export default function QuizPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [instanceKey, setInstanceKey] = useState(0);

  useEffect(() => {
    if (pathname === '/quiz') return undefined;

    let lastShown = 0;
    try {
      lastShown = parseInt(localStorage.getItem(LAST_SHOWN_KEY) || '0', 10) || 0;
    } catch {
      // localStorage non disponibile: mostriamo comunque il popup.
    }
    const dueAgain = Date.now() - lastShown > COOLDOWN_MS;
    if (!dueAgain) return undefined;

    const timer = setTimeout(() => {
      try {
        localStorage.setItem(LAST_SHOWN_KEY, Date.now().toString());
        // Ogni apertura parte da zero: rimuove eventuali risposte di una
        // sessione precedente rimaste nel browser.
        QUIZ_STATE_KEYS.forEach((k) => localStorage.removeItem(k));
      } catch {
        // ignora
      }
      setInstanceKey((k) => k + 1);
      setVisible(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  function close() {
    setVisible(false);
  }

  if (!visible || pathname === '/quiz') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
      <div className="relative bg-paper rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-10 pt-14">
        <button
          type="button"
          onClick={close}
          aria-label="Chiudi"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink/50 hover:text-ink hover:border-ink/30 transition-colors bg-paper"
        >
          ✕
        </button>
        <Suspense fallback={null}>
          <QuizFlow key={instanceKey} />
        </Suspense>
      </div>
    </div>
  );
}
