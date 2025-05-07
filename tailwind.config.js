/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "-28.89": "-28.89deg",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
