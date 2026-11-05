import type { Config } from "tailwindcss";

// Paleta: estrutura Black Premium (referência Rafael Santos) + identidade cromática da JA.
// "white" é sobrescrito pelo ivory da JA para aquecer todos os textos e transparências.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        white: "#F4EFE5",
        bg: "#080808",
        card: "#11100E",
        cardsoft: "#0D0C0B",
        fg: "#F4EFE5",
        muted: "#AAA095",
        line: "rgba(229,210,165,0.10)",
        champagne: "#D8C59A",
        gold: {
          DEFAULT: "#C8A55C",
          deep: "#9E7D3F",
          light: "#DDC27F",
        },
        olive: {
          DEFAULT: "#303629",
          deep: "#1B2019",
        },
        taupe: {
          DEFAULT: "#70675C",
          deep: "#211E1A",
        },
        ivory: {
          DEFAULT: "#F4EFE5",
          deep: "#E9E1D1",
        },
        stone: "#AAA095",
        ink: "#11100E",
        whatsapp: "#16a34a",
      },
      maxWidth: {
        page: "1200px",
      },
      boxShadow: {
        card: "0 30px 60px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
