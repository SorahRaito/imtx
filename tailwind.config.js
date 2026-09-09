/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        imtx: {
          950: '#06080d',
          900: '#0a0e17',
          850: '#0f1624',
          800: '#141c2d',
          700: '#1c2840',
          600: '#2c3c5c',
          500: '#3f5682',
          accent: '#06b6d4',
          glow: '#38bdf8',
          violet: '#8b5cf6',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'card-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(6, 182, 212, 0.15)',
      }
    },
  },
  plugins: [],
}
