/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sf-pro-th': ['SF Pro TH Semibold', 'sans-serif'],
      'sf-pro': ['SF Pro', 'sans-serif'],
    }
  },
  plugins: [],
}

