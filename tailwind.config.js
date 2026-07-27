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
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        edge: '78rem',
      },
    },
  },
  plugins: [],
};
