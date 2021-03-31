const theme = require('./src/styles/theme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ...theme,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
