/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand"],
      },
      colors: {
        primary: "#f2f2f2",
        secondary: "#f1356d",
        lightSecondary: "#f86c99",
        darkSecondary: "#bb003e",
      },
    },
  },
  plugins: [],
};
