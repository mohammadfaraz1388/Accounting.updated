/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*html"],
  plugins: [
    require('flowbite/plugin')
],
  theme: {
    extend: {},
    fontFamily : {
      'sans' : "Vazir"
    },
    container: {
      center: true,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
