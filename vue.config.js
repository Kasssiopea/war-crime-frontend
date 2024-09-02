const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve('timers-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: false, // Используйте пустой модуль вместо полифила,

      },
    },
  },
  devServer: {
    proxy: {
      '/admin': {
        target: 'http://127.0.0.1:8000',  // Адрес вашего сервера Django
        changeOrigin: true,
      },
      '/media': {
        target: 'http://127.0.0.1:8000',  // Адрес вашего сервера Django
        changeOrigin: true,
      },
    },

  },
})


