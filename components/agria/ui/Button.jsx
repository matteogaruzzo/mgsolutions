const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-agria-sans text-agria-sm font-medium px-6 py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const VARIANTS = {
  primary: 'bg-agria-green-dark text-agria-white hover:bg-agria-graphite',
  secondary: 'bg-agria-graphite text-agria-white hover:bg-agria-green-dark',
  ghost: 'bg-transparent text-agria-graphite border border-agria-border hover:border-agria-graphite',
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
  const tagProps = Tag === 'a' ? { href } : { type: type || 'button' };

  return (
    <Tag className={`${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`} {...tagProps} {...props}>
      {children}
    </Tag>
  );
}
