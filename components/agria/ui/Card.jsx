import Eyebrow from './Eyebrow';
import Heading from './Heading';
import Text from './Text';

export default function Card({ eyebrow, title, children, action, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-agria-card border border-agria-border bg-agria-white p-8 ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <Heading level="h3" as="h3">
          {title}
        </Heading>
      )}
      {children && <Text muted>{children}</Text>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
