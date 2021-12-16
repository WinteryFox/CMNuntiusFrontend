module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      blue: {
        900: '#0658A5',
        800: '#036BD2',
        700: '#007FFF',
        600: '#3399FF',
        500: '#66B2FF',
        400: '#99CCFF',
        300: '#CCE5FF',
        200: '#E5F2FF',
        100: '#F2F8FF',
      },
      gray: {
        900: '#212E39',
        800: '#5D6677',
        700: '#6F7786',
        600: '#858C99',
        500: '#AEB3BB',
        400: '#D6D9DD',
        300: '#EAEBEE',
        200: '#F5F5F6',
        100: '#FBFBFC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require("@tailwindcss/forms")
  ],
}
