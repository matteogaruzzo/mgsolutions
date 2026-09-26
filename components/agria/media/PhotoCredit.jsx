// Attribuzione visibile delle foto Unsplash (API Guidelines): fotografo e
// Unsplash, entrambi con link e parametri utm.
const LINK =
  'underline decoration-agria-border underline-offset-2 transition-colors hover:text-agria-graphite focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark';

export default function PhotoCredit({ credit, className = '' }) {
  if (!credit) return null;
  return (
    <p className={`font-agria-sans text-[12px] text-agria-grey ${className}`}>
      Foto di{' '}
      <a href={credit.profileUrl} className={LINK} target="_blank" rel="noopener noreferrer">
        {credit.name}
      </a>{' '}
      su{' '}
      <a href={credit.unsplashUrl} className={LINK} target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
    </p>
  );
}
