const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/server',
    target: 'node',
    node: {
      __dirname: false
    },
    output: {
      filename: 'server.js',
      path: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: './src/views', to: './views'},
        {from: './src/public/images', to: './public/images'}
      ])
    ]
  }