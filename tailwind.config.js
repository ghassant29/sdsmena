/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "white-gradient":
          "linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0))",
      },
      colors: {
        primary: "#333333",
        secondary: "#1F1F1F",
        tertiary: "#a0a0a0",
        light: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
