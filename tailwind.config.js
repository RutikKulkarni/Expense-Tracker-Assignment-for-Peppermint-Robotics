/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#f9fafb",
          text: "#374151",
          card: "#ffffff",
          border: "#d1d5db",
        },
        dark: {
          bg: "#1f2937",
          text: "#f9fafb",
          card: "#374151",
          border: "#4b5563",
        },
      },
    },
  },
  plugins: [],
};
