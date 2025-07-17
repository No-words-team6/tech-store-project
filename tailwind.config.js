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
        'burger-icon': 'rgb(var(--burger-icon))',

        'product-card-bg': 'rgb(var(--product-card-bg))',
        'product-card-border': 'rgb(var(--product-card-border))',
        'product-card-border-hover': 'rgb(var(--product-card-border-hover))',

        'add-to-cart-text-color': 'rgb(var(--add-to-cart-text-color))',
        'add-to-cart-bg': 'rgb(var(--add-to-cart-bg))',
        'add-to-cart-bg-hover': 'rgb(var(--add-to-cart-bg-hover))',
        'add-to-cart-bg-selected': 'rgb(var(--add-to-cart-bg-selected))',
        'add-to-cart-text-color-selected':
          'rgb(var(--add-to-cart-text-color-selected))',

        'button-heart-text-color': 'rgb(var(--button-heart-text-color))',
        'button-heart-bg': 'rgb(var(--button-heart-bg))',
        'button-heart-border': 'rgb(var(--button-heart-border))',
        'button-heart-bg-hover': 'rgb(var(--button-heart-bg-hover))',
        'button-heart-border-hover': 'rgb(var(--button-heart-border-hover))',
        'button-heart-bg-selected': 'rgb(var(--button-heart-bg-selected))',
        'button-heart-border-selected':
          'rgb(var(--button-heart-border-selected))',
        'button-heart-text-color-selected':
          'rgb(var(--button-heart-text-color-selected))',

        'button-arrow-text-color': 'rgb(var(--button-arrow-text-color))',
        'button-arrow-bg': 'rgb(var(--button-arrow-bg))',
        'button-arrow-border': 'rgb(var(--button-arrow-border))',
        'button-arrow-bg-hover': 'rgb(var(--button-arrow-bg-hover))',
        'button-arrow-border-hover': 'rgb(var(--button-arrow-border-hover))',
        'button-arrow-bg-disabled': 'rgb(var(--button-arrow-bg-disabled))',
        'button-arrow-border-disabled':
          'rgb(var(--button-arrow-border-disabled))',
        'button-arrow-text-color-disabled':
          'rgb(var(--button-arrow-text-color-disabled))',

        'button-paginator-text-color':
          'rgb(var(--button-paginator-text-color))',
        'button-paginator-bg': 'rgb(var(--button-paginator-bg))',
        'button-paginator-border': 'rgb(var(--button-paginator-border))',
        'button-paginator-bg-hover': 'rgb(var(--button-paginator-bg-hover))',
        'button-paginator-border-hover':
          'rgb(var(--button-paginator-border-hover))',
        'button-paginator-bg-selected':
          'rgb(var(--button-paginator-bg-selected))',
        'button-paginator-border-selected':
          'rgb(var(--button-paginator-border-selected))',
        'button-paginator-text-color-selected':
          'rgb(var(--button-paginator-text-color-selected))',

        'breadcrumb-color': 'rgb(var(--breadcrumb-color))',
        'breadcrumb-color-current': 'rgb(var(--breadcrumb-color-current))',
        'breadcrumb-color-hover': 'rgb(var(--breadcrumb-color-hover))',
      },
      dropShadow: {
        'add-to-cart-drop-shadow': 'var(--add-to-cart-drop-shadow)',
        'product-card-drop-shadow': 'var(--product-card-drop-shadow)',
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
