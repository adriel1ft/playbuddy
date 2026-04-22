/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        curator: {
          bg: '#05070d',
          panel: '#0b0f1a',
          card: 'rgba(18, 22, 36, 0.6)',
          border: 'rgba(255, 255, 255, 0.06)',
          muted: '#7a8299',
          accent: '#6b8afd',
          'accent-soft': '#8ea5ff',
          'accent-glow': 'rgba(107, 138, 253, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 40px 0 rgba(107, 138, 253, 0.35)',
        'glow-soft': '0 0 60px 0 rgba(107, 138, 253, 0.18)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #b9c6ff 0%, #6b8afd 100%)',
        'radial-spotlight':
          'radial-gradient(1200px 600px at 90% 110%, rgba(107, 138, 253, 0.18), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
