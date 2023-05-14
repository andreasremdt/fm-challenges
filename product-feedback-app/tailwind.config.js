/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-jost)"],
    },
    fontSize: {
      body1: ["16px", "1.4375"],
      body2: ["15px", "1.4667"],
      body3: ["13px", "1.4615"],
      h1: [
        "24px",
        {
          lineHeight: "1.4583",
          letterSpacing: "-0.33px",
        },
      ],
      h2: [
        "20px",
        {
          lineHeight: "1.45",
          letterSpacing: "-0.25px",
        },
      ],
      h3: [
        "18px",
        {
          lineHeight: "1.4444",
          letterSpacing: "-0.25px",
        },
      ],
      h4: [
        "14px",
        {
          lineHeight: "1.4285",
          letterSpacing: "-0.2px",
        },
      ],
    },
    colors: {
      primary: "#AD1FEA",
      secondary: "#F49F85",
      tertiary: "#62BCFA",
      danger: "#D73737",
      blue: {
        DEFAULT: "#4661E6",
        200: "#CFD7FF",
      },
      gray: {
        600: "#373F68",
        500: "#3A4374",
        DEFAULT: "#647196",
        300: "#F2F4FF",
        200: "#F7F8FD",
      },
      white: "#FFFFFF",
      transparent: "transparent",
    },
    boxShadow: {
      dropdown: "0 10px 40px -7px rgba(55, 63, 104, 0.35)",
    },
  },
  plugins: [],
};
