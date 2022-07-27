/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  darkMode: "class",
  theme: {
    colors: {
      blue: {
        DEFAULT: "#0079FF",
        light: "#60ABFF",
      },
      white: "#FFFFFF",
      red: "#F74646",
      gray: {
        50: "#FEFEFE",
        100: "#F6F8FF",
        300: "#697C9A",
        DEFAULT: "#4B6A9B",
        600: "#90A4D4",
        700: "#2B3442",
        800: "#1E2A47",
        900: "#141D2F",
      },
      transparent: "transparent",
    },
    fontSize: {
      xs: "11px",
      sm: "13px",
      base: "15px",
      lg: "16px",
      xl: "18px",
      "2xl": "22px",
      "3xl": "26px",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      fontFamily: {
        sans: '"Space Mono", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  plugins: [],
};
