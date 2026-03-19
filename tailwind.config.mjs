/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#C89B3C',
        // Dark palette — deep indigo/navy
        ink: {
          950: '#06071a',
          900: '#090c1f',
          800: '#0e1230',
        },
        // Text on dark
        frost: {
          100: '#dde0f0',
          200: '#c0c5de',
          500: '#5a6080',
        },
        // Light palette
        chalk: {
          50:  '#f6f7fc',
          100: '#eef0f8',
        },
        slate2: {
          800: '#0d1124',
          500: '#7a82a4',
        },
      },
    },
  },
  plugins: [],
};
