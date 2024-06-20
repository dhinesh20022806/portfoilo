/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-display": ["SF Pro Display", "Arial", "sans-serif"],
        "sf-pro-text": ["SF Pro Text", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
