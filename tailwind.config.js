module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E6C6D8",
        paper: "#FFFDF8",
        ink: "#111827"
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}