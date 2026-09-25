// Icone essenziali dei social (tratto, colore corrente). Decorative: il nome
// del profilo è nell'aria-label del link.
const ICONS = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14.5 8H16V4.8h-2.2C11.4 4.8 10 6.3 10 8.8V11H7.8v3.2H10v5.8h3.3v-5.8h2.4l.5-3.2h-2.9V9.2c0-.8.4-1.2 1.2-1.2Z" />,
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V16M8 8v.01M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.3-2.6 1.3 0 2.2.9 2.2 2.6V16" />
    </>
  ),
};

export default function SocialIcon({ name }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}
