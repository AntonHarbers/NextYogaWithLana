const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
        Julius: ["Julius Sans One", ...defaultTheme.fontFamily.sans],
        Corinthia: ["Corinthia", ...defaultTheme.fontFamily.sans],

      },
      colors: {
        primary: '#FEF7EC',
        secondary: '#D7A098',
        text: '#061537',
        greens: "#275754",
        greensLite: "#AEC2AD",
        blues: "#061537"
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),

  ],
}
