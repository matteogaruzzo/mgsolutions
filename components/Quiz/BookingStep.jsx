import CalendlyEmbed from '@/components/CalendlyEmbed';
import { site } from '@/lib/data';

export default function BookingStep({ contact, onScheduled, saving, error, onBack }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="h2 text-2xl md:text-3xl text-ink">Scegli il tuo orario.</h2>
      <p className="mt-3 text-sm text-ink/60 leading-relaxed">
        Ti mandiamo la proposta via email solo dopo che confermi uno slot qui sotto: così sappiamo
        che vuoi davvero parlarne, non riceverai proposte se cambi idea a metà.
      </p>
      <div className="mt-8">
        <CalendlyEmbed prefill={{ name: contact.nome, email: contact.email }} onScheduled={onScheduled} />
      </div>
      {saving && (
        <p className="mt-4 text-sm text-forest">Prenotazione confermata: stiamo salvando la tua proposta...</p>
      )}
      {error && (
        <p className="mt-4 text-sm text-red-600">
          La tua call su Calendly è comunque confermata. Abbiamo avuto un problema nel salvare la
          proposta collegata: scrivici a{' '}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{' '}
          citando l’orario prenotato, così recuperiamo tutto prima della call.
        </p>
      )}
      {onBack && !saving && (
        <button type="button" onClick={onBack} className="mt-6 text-sm text-ink/50 hover:text-ink">
          ← Indietro
        </button>
      )}
    </div>
  );
}
