import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        icons: "url('/logo/logo.png')",
        screens: "url('/other/screens.png')",
      },
      screens: {
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1440px",

        /// Tablet ////

        landScapeIpad: "1024px",
        landScapeIpadPro: "1112px", 
        landScapeNexus7: "960px",

        ipad: "945px",
        ipadPro: "834px",
        ipadMini: "768px",
        nexus7: "710px",

        /// IPhones ////

        landScape8Plus: "736px",
        landScape8: "720px",
        landScape5: "568px",

        iPhone8Plus: "414px",
        iPhone8: "375px",
        iPhone5: "320px",
        Nokia8110: "240px",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-seri"],
        fjalla: ["Fjalla One", "sans-seri"],
        ojuju: ["Ojuju", "sans-seri"],
        reddit: ["Reddit Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
