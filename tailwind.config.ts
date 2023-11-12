import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        red: {
          100: "#feddde",
          200: "#fcbbbe",
          300: "#fb989d",
          400: "#f9767d",
          500: "#f8545c",
          600: "#c6434a",
          700: "#953237",
          800: "#632225",
          900: "#321112",
        },
        blackblue: {
          100: "#cfd3d6",
          200: "#9fa7ac",
          300: "#6e7a83",
          400: "#3e4e59",
          500: "#0e2230",
          600: "#0b1b26",
          700: "#08141d",
          800: "#060e13",
          900: "#03070a",
        },
        grayblue: {
          100: "#e6f2fb",
          200: "#cde5f6",
          300: "#b5d9f2",
          400: "#9ccced",
          500: "#83bfe9",
          600: "#6999ba",
          700: "#4f738c",
          800: "#344c5d",
          900: "#1a262f",
        },
      },
      fontFamily: {
        styreneA: ["StyreneA", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
