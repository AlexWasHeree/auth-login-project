/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: '#ffffff',

      gray: {
        100: '#CDCDD1',
        300: '#77777D',
        500: '#444449',
        700: '#2A2A2E',
        900: '#0D0D0E',
      },

      purple: {
        300: '#A738FE',
        500: '#8419EF',
        700: '#5C00B9'
      }
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      "2xl": 36 
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
