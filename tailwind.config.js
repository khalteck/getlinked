/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "660px",
      md: "800px",
      lg: "1204px",
      xl: "1280px",
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      unica: ["Unica One", "cursive"],
    },
    extend: {
      backgroundImage: {
        metrix: "url('/images/metrix.png')",
        flare3: "url('/images/flare3.png')",
        flare3mob: "url('/images/flare3mob.png')",
        // contact: "url('/images/contact.jpg')",
        // service: "url('/images/house.jpg')",
      },
    },
  },
  plugins: [],
};
