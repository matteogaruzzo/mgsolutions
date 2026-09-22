export default function Eyebrow({ as: Tag = 'p', children, className = '' }) {
  return (
    <Tag className={`font-agria-mono text-agria-label uppercase text-agria-green-dark ${className}`}>
      {children}
    </Tag>
  );
}
