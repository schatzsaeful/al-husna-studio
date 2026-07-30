import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        studio: {
          dark: "#0F172A",
          card: "#1E293B",
          border: "#334155",
          accent: "#6366F1",
          cyan: "#06B6D4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
