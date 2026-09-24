// Pattern geometrici temporanei della concept v3: vanno sostituiti con
// fotografie reali di strutture, cantine e frantoi (vedi docs/agria/08-homepage.md).
const STROKE = 'rgb(var(--agria-green) / 0.5)';

const PATTERNS = {
  hospitality: (
    <>
      <g stroke={STROKE} fill="none" strokeWidth="1.2">
        <path d="M-10 150 C 80 120, 150 155, 240 118 S 380 96, 420 120" />
        <path d="M-10 128 C 80 98, 150 133, 240 96 S 380 74, 420 98" />
        <path d="M-10 106 C 80 76, 150 111, 240 74 S 380 52, 420 76" />
        <path d="M-10 84 C 80 54, 150 89, 240 52 S 380 30, 420 54" />
      </g>
      <g fill="rgb(var(--agria-green) / 0.18)">
        <rect x="150" y="30" width="40" height="26" rx="5" />
        <rect x="200" y="42" width="26" height="14" rx="4" />
      </g>
    </>
  ),
  cantine: (
    <>
      <g stroke={STROKE} fill="none" strokeWidth="1.2">
        <path d="M0 170 L400 120" />
        <path d="M0 146 L400 96" />
        <path d="M0 122 L400 72" />
        <path d="M0 98 L400 48" />
        <path d="M0 74 L400 24" />
      </g>
      <g fill="rgb(var(--agria-green) / 0.35)">
        <circle cx="70" cy="140" r="3" />
        <circle cx="150" cy="128" r="3" />
        <circle cx="230" cy="116" r="3" />
        <circle cx="310" cy="104" r="3" />
      </g>
    </>
  ),
  frantoi: (
    <>
      <g fill="rgb(var(--agria-green) / 0.3)">
        {[60, 140, 220, 300].map((cx) => (
          <circle key={`t${cx}`} cx={cx} cy="60" r="9" />
        ))}
        {[100, 180, 260, 340].map((cx) => (
          <circle key={`b${cx}`} cx={cx} cy="112" r="9" />
        ))}
      </g>
      <g stroke="rgb(var(--agria-green) / 0.3)" strokeWidth="1" fill="none">
        <path d="M60 60 L100 112 L140 60 L180 112 L220 60 L260 112 L300 60 L340 112" />
      </g>
    </>
  ),
};

export default function SectorPattern({ sector }) {
  return (
    <svg
      viewBox="0 0 400 180"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      {PATTERNS[sector]}
    </svg>
  );
}
