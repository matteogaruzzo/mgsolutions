import Link from 'next/link';

function siteAnalysisSummary(siteAnalysis) {
  if (!siteAnalysis?.success) return null;
  const bits = [];
  if (siteAnalysis.platform) bits.push(`sembra costruito su ${siteAnalysis.platform}`);
  bits.push(siteAnalysis.hasEcommerce ? 'con un e-commerce attivo' : 'senza e-commerce attivo');
  if (siteAnalysis.hasBooking) bits.push('con un sistema di prenotazione');
  return `Abbiamo dato un'occhiata al tuo sito: ${bits.join(', ')}.`;
}

export default function ProposalReview({ recommendation, siteAnalysis, onBack, onNext }) {
  const { core, recommended, optional } = recommendation;
  const summary = siteAnalysisSummary(siteAnalysis);

  const groups = [
    { label: 'Priorità', items: core },
    { label: 'Consigliati', items: recommended },
    { label: 'Da valutare insieme', items: optional },
  ].filter((g) => g.items.length > 0);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="h2 text-2xl md:text-3xl text-ink">La tua proposta preliminare.</h2>
      <p className="mt-3 text-sm text-ink/60 leading-relaxed">
        In base a quello che ci hai raccontato, ecco cosa ha più senso valutare per la tua attività.
        È un punto di partenza: lo confermiamo insieme in call, senza impegno.
      </p>
      {summary && <p className="mt-3 text-sm text-forest font-semibold">{summary}</p>}

      <div className="mt-8 space-y-8">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">{g.label}</p>
            <div className="mt-3 space-y-3">
              {g.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  className="block border border-line rounded-xl px-5 py-4 hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-ink text-sm">{item.name}</p>
                  <p className="mt-1 text-xs text-ink/60">{item.benefit}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {groups.length === 0 && (
        <p className="mt-8 text-sm text-ink/60">
          Dalle tue risposte non siamo riusciti a generare suggerimenti specifici: nessun problema,
          ne parliamo direttamente in call.
        </p>
      )}

      <p className="mt-8 text-xs italic text-ink/45">
        Proposta preliminare generata dalle tue risposte, non un preventivo: i dettagli e i costi si
        definiscono in call.
      </p>

      <div className="mt-8 flex items-center justify-between">
        <button type="button" onClick={onBack} className="text-sm text-ink/50 hover:text-ink">
          ← Indietro
        </button>
        <button type="button" onClick={onNext} className="btn-solid">
          Prenota una call per ricevere la proposta →
        </button>
      </div>
    </div>
  );
}
