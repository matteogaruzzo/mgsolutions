const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-agria-sans text-agria-sm font-medium px-6 py-3 transition-[color,background-color,border-color,transform,box-shadow] duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

// Anello di focus per variante: green-dark su fondo chiaro, green-bright su fondo scuro.
const VARIANTS = {
  primary: 'bg-agria-green-dark text-agria-white hover:bg-agria-graphite focus-visible:ring-agria-green-dark',
  secondary: 'bg-agria-graphite text-agria-white hover:bg-agria-green-dark focus-visible:ring-agria-green-dark',
  ghost:
    'bg-transparent text-agria-graphite border border-agria-border hover:border-agria-graphite focus-visible:ring-agria-green-dark',
  // solo su superfici scure (agria-ink)
  bright:
    'bg-agria-green-bright text-agria-ink hover:-translate-y-px hover:shadow-[0_8px_26px_rgb(var(--agria-green-bright)/0.28)] motion-reduce:hover:translate-y-0 focus-visible:ring-agria-green-bright focus-visible:ring-offset-agria-ink',
};

export default function Button({
  as,
  href,
  type,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Tag = as || (href ? 'a' : 'button');
  const tagProps = Tag === 'button' ? { type: type || 'button' } : { href };

  return (
    <Tag className={`${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`} {...tagProps} {...props}>
      {children}
    </Tag>
  );
}
