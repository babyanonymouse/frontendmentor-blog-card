/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        back: "hsl(47, 88%, 63%)",
        gray: "hsl(0, 0%, 42%)",
      },
      boxShadow: {
        custom: "10px 10px 0 0 rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        body: ["Figtree", "sans-serif"],
      },
      screens: {
        sm: "375px", // mobile
        lg: "1440px", // desktop
      },
    },
  },
  plugins: [],
};
