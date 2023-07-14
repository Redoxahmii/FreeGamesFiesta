/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: [
      "black",
      "black",
      {
        black: {
          ...require("daisyui/src/theming/themes")["[data-theme=black]"],
          primary: "#E27C89",
          secondary: "#01ADFE",
        },
      },
    ],
  },
};
