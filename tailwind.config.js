/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          mono: ['var(--font-mono)'], 
          sans: ['var(--font-sans)'],
          poppins: ['var(--font-poppins)'],
          roboto: ['var(--font-roboto)'],
        },
      },
    },
    plugins: [],
  }