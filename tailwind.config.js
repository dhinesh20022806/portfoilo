/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: "#383F5B",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "Arial", "sans-serif"],
        "sf-pro-text": ["SF Pro Text", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
