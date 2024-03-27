import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",

        /// Tablet ////

        ipad: "945px",
        ipadPro: "834px",
        ipadMini: "768px",
        nexus7: "710px",

        /// IPhones ////

        landScape8Plus: "736px",
        landScape8: "667px",
        landScape5: "567px",

        iPhone8Plus: "414px",
        iPhone8: "375px",
        iPhone5: "320px",
        Nokia8110: "240px",
      },
    },
  },
  plugins: [],
};
export default config;
