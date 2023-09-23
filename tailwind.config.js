/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3d59",
        secondary: "#f5f0e1",
        darkHighlight: "#ff6e40",
        lightHighlight: "#ffc13b",
      },
    },
  },
  plugins: [],
};
