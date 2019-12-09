// 读取 .env 配置文件
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'CHAO 各庄',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/css/common.less',
      lang: 'less'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/axios'
    },
    {
      src: '~/plugins/style'
    },
    {
      src: '~/plugins/api'
    },
    {
      src: '~/plugins/log'
    },
    {
      src: '~/plugins/error',
      mode: 'client'
    },
    {
      src: '~/plugins/location',
      mode: 'client'
    },
    {
      src: '~/plugins/share',
      mode: 'client'
    },
    {
      src: '~/plugins/localStorage',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
    '@nuxtjs/component-cache',
    process.env.isDev ? '' : '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    prefix: '/api'
  },

  proxy: {
    '/api/': {
      target: process.env.API ? process.env.API : 'https://api.chaotag.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': ''
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, { isClient, isServer }) {
      if (isClient) {
        config.devtool = 'eval-source-map'
      } else {
        config.devtool = 'source-map'
      }
    },
    // extractCSS: process.env.NODE_ENV !== 'development',
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        autoprefixer: {
          remove: false
        }
      }
    }
  }
}
