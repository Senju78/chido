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
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        36: "9rem",
        72: "18rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [forms, typography],
};

export default config;
