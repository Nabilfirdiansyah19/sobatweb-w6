/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#f5f5f5',
        'soft-black': '#121212',
        'soft-white': '#fafafa',
        'white-grey': '#f0f0f0',
        'soft-grey': '#e5e5e5',
      },
      boxShadow: {
        'soft': '0 20px 50px rgba(0, 0, 0, 0.05)',
        'soft-dark': '0 20px 50px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

