/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#241c34', // Your custom background color
      },
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
}

