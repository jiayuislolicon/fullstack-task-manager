/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
