import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand blue, pulled from logo ring (~#1AABE3)
        gold: {
          50:  '#f0f9ff',
          100: '#ddf1fc',
          200: '#b3e2f8',
          300: '#72ccee',
          400: '#29b5e5',
          500: '#1AABE3',  // logo blue
          600: '#1280b4',
          700: '#0e618a',
          800: '#0b4468',
          900: '#082e48',
          950: '#041b2c',
        },
        // Dark navy, from logo camo darks
        ink: {
          50:  '#f3f5f8',
          100: '#e4e9ef',
          200: '#c5cfdb',
          300: '#98acbd',
          400: '#667f95',
          500: '#445e72',
          600: '#304557',
          700: '#1f2f3e',
          800: '#131e29',
          900: '#0b1219',
          950: '#060c10',
        },
        // Cool off-white backgrounds
        cream: {
          50:  '#f8fafc',
          100: '#f0f4f8',
          200: '#e2eaef',
          300: '#d0dde6',
          400: '#b8cad6',
          500: '#9ab1c0',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold:       '0 0 40px -8px rgba(26, 171, 227, 0.25)',
        glow:       '0 20px 60px -15px rgba(26, 171, 227, 0.35)',
        'glow-lg':  '0 30px 80px -20px rgba(26, 171, 227, 0.4)',
        'glow-sm':  '0 8px 30px -8px rgba(26, 171, 227, 0.2)',
        ink:        '0 20px 60px -15px rgba(6, 12, 16, 0.5)',
        panel:      '0 4px 30px -6px rgba(11, 18, 25, 0.10)',
        elevate:    '0 24px 60px -12px rgba(11, 18, 25, 0.16)',
        card:       '0 1px 3px rgba(11, 18, 25, 0.04), 0 8px 24px rgba(11, 18, 25, 0.06)',
        'card-hover': '0 4px 12px rgba(11, 18, 25, 0.06), 0 16px 40px rgba(11, 18, 25, 0.1)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
