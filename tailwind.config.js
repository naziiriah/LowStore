/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        PermanentMarker: ['Permanent Marker', 'cursive'],
        Onest: ['Onest', 'sans-serif'],
        YoungSerif: [ 'Young Serif', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}