/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ---- MG brand (fisso su tutte le pagine) ----
        ink: '#1a1a1a',
        paper: '#FFFFFF',
        'paper-dim': '#F5F5F5',
        muted: '#666666',
        line: '#E5E5E5',
        primary: '#008b47',
        'primary-deep': '#00713a',
        // alias storici (usati nel markup esistente) rimappati al nuovo brand
        forest: '#008b47',
        'forest-deep': '#00713a',
        brass: '#D4A574',

        // ---- Settore 1: Wine & Viticulture ----
        wine: {
          accent: '#6B3D6F',
          gold: '#D4A574',
          bg: '#F5F0F8',
        },
        // ---- Settore 2: Oleifici & Food Tech ----
        olio: {
          accent: '#8B6914',
          gold: '#D4AF37',
          bg: '#FAF7F2',
        },
        // ---- Settore 3: Wine Hospitality & Agriturismi ----
        hospitality: {
          accent: '#8B5A3C',
          gold: '#D4A574',
          bg: '#F9F5F0',
        },

        // ---- Agria (namespace dedicato, redesign) ----
        // canali RGB in globals.css :root, per abilitare i modificatori di
        // opacità Tailwind (es. bg-agria-green/10) senza toccare i token legacy
        agria: {
          green: 'rgb(var(--agria-green) / <alpha-value>)',
          'green-dark': 'rgb(var(--agria-green-dark) / <alpha-value>)',
          graphite: 'rgb(var(--agria-graphite) / <alpha-value>)',
          white: 'rgb(var(--agria-white) / <alpha-value>)',
          offwhite: 'rgb(var(--agria-offwhite) / <alpha-value>)',
          grey: 'rgb(var(--agria-grey) / <alpha-value>)',
          border: 'rgb(var(--agria-border) / <alpha-value>)',
          // superfici scure: green-bright solo su ink, mai su fondo chiaro
          ink: 'rgb(var(--agria-ink) / <alpha-value>)',
          'green-bright': 'rgb(var(--agria-green-bright) / <alpha-value>)',
          'on-dark': 'rgb(var(--agria-white) / <alpha-value>)',
          'on-dark-muted': 'rgb(var(--agria-white) / 0.7)',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-poppins)', 'system-ui', 'sans-serif'],

        // ---- Agria ----
        'agria-sans': ['var(--font-agria-sans)', 'system-ui', 'sans-serif'],
        'agria-mono': ['var(--font-agria-mono)', 'monospace'],
      },
      fontSize: {
        // ---- Agria: scala tipografica fluida (clamp), pochi livelli ----
        'agria-display': ['clamp(2.75rem, 2rem + 3vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        'agria-h1': ['clamp(2.25rem, 1.75rem + 2.2vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
        'agria-h2': ['clamp(1.75rem, 1.5rem + 1.1vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '400' }],
        'agria-h3': ['clamp(1.375rem, 1.25rem + 0.5vw, 1.75rem)', { lineHeight: '1.25', fontWeight: '500' }],
        'agria-lg': ['1.25rem', { lineHeight: '1.6' }],
        'agria-body': ['1.0625rem', { lineHeight: '1.7' }],
        'agria-sm': ['0.875rem', { lineHeight: '1.5' }],
        'agria-label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      borderRadius: {
        // ---- Agria: card 20-24px, ridotto su mobile via classe responsive nel componente ----
        'agria-card': '1.5rem',
      },
      spacing: {
        // ---- Agria: ritmo verticale fra sezioni, ~120-160px desktop, fluido su mobile ----
        'agria-section': 'clamp(4rem, 1.875rem + 9vw, 10rem)',
      },
      maxWidth: {
        edge: '78rem',
      },
    },
  },
  plugins: [],
};
