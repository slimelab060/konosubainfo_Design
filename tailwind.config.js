/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `Error.{js,ts,vue}`,
    `error.{js,ts,vue}`
  ],

  darkMode: 'class',

  theme: {
    extend: {
      gridTemplateColumns: {
        'content': 'minmax(0, 4fr) minmax(0, 1fr)',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },

      colors:{
        konosuba:{
        'blue': '#009ce1',
        'red': '#e4006e',
        'green': '#91c31d',
        'orange': '#ef8200',
      },
      },
    },
  },

  plugins: [
  // Docs: https://tailwindcss.com/docs/typography-plugin
  require("@tailwindcss/typography"),
  // Docs: https://daisyui.com/docs
  require("daisyui"),
  ],

daisyui: {
  styled: true,
  themes: true,
  base: true,
  utils: true,
  logs: false,
  rtl: false,
  prefix: "",
  darkTheme: "night",
},

}
