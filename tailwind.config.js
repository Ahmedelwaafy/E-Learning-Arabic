/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Tenor Sans", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        grad: "linear-gradient(25deg, rgba(231,235,239,1) 0%, rgba(183,226,247,1) 100%)",
      }),

      colors: {
        primary: "#ffffff",
        secondary: "#eafcff",
        accent: "#6ba6ff",
        "light-brown": "#C1B0A8 ",
      },
    },
    screens: {
      xxl: { max: "1500px" },
      xl: { max: "1200px" },
      lg: { max: "1060px" },
      amd: { max: "900px" },
      md: { max: "768px" },
      sm: { max: "550px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
