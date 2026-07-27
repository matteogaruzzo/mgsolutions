'use client';

import { reopenConsentBanner } from '@/lib/consent';

export default function ReopenConsentButton({ className = 'btn-solid mt-4' }) {
  return (
    <button type="button" onClick={reopenConsentBanner} className={className}>
      Gestisci preferenze cookie
    </button>
  );
}
