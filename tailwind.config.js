/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'ti_img': "url('./public/ti.png')",
      },
      fontFamily:{
        IBMPlex:['IBM_Plex_Mono', "monospace"],
      }
    },
  },
  plugins: [],
}

