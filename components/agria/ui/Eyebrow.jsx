// su superfici scure l'etichetta usa green-bright (green-dark non raggiunge 4.5:1)
export default function Eyebrow({ as: Tag = 'p', onDark = false, children, className = '' }) {
  return (
    <Tag className={`font-agria-mono text-agria-label uppercase ${onDark ? 'text-agria-green-bright' : 'text-agria-green-dark'} ${className}`}>
      {children}
    </Tag>
  );
}
