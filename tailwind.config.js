/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: "#0ca678",
      violet: "#44344F",
      purple: "#564D80",
      blue: "#98A6D4",
      gray: "#EBF2FA",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
