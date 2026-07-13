import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gr: {
          black: '#050505',
          surface: '#0a0a0a',
          'surface-2': '#111111',
          'surface-3': '#1a1a1a',
          border: '#222222',
          'border-bright': '#333333',
          green: '#00ff41',
          'green-dim': '#00cc33',
          'green-dark': '#004d14',
          cyan: '#00e5ff',
          'cyan-dim': '#00b8cc',
          amber: '#ffaa00',
          red: '#ff3333',
          text: '#e0e0e0',
          'text-muted': '#666666',
          'text-dim': '#444444',
        },
      },
      fontFamily: {
        mono: ['SF Mono', 'Fira Code', 'Cascadia Code', 'ui-monospace', 'Courier New', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-green': 'linear-gradient(to right, rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,65,0.03) 1px, transparent 1px)',
        'grid-cyan': 'linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'ticker': 'ticker-scroll 40s linear infinite',
        'pulse-dot': 'pulse-dot 1.5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
