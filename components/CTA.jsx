import Link from 'next/link';

export default function CTA({
  title = 'Parliamo del tuo progetto.',
  sub = 'Prima call conoscitiva gratuita. Ti diciamo con onestà se e come possiamo aiutarti.',
}) {
  return (
    <section className="bg-forest text-paper">
      <div className="max-w-edge mx-auto px-6 py-24 text-center">
        <p className="eyebrow text-brass">MG://prossimo-passo</p>
        <h2 className="display text-4xl md:text-5xl mt-5 max-w-2xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-paper/70 max-w-xl mx-auto">{sub}</p>
        <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper mt-9">
          Prenota una call →
        </Link>
      </div>
    </section>
  );
}
