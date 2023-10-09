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
      backgroundImage: {
        homeBG1:'url("./src/assets/images/hangers-1850082_1280.jpg")',
        "homeBG": 'url("./src/assets/images/www-AG-ekaterina-ikebukuro_9336028a-1440px.jpg")',
        "homeBGSM": 'url("./src/assets/images/www-AG-ekaterina-ikebukuro_9336028a-500px.jpg")'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}