/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#0a192f",
        primary_purple: "#a74ed0",
        shadow_dark: "#040c16"
      },

      
    },
  },
  plugins: [],
}

