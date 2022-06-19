import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   modules: ['@nuxtjs/color-mode'],
    css: ["@/assets/css/main.css"],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },

    colorMode: {
      preference: 'light', 
      dataValue: 'theme',
    },

    head:{
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }, 
      ],
    },
  });