import { businessSuiteModules } from '@/lib/data';
import { ChatIcon, TargetIcon, CalendarIcon, ClockIcon, ChartIcon } from '@/components/icons/ServiceIcons';

// Illustrazione astratta (non uno screenshot): 5 blocchi colorati con icona,
// a rappresentare i moduli della suite. La barra di stato riflette lo stato
// reale del modulo (attivo vs roadmap), non un progresso inventato.
const colors = {
  'social-ai': '#008b47',
  'lead-sales': '#6B3D6F',
  'booking-experience': '#8B5A3C',
  'staff-operations': '#8B6914',
  'control-tower': '#1a1a1a',
};

const icons = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

export default function SuiteDashboardGraphic() {
  return (
    <div className="relative rounded-3xl bg-paper-dim border border-line p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        <span className="ml-3 text-xs font-mono text-ink/40">MG Business Suite</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {businessSuiteModules.map((m) => {
          const Icon = icons[m.icon] || ChatIcon;
          const color = colors[m.slug] || '#1a1a1a';
          const isAvailable = m.status === 'early-access';
          return (
            <div
              key={m.slug}
              className="rounded-2xl p-4 sm:p-5 flex flex-col gap-3 aspect-square justify-between"
              style={{ backgroundColor: `${color}12` }}
            >
              <div className="flex items-start justify-between gap-2">
                <span style={{ color }}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide rounded-full px-1.5 py-0.5 shrink-0 ${
                    isAvailable ? 'bg-primary/15 text-primary' : 'bg-ink/10 text-ink/50'
                  }`}
                >
                  {isAvailable ? 'Live' : 'Roadmap'}
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-ink">{m.name.replace('MG ', '')}</p>
                <div className="mt-2 h-1.5 rounded-full bg-white/60 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: isAvailable ? '100%' : '10%', backgroundColor: color }}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-1 aspect-square bg-ink text-paper">
          <span className="text-2xl sm:text-3xl font-bold">1/5</span>
          <span className="text-[10px] sm:text-xs text-paper/60 text-center leading-tight">
            modulo già attivo, gli altri in roadmap
          </span>
        </div>
      </div>
    </div>
  );
}
