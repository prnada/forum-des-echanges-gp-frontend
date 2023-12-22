/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#9747ff",
        darkslategray: {
          "100": "#464646",
          "200": "#2f2f2f",
        },
        black: "#000",
        salmon: "#ff7070",
        red: "#ff0000",
        palegreen: "#7eff8b",
        brown: "#bd3838"
      },
      spacing: {},
      fontFamily: {
        itim: "Itim",
        inter: "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        "6xl": "25px",
        "4xs-5": "8.5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
