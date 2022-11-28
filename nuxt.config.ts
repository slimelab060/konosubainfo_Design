
const title = 'このファンまとめ'
const description = 'このファンの攻略、キャラなどの情報まとめサイトです。'
const url = 'http://localhost:3000'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'min-h-screen'
      },
      title,
      meta: [
        //これからの情報はまだ正式なものではないです。
        { hid: 'charset', charset: 'utf-8' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:site_name', property: 'og:site_name', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: url },
        //{ hid: 'og:image', property: 'og:image', content: `${url}/preview.png` },

        //TwitterCard(未完成)
        { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
      ],
    }
  },

   modules: [
            '@nuxtjs/tailwindcss',
            '@nuxt/content',
            '@nuxtjs/color-mode',
            //'@nuxtjs/robots',
            '@nuxt/image-edge',
            '@vueuse/nuxt',
            ],


    css: ["@/assets/css/main.css"],
    build: {
      transpile: ['swiper'],
    },

postcss: {
   plugins: { tailwindcss: {} }
},

    colorMode: {
      preference: 'light', 
      classSuffix: '',
      dataValue:  'theme',
    },

  telemetry: false,

  });