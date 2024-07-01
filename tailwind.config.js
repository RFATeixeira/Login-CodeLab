/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      fontSize: {},
      colors: {
        brandcolor: "#1E9E6A",
        dark10: "#1A202C",
        dark20: "#656769",
        dark30: "#E8E8E8",
        dark40: "#F7FAFC",
        dark50: "#FFFFFF",
        dark60: "#F3FFF2",
      },
      spacing: {},
    },
  },
  plugins: [],
};
