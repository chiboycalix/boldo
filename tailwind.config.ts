/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "3xs": "276px",
      "2xs": "376px",
      xs: "431px",
      sm: "641px",
      md: "769px",
      ipad: "821",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1441px",
      "3xl": "1537px",
      "4xl": "1963px",
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "28px",
      xl: "36px",
      "2xl": "44px",
      "3xl": "48px",
      "4xl": "52px",
      "5xl": "60px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
