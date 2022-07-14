import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   modules: ['@nuxtjs/color-mode',
             '@nuxt/content',
             '@nuxtjs/tailwindcss',
             '@vueuse/nuxt'
            ],
            
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

    meta: {      
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'このファンまとめ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  });