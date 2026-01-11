/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cafe-primary': '#4A2C2A',
        'cafe-secondary': '#7D5A50',
        'cafe-accent': '#B4846C'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}