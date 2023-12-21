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
      },
      spacing: {},
      fontFamily: {
        itim: "Itim",
        inter: "Inter",
        inherit: "inherit",
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
