/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      screens: {
        sm: "400px",
        md: "700px",
        lg: "960px",
      },
    },
  },
  plugins: [],
};
