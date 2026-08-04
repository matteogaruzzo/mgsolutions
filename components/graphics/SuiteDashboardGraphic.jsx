import { businessSuiteModules } from '@/lib/data';
import { ChatIcon, TargetIcon, CalendarIcon, ClockIcon, ChartIcon } from '@/components/icons/ServiceIcons';

// Illustrazione astratta (non uno screenshot): 5 blocchi colorati con icona,
// a rappresentare i moduli della suite.
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
          return (
            <div
              key={m.slug}
              className="rounded-2xl p-4 sm:p-5 flex flex-col gap-3 aspect-square justify-between"
              style={{ backgroundColor: `${color}12` }}
            >
              <span style={{ color }}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-ink">{m.name.replace('MG ', '')}</p>
                <div className="mt-2 h-1.5 rounded-full bg-white/60 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: color }} />
                </div>
              </div>
            </div>
          );
        })}
        <div className="rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-1 aspect-square bg-ink text-paper">
          <span className="text-2xl sm:text-3xl font-bold">1</span>
          <span className="text-[10px] sm:text-xs text-paper/60 text-center leading-tight">
            account aziendale
          </span>
        </div>
      </div>
    </div>
  );
}
