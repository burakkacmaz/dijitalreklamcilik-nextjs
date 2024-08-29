import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      ekran200: "200px", //! benim
      ekran300: "300px", //! benim
      ekran400: "400px", //! benim
      ekran500: "500px", //! benim
      sm: "640px",
      md: "768px",
      ekran865: "865px", //! benim
      lg: "1024px",
      ekran1168: "1168px", //! benim
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      opacity: {
        54: ".54", //!
      },
      colors: {
        primary: "#344c8c",
        secondary: {
          DEFAULT: "#7c8cbc",
          100: "#6c80b3",
          200: "#647cac",
        },
        yanRenk: {
          DEFAULT: "#4CAF50",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
