/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F9F1D8',
          200: '#F0DEAA',
          300: '#E6CB7D',
          400: '#D4AF37', // Classic Gold
          500: '#B5952F',
          600: '#967B27',
        },
        rose: {
          50: '#FCF9F9',
          100: '#F9F1F0',
          200: '#E0BFB8', // Soft Rose
          300: '#D8A49B',
        },
        primary: '#D4AF37',
        secondary: '#1A1A1A',
        cream: '#FDFBF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}
