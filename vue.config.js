const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './src'),
        "@pages": path.resolve(__dirname, './src/pages'),
        "@components": path.resolve(__dirname, './src/components'),
      },
    },
    plugins: [
      new Dotenv(),
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "src/style/index"
          `
      }
    }
  }
}
