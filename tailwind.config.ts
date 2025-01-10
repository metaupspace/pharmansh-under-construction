import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00ACB1",
        "dark-black": "#0D0D0D",
        "light-gray": "#828282",
        category: "rgba(9, 15, 71, 0.45)",
        "secondary-blue": "#B8E6E7",
        text: {
          muted: "#b9b9b9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
