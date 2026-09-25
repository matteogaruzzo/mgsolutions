import Icon from '@/components/agria/icons/Icon';

// Icona del set dentro un riquadro arrotondato. tone: 'light' (fondi chiari) | 'dark' (fondi ink).
export default function IconBadge({ name, tone = 'light' }) {
  const colors =
    tone === 'dark'
      ? 'border-white/15 bg-white/[0.04] text-agria-green-bright'
      : 'border-agria-border bg-agria-offwhite text-agria-green-dark';
  return (
    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${colors}`}>
      <Icon name={name} />
    </span>
  );
}
