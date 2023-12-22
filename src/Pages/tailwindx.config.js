/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#2f2b2b",
        white: "#fff",
        black: "#000",
        brown: "#bd3838",
      },
      spacing: {},
      fontFamily: {
        itim: "Itim",
        inter: "Inter",
      },
      borderRadius: {
        "6xl": "25px",
        "4xs-5": "8.5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
