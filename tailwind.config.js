import flowbite from "flowbite-react/tailwind";
import { addDynamicIconSelectors } from '@iconify/tailwind'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        dark: "#161616",
        dark_middle: "#1c1c1c",
        white: "#f6f6f6",
        gray: "#858585"
      },
      fontFamily: {
        pixel_digivolve: ['pixel_digivolve', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    addDynamicIconSelectors()
  ],
}

