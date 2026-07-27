import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="max-w-edge mx-auto px-6 min-h-[70vh] flex flex-col justify-center">
      <p className="eyebrow">Errore 404</p>
      <h1 className="display text-6xl md:text-7xl mt-4">Pagina non trovata.</h1>
      <p className="mt-4 text-ink/70 max-w-md">
        Il link che hai seguito non porta da nessuna parte. Torniamo su qualcosa di utile.
      </p>
      <Link href="/" className="btn-solid mt-8 self-start">
        Torna alla home →
      </Link>
    </section>
  );
}
