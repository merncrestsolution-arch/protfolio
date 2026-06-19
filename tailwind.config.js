/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary:    '#00E5FF',
        secondary:  '#7C4DFF',
        accent:     '#00FF94',
        bg:         '#050816',
        surface:    '#0D1224',
        surface2:   '#111827',
        muted:      '#A0AEC0',
      },
      animation: {
        glow:         'glow 2s ease-in-out infinite',
        float:        'float 3s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        typing:       'typing 3.5s steps(30,end) infinite',
        blink:        'blink 0.75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%,100%': { textShadow: '0 0 10px #00E5FF, 0 0 20px rgba(0,229,255,0.4)' },
          '50%':     { textShadow: '0 0 20px #00E5FF, 0 0 40px rgba(0,229,255,0.6)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-primary':   '0 0 20px rgba(0,229,255,0.3)',
        'glow-secondary': '0 0 20px rgba(124,77,255,0.3)',
        'glow-accent':    '0 0 20px rgba(0,255,148,0.3)',
      },
    },
  },
  plugins: [],
};
