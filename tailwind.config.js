/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#381E72',
        'purple': '#6750A4',
        'lightPurple': '#D0BCFF',
        'dark': '#49454F'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'backProfile': "url('/public/BackProfile.png')"
      },
    },
  },
  plugins: [],
}

