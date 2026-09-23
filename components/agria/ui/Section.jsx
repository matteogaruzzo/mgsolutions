const BACKGROUNDS = {
  white: 'bg-agria-white',
  offwhite: 'bg-agria-offwhite',
};

// Spaziatura verticale: "normal" per sezioni piene, "compact" per sezioni con
// poco contenuto. spacingTop / spacingBottom sovrascrivono un solo lato.
const TOP = { normal: 'pt-agria-section', compact: 'pt-agria-section-compact', none: 'pt-0' };
const BOTTOM = { normal: 'pb-agria-section', compact: 'pb-agria-section-compact', none: 'pb-0' };

export default function Section({
  as: Tag = 'section',
  background = 'white',
  spacing = 'normal',
  spacingTop,
  spacingBottom,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`${BACKGROUNDS[background] ?? BACKGROUNDS.white} ${TOP[spacingTop ?? spacing] ?? TOP.normal} ${
        BOTTOM[spacingBottom ?? spacing] ?? BOTTOM.normal
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
