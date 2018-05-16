module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '北京盈泰正和生物科技有限公司',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '北京盈泰正和生物科技有限公司是一家以互联网电子商务为发展起点，集研发、生产、销售的综合性企业，公司在内蒙、吉林、北京等地设立近千人运营团队，并在内蒙分设技术研发、生产团队。承载崇尚科学，关爱生命，以人为本，服务大众，至诚至信的秉性理念，致力于改善人类生活品质，实现健康新生活。'
      },
      {
        name: 'keywords',
        content: '保健营养,保健食品,派普肽,大豆蛋白,盈泰正和,北京盈泰正和'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  plugins: [
      { src: '~plugins/nuxt-video-player-plugin.js', ssr: false },
      { src: '~plugins/nuxt-swiper-plugin.js', ssr: false },
      { src: '~plugins/nuxt-velocity-plugin.js', ssr: false },
  ],
  css: [
    'video.js/dist/video-js.css',
    'swiper/dist/css/swiper.css',
    '~assets/css/style.css',
    
  ],

  build: {
      vendor: ['axios']
  },
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', {
      css: false
    }],
  ],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
