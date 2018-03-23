const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [
          '/any/path/really'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}