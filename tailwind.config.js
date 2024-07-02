/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const backfaceVisibility = plugin(function ({
  addUtilities,
}) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugin: [backfaceVisibility],

  theme: {
    colors: {
      primary: "#e0e1dd",
      white: "#071c3b",
      black: "#000",
    },
    extend: {
      fontFamily: {
        "sf-pro-display": [
          "SF Pro Display",
          "Arial",
          "sans-serif",
        ],
        "sf-pro-text": [
          "SF Pro Text",
          "Arial",
          "sans-serif",
        ],
      },

      animation: {
        flicker: "flicker 2s linear infinite both",
        "flip-scale-2-hor-top":
          "flip-scale-2-hor-top 0.5s linear both ",
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
        "flip-scale-2-hor-top": {
          "0%": {
            transform: "translateY(0) rotateX(0) scale(1)",
            "transform-origin": "50% 0%",
          },
          "50%": {
            transform:
              "translateY(-50%) rotateX(-90deg) scale(2)",
            "transform-origin": "50% 50%",
          },
          "100%": {
            transform:
              "translateY(-100%) rotateX(-180deg) scale(1)",
            "transform-origin": "50% 100%",
          },
        },
      },
    },
  },
  plugins: [],
};
