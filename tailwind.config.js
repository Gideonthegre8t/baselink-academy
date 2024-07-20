/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],  
  theme: {
    screens: {
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
}
