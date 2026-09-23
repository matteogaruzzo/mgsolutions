const SIZES = {
  lg: 'text-agria-lg',
  body: 'text-agria-body',
  md: 'text-agria-md',
  sm: 'text-agria-sm',
};

const COLORS = {
  light: { base: 'text-agria-graphite', muted: 'text-agria-grey' },
  dark: { base: 'text-agria-on-dark', muted: 'text-agria-on-dark-muted' },
};

export default function Text({
  as: Tag = 'p',
  size = 'body',
  muted = false,
  onDark = false,
  measure = true,
  children,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`font-agria-sans ${SIZES[size] ?? SIZES.body} ${COLORS[onDark ? 'dark' : 'light'][muted ? 'muted' : 'base']} ${
        measure ? 'max-w-prose' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
