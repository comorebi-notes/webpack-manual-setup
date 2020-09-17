const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const outputPath = path.resolve(__dirname, 'public')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath
  }
})
