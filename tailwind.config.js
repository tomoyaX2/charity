/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        200: "40rem",
      },
      colors: {
        gray: {
          footerBackground: "#2f2f2f",
          footerText: "#999999",
        },
      },
    },
  },
  plugins: [],
};
