import Link from 'next/link';

// Il marchio esiste solo come raster con fondo trasparente: lo usiamo come
// maschera CSS, così prende il colore del testo (bianco su scuro, grafite su chiaro).
// Dimensione e posizione compensano il margine interno del file sorgente.
const MARK_STYLE = {
  WebkitMaskImage: 'url(/images/brand/agria-logo-black-centered.svg)',
  maskImage: 'url(/images/brand/agria-logo-black-centered.svg)',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: '120%',
  maskSize: '120%',
  WebkitMaskPosition: '56% 89%',
  maskPosition: '56% 89%',
};

const TONES = {
  dark: { root: 'text-agria-on-dark', light: 'text-agria-on-dark-muted', ring: 'focus-visible:ring-agria-green-bright focus-visible:ring-offset-agria-ink' },
  light: { root: 'text-agria-graphite', light: 'text-agria-grey', ring: 'focus-visible:ring-agria-green-dark focus-visible:ring-offset-agria-white' },
};

export default function BrandLockup({ tone = 'dark', wordmarkClassName = '', className = '', ...props }) {
  const t = TONES[tone] ?? TONES.dark;

  return (
    <Link
      href="/"
      aria-label="Agria System, home"
      className={`inline-flex shrink-0 items-center gap-2.5 rounded-lg font-agria-sans text-[19.5px] tracking-[-0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ${t.root} ${t.ring} ${className}`}
      {...props}
    >
      <span aria-hidden="true" className="block h-[26px] w-[26px] bg-current" style={MARK_STYLE} />
      <span aria-hidden="true" className={`leading-none ${wordmarkClassName}`}>
        <span className="font-medium">Agria</span> <span className={`font-light ${t.light}`}>System</span>
      </span>
    </Link>
  );
}
