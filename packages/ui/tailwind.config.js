/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        spharos: {
          primary: 'var(--color-spharos-primary)',
          green: 'var(--color-spharos-green)',
          'green-light': 'var(--color-spharos-green-light)',
          'green-14': 'var(--color-spharos-green-14)',
          'green-42': 'var(--color-spharos-green-42)',
          'green-dark': 'var(--color-spharos-green-dark)',
          'blue-black': 'var(--color-spharos-blue-black)',
          'blue-black-light': 'var(--color-spharos-blue-black-light)',
          gray: 'var(--color-spharos-gray)',
          'gray-light': 'var(--color-spharos-gray-light)',
          'gray-dark': 'var(--color-spharos-gray-dark)',
          white: 'var(--color-spharos-white)',
          black: 'var(--color-spharos-black)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('../../packages/ui/tailwind.config.js')],
}; 