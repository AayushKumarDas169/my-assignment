/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: '#E6F4EA',
        pillGreen: '#D1FAE5',
        pillPink: '#FBCFE8',
        underlineGold: '#FBBF24',
        accentCoral: '#F87171',
      },
    },
  },
  plugins: [],
}