/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navBarColor: "#d6d3d1", // Add your custom color here
        fullScreenBg: "#f3f4f6",
        cardColor: "#f8fafc",
        customPurple: "#6d28d9",
        counsellingCard: "#7dd3fc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
