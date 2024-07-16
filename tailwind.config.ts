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
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        "secondary-background": "var(--secondary-background)",
        "grey-darker": "var(--grey-darker)",
        "grey-dark": "var(--grey-dark)",
        "grey-base": "var(--grey-base)",
        "grey-light": "var(--grey-light)",
        "grey-lighter": "var(--grey-lighter)",
        "grey-neutral": "var(--grey-neutral)",
        "grey-text": "var(--grey-text)",
      },
      boxShadow: {
        button: "0 10px 18px rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
export default config;
