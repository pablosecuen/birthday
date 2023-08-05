/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('./assets/medusaimg/space.webp')",
        columns: "url('./assets/medusaimg/columns.png')",
        card: "url('./assets/cards/cardbg-01.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ["artemis", "elektra"],
        sans: ["elektra"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
