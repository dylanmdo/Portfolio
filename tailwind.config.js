/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "tailwind.config.cjs",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sf-ui-display': ['SF UI Display', 'sans-serif'],
      }
    }
  },
  plugins: [],
};