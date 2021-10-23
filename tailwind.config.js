module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#C0BFFF',
          DEFAULT: '#706FD3',
          dark: '#353560',
        },
        'green': '#33D9B2',
        'orange': '#FFB142',
        'beige': '#F7F1E3',

      },
      fontFamily: {
        fred: ['fred'],
        latoLight: ['latolight'],
      },
      boxShadow: {
        DEFAULT: '3px 3px 0 rgba(0, 0, 0, 0.15)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
