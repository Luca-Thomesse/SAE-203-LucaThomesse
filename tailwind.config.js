module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
        "colors": {
          "Orange": "#ff5c00",
          "Gris": "#333333",
          "Vert": "#3e5338",
          "Bleu": "#2a404c",
          "Blanc": "#faffff"
        }
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        "fontFamily": {
          "zilla-slab": "Zilla Slab",
          "sarabun": "Sarabun"
        }
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
