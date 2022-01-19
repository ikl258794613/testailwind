const colors = require("tailwindcss/colors");
// const width = require("tailwindcss/width");
// const screens = require("tailwindcss/screens");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        light: "#85d7ff",
        DEFAULT: "#B00000",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        dark: "#18191F",
        DEFAULT: "#111111",
      },
    },
    width: {
      "32": "8rem",
      "1/3": "33%",
      "1/2": "50%",
      "1/4": "24%",
      "3/4": "76.18%",
      "4/5": "79.02%",
      "17/20": "84.5%",
      "9/10": "89.16%",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [],
};
