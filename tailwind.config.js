/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      okana:['Okana','SanSerif']
    },
},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

