// il genitore deve avere position: relative (o essere lo stacking context
// dell'hero) perché questo layer si posiziona assoluto dietro al contenuto
export default function HeroBackdrop({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{
        background:
          'radial-gradient(60% 60% at 50% 0%, rgb(var(--agria-green) / 0.09) 0%, rgb(var(--agria-green) / 0) 70%)',
      }}
    />
  );
}
