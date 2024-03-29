export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'むらさん',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    /*'@/assets/css/reset.css',*/
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-scrollto.js',
    {src: '@/plugins/vue-js-modal.js', mode: 'client'},
    {src: '@/plugins/vue-carousel', ssr: false},
    '@/plugins/devicon.js',
    '@/plugins/fontawesome.js',
    '~/plugins/vue-youtube'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-content-git',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  env: {
    NUXT_GOOGLE_ANALYTICS_ID: process.env.NUXT_GOOGLE_ANALYTICS_ID
  },

  googleAnalytics: {
    id: process.env.NUXT_GOOGLE_ANALYTICS_ID
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.NUXT_GOOGLE_ANALYTICS_ID
    }
  },

  content: {
    nestedProperties: ['general.tags.name'],
    markdown: {
      remarkPlugins: [
        'remark-emoji',
        [
          'remark-autolink-headings',
          {
            behavior: "append",
            content: {
              type: "element",
              tagName: "font-awesome-icon",
              properties: {
                icon: ["fa-solid", "fa-link"],
              }
            }
          },
          {
            behavior: "append",
            tagName: 'nuxt-link'
          }
        ]
      ],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-custom-properties": false
      }
    },
    transpile: ['devicon']
  },

  generate: {
    /*async ready() {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['slug']).fetch()

      console.log(files)
    },*/
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
    fallback: true
  }

}