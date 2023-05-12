/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#AD1FEA",
      secondary: "#F49F85",
      blue: {
        DEFAULT: "#4661E6",
        300: "#62BCFA",
      },
      gray: {
        600: "#373F68",
        500: "#3A4374",
        DEFAULT: "#647196",
        300: "#F2F4FF",
        200: "#F7F8FD",
      },
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
