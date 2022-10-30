/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    maxWidth: {
      container: 1110,
    },
    fontFamily: {
      sans: 'Jost, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    fontWeight: {
      medium: 500,
      normal: 400,
    },
    colors: {
      peach: {
        DEFAULT: "#E7816B",
        300: "#FFAD9B",
      },
      gray: {
        900: "#1D1C1E",
        800: "#333136",
        100: "#F1F3F5",
      },
      white: "#fff",
    },
    fontSize: {
      base: ["16px", "1.625"],
      xs: [
        "14px",
        {
          letterSpacing: "2px",
        },
      ],
      sm: [
        "15px",
        {
          lineHeight: "1.466666667",
          letterSpacing: "1px",
        },
      ],
      md: [
        "20px",
        {
          lineHeight: "1.3",
          letterSpacing: "5px",
          fontWeight: 500,
        },
      ],
      lg: [
        "40px",
        {
          lineHeight: "1.2",
          letterSpacing: "2px",
          fontWeight: 500,
        },
      ],
      xl: [
        "48px",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
    },
  },
  plugins: [],
};
