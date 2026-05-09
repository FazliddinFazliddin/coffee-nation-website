/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1a0a00',
        black: '#0d0d0d',
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e0c06e',
          dark: '#a8882e',
        },
        cream: '#f5f0e8',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
