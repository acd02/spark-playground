const plugin = require('tailwindcss/plugin')
const sparkPlugins = require('@spark-ui/tailwind-plugins')
const themes = require('./themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme*="dark" i]'],
  content: [
    './node_modules/@spark-ui/**/*.{js,mjs}',
    './pages/**/*.{ts,tsx}',
    './pagesContent/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [
    ...sparkPlugins.sparkConfig({
      themes,
    }),
    plugin(function ({ addBase, config }) {
      addBase({
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          color: 'rgb(var(--colors-on-background))',
          backgroundColor: 'rgb(var(--colors-background))',
        },
        'body [data-theme]': {
          color: 'rgb(var(--colors-on-background))',
          backgroundColor: 'rgb(var(--colors-background))',
        },

        '#__next': {
          height: 'inherit',
        },
      })
    }),
  ],
}
