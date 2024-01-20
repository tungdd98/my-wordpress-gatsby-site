/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50",
        blue: {
          100: "#003366",
        },
        pink: {
          100: "#f3525a",
        },
      },
      container: {
        screens: {
          "2xl": "1312px",
        },
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
