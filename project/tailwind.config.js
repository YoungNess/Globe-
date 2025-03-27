/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Assurez-vous que Tailwind scanne tous vos fichiers
  theme: {
    extend: {
      fontFamily: {
        'abc-sans': ['ABCSans', 'sans-serif'],
        'neutral-face': ['Neutral_Face', 'sans-serif'],
      },
    },
  },
  plugins: [],
};