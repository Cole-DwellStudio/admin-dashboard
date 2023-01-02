/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        sky: {
          550: "#0d98d9",
        },
      },
      screens: {
        "3xl": "2160px",
      },
    },
  },
  plugins: [],
};
