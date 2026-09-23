import Eyebrow from './Eyebrow';
import Heading from './Heading';
import Text from './Text';

const INTERACTIVE =
  'transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[3px] hover:border-agria-green/45 hover:shadow-[0_18px_42px_rgb(var(--agria-graphite)/0.07)] motion-reduce:transition-none motion-reduce:hover:translate-y-0';

// interactive: sollevamento e bordo verde su hover, per card che portano a una pagina
export default function Card({ eyebrow, title, children, action, textSize = 'body', interactive = false, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-agria-card border border-agria-border bg-agria-white p-8 ${
        interactive ? INTERACTIVE : ''
      } ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <Heading level="h3" as="h3">
          {title}
        </Heading>
      )}
      {children && (
        <Text muted size={textSize}>
          {children}
        </Text>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
