import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#FFD1DC",
        pastelGreen: "#C1E1C1",
        pastelBlue: "#AEC6CF",
        pastelPurple: "#D4A5D5",
        pastelYellow: "#FDFD96",
        lightGray: "#F0F0F0",
        accentOrange: "#F7C8A1",
        accentBlue: "#A2D5F2",
        lightPurple: "#EADCF8",
        darkPurple: "#7B4397",
        vividPink: "#FF0099",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        36: "9rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        large: "1.5rem",
        xl: "2rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        handwriting: ["Dancing Script", "cursive"],
      },
      boxShadow: {
        glow: "0 4px 6px -1px rgba(128, 90, 213, 0.6), 0 2px 4px -1px rgba(128, 90, 213, 0.4)",
      },
      backgroundImage: {
        gradientFancy: "linear-gradient(to right, #7B4397, #DC2430)",
      },
    },
  },
  plugins: [forms, typography],
};

export default config;
