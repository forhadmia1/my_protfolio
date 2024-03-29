module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00CF5D",
          secondary: "#FFFFFF",
          accent: "#1D293A",
          neutral: "#DDDFE2",
          "base-100": "#111A28",
        }
      }
    ],
  },
  plugins: [require("daisyui")],
}
