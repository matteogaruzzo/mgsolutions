// Icone line, stroke 2px, colore ereditato (currentColor) — tema wine/agribusiness.
// Uso: <GrapeIcon className="w-5 h-5 text-primary" />

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function GrapeIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v3" />
      {[
        [9, 8], [15, 8],
        [7, 12], [12, 12], [17, 12],
        [9, 16], [15, 16],
        [12, 19.5],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.1" />
      ))}
    </svg>
  );
}

export function BottleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M10 2h4M10.5 2v3.2c0 .5-.2 1-.6 1.4L9 7.7A3 3 0 0 0 8 9.9V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9.9a3 3 0 0 0-1-2.2l-.9-1.1a2 2 0 0 1-.6-1.4V2" />
      <path d="M8 13h8" />
    </svg>
  );
}

export function GlassIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 3h10l-1.2 10.5A3.8 3.8 0 0 1 12 17a3.8 3.8 0 0 1-3.8-3.5L7 3Z" />
      <path d="M12 17v4M9 21h6" />
    </svg>
  );
}

export function VineyardRowsIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 20 21 4M3 15 16 4M3 10 11 4" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function BarrelIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 5.5C6 4 8.7 3 12 3s6 1 6 2.5v13c0 1.5-2.7 2.5-6 2.5s-6-1-6-2.5v-13Z" />
      <path d="M6 9c1.6.7 4 1 6 1s4.4-.3 6-1M6 15c1.6.7 4 1 6 1s4.4-.3 6-1" />
    </svg>
  );
}

export function LabelIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="1.5" />
      <path d="M7 10h10M7 13h6" />
    </svg>
  );
}

export function VineLeafIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3c4.5 1 8 4.8 8 9.2 0 3.6-2.6 6.3-4.8 8.3-.6-2-1.7-3.4-3.2-4.6-1.5 1.2-2.6 2.6-3.2 4.6C6.6 18.5 4 15.8 4 12.2 4 7.8 7.5 4 12 3Z" />
      <path d="M12 3v17" />
    </svg>
  );
}

export function OliveIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 14c2-2.5 4.8-3.8 6-6.5" />
      <ellipse cx="8.2" cy="16.5" rx="3" ry="2.2" transform="rotate(-30 8.2 16.5)" />
      <ellipse cx="14.5" cy="13" rx="3" ry="2.2" transform="rotate(-30 14.5 13)" />
      <ellipse cx="19" cy="8.5" rx="2.6" ry="2" transform="rotate(-30 19 8.5)" />
    </svg>
  );
}

export function CellarIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 21V11a8 8 0 0 1 16 0v10" />
      <path d="M4 21h16M9 21v-6M15 21v-6" />
    </svg>
  );
}

export function FarmhouseDoorIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M9 21v-7a3 3 0 0 1 6 0v7" />
    </svg>
  );
}

export function DiningTableIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 9h18M5 9v10M19 9v10" />
      <path d="M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </svg>
  );
}

export function RusticBedIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 16h18M3 19v2M21 19v2" />
      <path d="M6 10V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3" />
    </svg>
  );
}
