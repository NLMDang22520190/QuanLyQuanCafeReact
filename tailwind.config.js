/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens } from 'fluid-tailwind'
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: {
files:[
  "./index.html",
 "./src/**/*.{js,ts,jsx,tsx}",
],
extract,
  } ,
  theme: {
    extend: {},
    screens,
  },
  plugins: [
    fluid,
  ],
})

