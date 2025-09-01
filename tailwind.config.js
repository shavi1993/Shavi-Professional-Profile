/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",   // dark background
        secondary: "#ffffff", // white text
        accent: "#f5a623",    // golden accent (buttons/highlights)
        lightGray: "#f5f5f5",
        textDark: "#111111",
        textGray: "#4a4a4a",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
