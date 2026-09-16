import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8dcbff",
          400: "#57adff",
          500: "#2f8bff",
          600: "#1968f5",
          700: "#1552e0",
          800: "#1843b5",
          900: "#193b8f",
          950: "#142657",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1b9c9",
          400: "#8691aa",
          500: "#67728e",
          600: "#525b75",
          700: "#434a60",
          800: "#3a3f51",
          900: "#232631",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.08)",
        soft: "0 8px 24px rgba(20, 38, 87, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
