const path = require('path')

const pluginName = 'docsify-plugin-toc'

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false
  },
  entry: './src/index.js',
  output: {
    filename: `${pluginName}.min.js`,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
