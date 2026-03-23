/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        upside: {
          red: '#8b0000',
          bloodRed: '#dc143c',
          crimson: '#ff1744',
          vine: '#2d1b1b',
          glow: '#ff6b6b',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Crimson Text', 'serif'],
        mono: ['Space Mono', 'monospace']
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'vine-grow': 'vineGrow 20s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        vineGrow: {
          '0%, 100%': {
            strokeDashoffset: '0',
            opacity: '0.3'
          },
          '50%': {
            strokeDashoffset: '100',
            opacity: '0.6'
          },
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}