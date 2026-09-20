export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue","sans-serif"],
        mono: ["JetBrains Mono","monospace"],
        grotesk: ["Space Grotesk","sans-serif"],
      },
      colors: {
        orange: { DEFAULT: "#FF5A00", light: "#ff7a30", dark: "#cc4800" },
      },
    },
  },
  plugins: [],
}
