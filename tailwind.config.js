/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      btgray: "#5E5E63",
      btwhite: "#F1F1F1",
      plomo: {
        100: "#F6F6F6",
        200: "#E4E4E4",
        300: "#C9C9C9",
        400: "#B7B7B7",
        500: "#A5A5A5",
        600: "#878787",
        700: "#6A6A6A",
        800: "#4C4C4C",
        900: "#2F2F2F",
      },
      haze: {
        100: "#F4F7F9",
        200: "#ECEFF1",
        300: "#E5EAF0",
        400: "#DEE5EB",
        500: "#D6DDE2",
        600: "#CED6D9",
        700: "#BFC7CA",
        800: "#AAB4B8",
        900: "#96A1A5",
        1000: "#808B8F",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        barlow: ["var(--font-barlow)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
