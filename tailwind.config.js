/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(calc(-128px*10))'}
        }
      }
    },
  },
  plugins: [],
}



