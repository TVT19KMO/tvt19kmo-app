const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.green['500'],
        secondary: colors.green['300'],
        dark: colors.gray['800'],
        darker: colors.gray['900'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
