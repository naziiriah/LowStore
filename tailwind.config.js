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
        Raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        homeBG1:'url("./src/assets/images/hangers-1850082_1280.jpg")',
        homeBG: 'url("./src/assets/images/www-AG-ekaterina-ikebukuro_9336028a-1440px.jpg")',
        homeBGSM: 'url("./src/assets/images/www-AG-ekaterina-ikebukuro_9336028a-500px.jpg")',
        blackBG: 'url("./src/assets/images/designed_art_black_background_hd_black-1920x1080.jpg")',
        homeAdvertisementPic1: 'url("./src/assets/images/image-best-gear.jpg")',
        homeAdvertisementPic2: 'url("./src/assets/images/istockphoto-1249219777-612x612.jpg")',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}