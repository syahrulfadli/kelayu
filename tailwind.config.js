module.exports = {
  content: [
    "./layouts/**/*.{html,js,svg}",
    "./assets/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
