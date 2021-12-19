const path = require("path");

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
    }
  },
}
