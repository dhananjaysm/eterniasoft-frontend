import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      white: "#FFFFFF ",
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
      },
      amber: {
        300: "#fde68a",
        400: "#fcd34d",
        500: "#fbbf24",
        600: "#F59E0B",
      },
      green: {
        50: "#F0FDF4",
        100: "#DCFCE7",
        200: "#BBF7D0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
      },
      stone: {
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#292524",
        900: "#1c1917",
        950: "0c0a09",
      },
      purple: {
        600: "#9333EA",
        700: "#7E22CE",
      },
      sky: {
        600: "#02847C",
        700: "#0369A1",
      },
      purple2: {
        600: "#C026D3",
        700: "#A21CAF",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.8rem",
      base: "0.9rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
  ],
};
export default config;
