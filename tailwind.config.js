
module.exports = {

  content: [
    './app.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {

    extend: {
      gridTemplateColumns: {
        'test': 'minmax(0, 1fr) minmax(0, 40.25rem) minmax(0, 1fr)',
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
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "",
  },
}
