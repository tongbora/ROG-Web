/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html"],
  theme: {
    extend: {
      colors: {
        text: "#344CB7",
        bgHeader: "#FFD65A",
        bgHeaderHover: "#FFC145",
      },
      fontFamily: {
        rog: ["ROG-FONT"],
      },
    },
  },
  plugins: [],
};
