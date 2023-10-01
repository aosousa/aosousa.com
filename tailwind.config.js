/** @type {import('tailwindcss').Config} */
export default {
  important: '.wrapper',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '360px'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}

