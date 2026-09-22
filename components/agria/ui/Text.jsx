const SIZES = {
  lg: 'text-agria-lg',
  body: 'text-agria-body',
  sm: 'text-agria-sm',
};

export default function Text({
  as: Tag = 'p',
  size = 'body',
  muted = false,
  children,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`font-agria-sans ${SIZES[size] ?? SIZES.body} ${
        muted ? 'text-agria-grey' : 'text-agria-graphite'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
