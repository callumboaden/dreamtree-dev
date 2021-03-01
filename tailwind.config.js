module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('../images/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
