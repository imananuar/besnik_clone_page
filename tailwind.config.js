module.exports = {
  content: ["./src/**/*.{html,js", "./public/index.html"],
  theme: {
    fontFamily: {
      'bai-jamjuree': ['Bai Jamjuree', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },

    letterSpacing: {
      'little-wide': '0.04',
      'wider': '.05em',
      'even-wider': '.28em',
    },

    extend: {
      dropShadow: {
        '4xl': '0 35px 35px rgba(207,237,255,1)',
      }
    }
  },
  plugins: [],
}
