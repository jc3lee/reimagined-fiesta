const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,json}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0d1219",
        "primary-dark-acc": "#202c3d",
        "primary": "#eef0f1",
        "primary-acc": "#ffffff",
        "primary-bd": "#d6d8da",
        "primary-bd-dark": "#22303f",
        "blog-link": {
          light: "#9896ff",
          normal: "#3d49df",
        },
        fuchsia: colors.fuchsia,
        trueGray: colors.trueGray,
        blue: colors.blue,
        green: colors.green,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        teal: colors.teal,
        yellow: colors.yellow,
      },
      fontFamily: {
        "open": ["OpenSans",],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
