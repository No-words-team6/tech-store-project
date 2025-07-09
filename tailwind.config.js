/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src//*.{js,ts,jsx,tsx}'],
  safelist: [
    'data-[state=open]',
    'data-[state=closed]',
    'data-[disabled]',
    'data-[highlighted]',
    'data-[focus]',
    'data-[checked]',
    'data-[state=on]',
    'data-[state=off]',
    'aria-[expanded=true]',
    'aria-[selected=true]',
    'aria-[checked=true]',
  ],
  theme: {
    screens: {
      sm: '640px',
      xl: '1200px',
    },
    extend: {
      colors: {
        border: 'rgb(var(--border))',
        input: 'rgb(var(--input))',
        ring: 'rgb(var(--ring))',
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'rgb(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
        sidebar: {
          'DEFAULT': 'rgb(var(--sidebar-background))',
          'foreground': 'rgb(var(--sidebar-foreground))',
          'primary': 'rgb(var(--sidebar-primary))',
          'primary-foreground': 'rgb(var(--sidebar-primary-foreground))',
          'accent': 'rgb(var(--sidebar-accent))',
          'accent-foreground': 'rgb(var(--sidebar-accent-foreground))',
          'border': 'rgb(var(--sidebar-border))',
          'ring': 'rgb(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'paging': {
          '0%': { transform: 'rotateY(0deg) skewY(0deg)' },
          '50%': { transform: 'rotateY(90deg) skewY(-20deg)' },
          '100%': { transform: 'rotateY(180deg) skewY(0deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'paging': 'paging 0.2s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
