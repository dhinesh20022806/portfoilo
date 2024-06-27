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

      animation: {
        flicker: "flicker 2s linear infinite both",
      },

      keyframes: {
        flicker: {
          "0%,100% ": {
            opacity: 1,
          },
          "41.99%": {
            opacity: 1,
          },
          "42%": {
            opacity: 0,
          },
          "43%": {
            opacity: 0,
          },
          "43.01%": {
            opacity: 1,
          },
          "47.99%": {
            opacity: 1,
          },
          "48%": {
            opacity: 0,
          },
          "49%": {
            opacity: 0,
          },
          "49.01%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
