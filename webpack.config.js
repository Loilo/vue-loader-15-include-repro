const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')

module.exports = {
  entry: './src/EmptyComponent.vue',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [
          resolve(__dirname, 'src')
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}