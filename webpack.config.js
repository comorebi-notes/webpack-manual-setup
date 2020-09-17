const path = require('path')
const outputPath = path.resolve(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'dist/main.js',
    path: outputPath
  },
  devServer: {
    contentBase: outputPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', {
                targets: { ie: 11 },
                useBuiltIns: 'entry',
                corejs: 3
              }
            ],
            '@babel/react'
          ]
        }
      }, {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 2048, // これ以下のファイルはBase64エンコードされてjsに組み込まれる
          name: './dist/images/[name]-[hash].[ext]' // hashが変更されるとファイル名も変更
        }
      }
    ]
  }
};
