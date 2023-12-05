/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        one:"url('./assets/1.png')",
        two:"url('./assets/2.png')",
        three:"url('./assets/3.png')",
        four:"url('./assets/4.png')",
      },
      colors:{
        primary: "#678488",
        secondary: "#0e565a",
        textColor: "#cdf0f5"
      },
      fontFamily:{
        IBMPlex:['IBM_Plex_Mono', "monospace"],
      }
    },
  },
  plugins: [],
}

