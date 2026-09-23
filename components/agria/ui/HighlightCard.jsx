import HoverGroup from '../motion/HoverGroup';
import { TINT_GREY } from './GradientSection';
import Eyebrow from './Eyebrow';
import Heading from './Heading';
import Text from './Text';

const SURFACES = {
  dark: {
    card: 'bg-agria-ink',
    glow: 'radial-gradient(55% 80% at 0% 0%, rgb(var(--agria-green-bright) / 0.18), transparent 70%), radial-gradient(50% 70% at 100% 100%, rgb(var(--agria-green) / 0.28), transparent 70%)',
    item: 'border-white/10 bg-white/[0.05]',
  },
  light: {
    card: 'bg-agria-white border border-agria-border',
    glow: 'radial-gradient(60% 90% at 0% 0%, rgb(var(--agria-green) / 0.14), transparent 70%), radial-gradient(50% 80% at 100% 100%, rgb(var(--agria-green-bright) / 0.2), transparent 70%)',
    item: 'border-agria-border bg-agria-white',
  },
};

// Card grande con sfumatura che contiene tre card più piccole: blocco di rottura visiva.
// items: [{ title, text, meta? }] — meta è un'etichetta breve opzionale (es. uno stato).
export default function HighlightCard({ tone = 'dark', eyebrow, title, text, items = [], titleAs = 'h2', className = '' }) {
  const surface = SURFACES[tone] ?? SURFACES.dark;
  const onDark = tone === 'dark';

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[30px] p-6 sm:p-10 md:p-12 ${surface.card} ${className}`}
      style={onDark ? undefined : TINT_GREY}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: surface.glow }} />
      {(eyebrow || title || text) && (
        <div className="flex max-w-2xl flex-col gap-4">
          {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
          {title && (
            <Heading level="h2" as={titleAs} onDark={onDark}>
              {title}
            </Heading>
          )}
          {text && (
            <Text size="lg" muted onDark={onDark}>
              {text}
            </Text>
          )}
        </div>
      )}
      {items.length > 0 && (
        <HoverGroup as="ul" className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className={`flex flex-col gap-3 rounded-2xl border p-6 ${surface.item}`}>
              {item.meta && (
                <span
                  className={`self-start rounded-full px-2.5 py-1 font-agria-mono text-[10.5px] uppercase tracking-[0.1em] ${
                    onDark ? 'border border-agria-green-bright/40 text-agria-green-bright' : 'bg-agria-green/[0.12] text-agria-green-dark'
                  }`}
                >
                  {item.meta}
                </span>
              )}
              <Heading level="h3" as="p" onDark={onDark}>
                {item.title}
              </Heading>
              {item.text && (
                <Text size="md" muted onDark={onDark}>
                  {item.text}
                </Text>
              )}
            </li>
          ))}
        </HoverGroup>
      )}
    </div>
  );
}
