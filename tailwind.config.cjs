/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mulish', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'purple-dark': '#4B355A',
        'purple-light': '#6E4F81',
        'purple-bg': '#B2A1BD',
        'magenta-dark': '#73485C',
        'magenta-light': '#99607B',
        'magenta-opa': '#99607B90',
        'orange-dark': '#C6767A',
        'orange-light': '#F29296',
        'orange-bg':'#FCE0E0',
        'yellow-dark': '#D4B995',
        'yellow-light': '#FEDEB4',
        'yellow-bg': '#FEE8CD',
        'sand-dark': '#C7AFA4',
        'sand-light': '#F1D5C7',
        'sand-light-70': '#F5E2D9',
        'sand-bg': '#FDF8F5',
        'light': '#F1EEF3',
      },
    },
  },
  plugins: [],
}
