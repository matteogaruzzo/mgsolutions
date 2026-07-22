/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17160F',
        paper: '#ECEAE3',
        'paper-dim': '#E2DFD5',
        forest: '#103D2C',
        'forest-deep': '#0A2A1E',
        brass: '#C79A3E',
        line: '#D6D2C7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        edge: '78rem',
      },
    },
  },
  plugins: [],
};
