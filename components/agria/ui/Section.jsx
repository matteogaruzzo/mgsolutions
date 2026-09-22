const BACKGROUNDS = {
  white: 'bg-agria-white',
  offwhite: 'bg-agria-offwhite',
};

export default function Section({
  as: Tag = 'section',
  background = 'white',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`${BACKGROUNDS[background] ?? BACKGROUNDS.white} py-agria-section ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
