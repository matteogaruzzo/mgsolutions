const LEVELS = {
  display: 'text-agria-display font-agria-sans font-light',
  h1: 'text-agria-h1 font-agria-sans font-light',
  h2: 'text-agria-h2 font-agria-sans font-normal',
  h3: 'text-agria-h3 font-agria-sans font-medium',
};

// livello (stile) e tag HTML (semantica) sono scelte indipendenti:
// un "display" può essere reso come <h1>, <h2>... a seconda del contesto
const DEFAULT_TAG = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
};

export default function Heading({ level = 'h2', as, children, className = '', ...props }) {
  const Tag = as || DEFAULT_TAG[level] || 'h2';
  return (
    <Tag className={`${LEVELS[level] ?? LEVELS.h2} text-agria-graphite ${className}`} {...props}>
      {children}
    </Tag>
  );
}
