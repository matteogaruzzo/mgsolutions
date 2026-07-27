export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="max-w-xl mx-auto mb-10">
      <div className="flex items-center justify-between text-xs text-ink/50 mb-2">
        <span>
          Passo {current} di {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-line rounded-full overflow-hidden">
        <div className="h-full bg-forest transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
