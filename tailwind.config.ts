import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-400": "#ACE1AF",
        "brand-300": "#B0EBB4",
        "brand-200": "#BFF6C3",
        "brand-100": "#E0FBE2",
      },
    },
  },
  plugins: [],
} satisfies Config;
