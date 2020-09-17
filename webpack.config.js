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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ]
            }
          }
        ]
      }, {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
