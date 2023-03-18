/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        400: "40rem",
        88: "22rem",
        80: "20rem",
        164: "41rem",
        100: "25rem",
      },
      colors: {
        gray: {
          footerBackground: "#2f2f2f",
          footerText: "#999999",
        },
        blue: {
          100: "hsl(211, 85%, 95%)",
          400: "mediumblue",
        },
      },
      screens: {
        xsm: "320px",
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
  },
  plugins: [],
};
