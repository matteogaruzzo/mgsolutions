// Icone line generiche per i servizi (stroke 2px, currentColor).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function AIIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="7" width="14" height="11" rx="2" />
      <path d="M12 3v4M9 21h6M8 12h.01M16 12h.01" />
      <path d="M2 10v4M22 10v4" />
    </svg>
  );
}

export function CartIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21.5 7H6" />
    </svg>
  );
}

export function ScreenIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function RefreshIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16M3 21v-5h5" />
    </svg>
  );
}

export function GearIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.56V19.6a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 13.5a1.7 1.7 0 0 0-1.56-1H2.9a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.56V2.9a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.2.63.79 1.06 1.56 1h.09a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1Z" />
    </svg>
  );
}

export function CompassIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function ClockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function LockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <path d="M12 15v2" />
    </svg>
  );
}

export function TargetIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function BookIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
  );
}

export function PinIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function CalendarIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function ChatIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.3-3.6A7.96 7.96 0 0 1 4 12Z" />
    </svg>
  );
}

export function ChartIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2 20h20" />
    </svg>
  );
}

export function PaletteIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1.1.9-1.8 2-1.8h2.3c1.5 0 2.7-1.2 2.7-2.7C19.5 6.4 16.1 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1.2" fill="currentColor" />
      <circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="15" cy="7.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function CodeIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  );
}

export function HandshakeIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M2 12.5 6 9l3.5 3-1 1a1.7 1.7 0 0 0 2.4 2.4l3.4-3.4 4.7 3.5" />
      <path d="m11 8 2.3-2a2 2 0 0 1 2.7.1L18 8l4 3-3 3.5" />
      <path d="M9.5 15.5 8 17a1.7 1.7 0 0 0 2.4 2.4l.6-.6" />
    </svg>
  );
}

export function GiftIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="9" width="17" height="4" rx="0.8" />
      <path d="M5 13v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7M12 9v12" />
      <path d="M12 9C9 9 7.5 7.7 7.5 6a2.2 2.2 0 0 1 4.2-.9c.3.6.3 1.9.3 3ZM12 9c3 0 4.5-1.3 4.5-3a2.2 2.2 0 0 0-4.2-.9c-.3.6-.3 1.9-.3 3Z" />
    </svg>
  );
}

export function CheckCircleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3L16 10" />
    </svg>
  );
}

export function BuildingIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="3" width="10" height="18" rx="1" />
      <path d="M15 9h4v12H8" />
      <path d="M8.3 7h1.4M8.3 10.5h1.4M8.3 14h1.4M10.6 7h1.4M10.6 10.5h1.4M10.6 14h1.4" />
    </svg>
  );
}

export function ScaleIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v18M8 21h8" />
      <path d="M5 6h14M5 6 2.5 11a2.5 2.5 0 0 0 5 0L5 6ZM19 6l-2.5 5a2.5 2.5 0 0 0 5 0L19 6Z" />
    </svg>
  );
}

export function MegaphoneIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 11v2a1.5 1.5 0 0 0 1.5 1.5H6l1 5h2l-.8-5h1.1L18 18V6l-8.7 3.5H6A1.5 1.5 0 0 0 4.5 11H3Z" />
      <path d="M20.5 9.5a4 4 0 0 1 0 5" />
    </svg>
  );
}

export function UsersIcon({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.3a3.2 3.2 0 0 1 0 6.2M21 20c0-2.8-2-5.1-4.7-5.8" />
    </svg>
  );
}
