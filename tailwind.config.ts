import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        mublack: "#1A2C2A",
        mugreen: "#156863",
        mugray: "#f1f1f1",
      },
    },
  },
  plugins: [],
} satisfies Config;
