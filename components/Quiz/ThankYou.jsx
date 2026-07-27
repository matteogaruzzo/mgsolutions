import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="max-w-xl mx-auto text-center py-10">
      <h2 className="h2 text-2xl md:text-3xl text-ink">Fatto. Ti scriviamo presto.</h2>
      <p className="mt-4 text-ink/70 leading-relaxed">
        Abbiamo ricevuto le tue risposte. Ti contattiamo entro 24 ore per confermare la proposta
        insieme e capire i prossimi passi.
      </p>
      <Link href="/prenota-call" className="btn-solid mt-8 inline-flex">
        Preferisci prenotare subito una call? →
      </Link>
    </div>
  );
}
