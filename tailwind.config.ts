import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf8ee',
          100: '#faefd5',
          200: '#f4dba5',
          300: '#ecc36d',
          400: '#e4a83c',
          500: '#c9a96e',
          600: '#a8854e',
          700: '#8a6b38',
          800: '#6e5229',
          900: '#4a3619',
        },
        ink: {
          50:  '#f5f3f0',
          100: '#e8e4de',
          200: '#d0c9be',
          300: '#b0a596',
          400: '#8c7f6f',
          500: '#6b5e4e',
          600: '#4a3f33',
          700: '#332d24',
          800: '#1f1a14',
          900: '#12100c',
          950: '#0a0806',
        },
        cream: {
          50:  '#fefcf8',
          100: '#faf7f0',
          200: '#f5f0e6',
          300: '#ede5d8',
          400: '#e0d5c4',
          500: '#cec0aa',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1',    letterSpacing: '-0.04em' }],
        '9xl':  ['7.5rem', { lineHeight: '0.95', letterSpacing: '-0.045em' }],
        '10xl': ['9rem',   { lineHeight: '0.9',  letterSpacing: '-0.05em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      boxShadow: {
        gold:    '0 0 40px -8px rgba(201, 169, 110, 0.25)',
        glow:    '0 20px 60px -15px rgba(201, 169, 110, 0.3)',
        ink:     '0 20px 60px -15px rgba(10, 8, 6, 0.5)',
        panel:   '0 4px 30px -6px rgba(10, 8, 6, 0.12)',
        elevate: '0 24px 60px -12px rgba(10, 8, 6, 0.18)',
      },
      animation: {
        'marquee':     'marquee 40s linear infinite',
        'fade-in':     'fadeIn 0.6s ease-out both',
        'fade-up':     'fadeUp 0.8s ease-out both',
        'slide-right': 'slideRight 0.6s ease-out both',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
