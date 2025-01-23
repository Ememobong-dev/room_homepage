import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        leagueSpartanReg: ["league-spartan-regular", "sans-serif"],
        leagueSpartanBold: ["league-spartan-bold", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
