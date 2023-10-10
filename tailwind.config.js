/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'cianOscuro': "#116A7B",
      'shadeBrown': '#CDC2AE',
      'springBud' : '#ECE5C7',
      'blueGreen': '#C2DEDC',
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
