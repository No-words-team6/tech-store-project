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
        'secondary': 'rgb(var(--secondary))',
        'header-background': 'rgb(var(--header-background))',
        'header-elements': 'rgb(var(--header-elements))',
        'link-text': 'rgb(var(--link-text))',
        'link-hover-bg': 'rgb(var(--link-hover-bg))',
        'dark-link-text': 'rgb(var(--dark-link-text))',
        'dark-link-hover-bg': 'rgb(var(--dark-link-hover-bg))',
        'burger-icon': 'rgb(var(--burger-icon))',
        'product-card-bg': 'rgb(var(--product-card-bg))',
        'product-card-border': 'rgb(var(--product-card-border))',
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
        'slide-up': {
          '0%': { transform: 'translateY(300%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'paging': 'paging 0.2s linear infinite',
        'slide-up': 'slide-up 0.4s ease-out 0.5s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
