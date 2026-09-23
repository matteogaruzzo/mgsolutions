import Section from './Section';

// Sfumature nei colori Agria. Tenui per non intaccare il contrasto del testo:
// i valori sono verificati nella sezione "Superfici scure" / report 09.
const GRADIENTS = {
  light:
    'radial-gradient(60% 80% at 12% 0%, rgb(var(--agria-green) / 0.12), transparent 70%), radial-gradient(55% 75% at 100% 100%, rgb(var(--agria-green-bright) / 0.16), transparent 70%)',
  dark:
    'radial-gradient(55% 70% at 15% 0%, rgb(var(--agria-green-bright) / 0.16), transparent 70%), radial-gradient(50% 70% at 100% 100%, rgb(var(--agria-green) / 0.22), transparent 70%)',
};

// Sulle sfumature chiare il grigio secondario (4.70:1 su off-white) scenderebbe
// sotto 4.5:1: il token --agria-grey viene scurito localmente, così ogni testo
// muted all'interno resta conforme (5.56:1 nel punto peggiore).
export const TINT_GREY = { '--agria-grey': '84 89 85' };

// Sezione con sfondo sfumato, per spezzare la sequenza di sezioni bianche.
// variant "light": verde tenue su off-white; "dark": su ink (usare onDark sui testi).
export default function GradientSection({ variant = 'light', className = '', style, children, ...props }) {
  return (
    <Section
      style={variant === 'dark' ? style : { ...TINT_GREY, ...style }}
      background={variant === 'dark' ? 'ink' : 'offwhite'}
      className={`relative isolate overflow-hidden ${className}`}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: GRADIENTS[variant] ?? GRADIENTS.light }}
      />
      {children}
    </Section>
  );
}
