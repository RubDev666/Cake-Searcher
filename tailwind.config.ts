import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const color1 = '#fff';
const color2 = '#D1D8C5';
const color3 = '#7E8EF1';
const color4 = '#615EFC';
const color5 = '#f86390';
const color6 = '#ffb4ca';

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'color-1': color1,
      'color-2': color2,
      'color-3': color3,
      'color-4': color4,
      'color-5': color5,
      'color-6': color6
    }
  },
  plugins: [nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "transparent",
            foreground: color4,
            content1: color1,
            default: {
              50: "green",
              100: color1,
              200: color1, //hover select
              300: "green",
              400: "green",
              500: "green",
              600: color4,
              700: "green",
              800: "green",
              900: "green",
              DEFAULT: color6,
              foreground: color4,
            },
            primary: {
              600: color2,
              DEFAULT: color1,
              foreground: color2,
            },
            secondary: {
              DEFAULT: color5,
            },
            focus: color5,
          },
          layout: {
            radius: {
              small: "0",
              medium: "0",
              large: "0"
            },
            fontSize: {
              tiny: "1rem", // text-tiny
              small: "1.1rem", // text-small
              //medium: "1rem", // text-medium
              //large: "1rem", // text-large
            },
          }
        },
      },
  })],
};
export default config;
