'use strict'

const path = require('path')

module.exports = {

  entry: './src/index.jsx',

  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    alias: {
      Helpers$: path.resolve(__dirname, 'src/helpers.js'),
      Styles$: path.resolve(__dirname, 'src/css/index.scss'),
      Actions: path.resolve(__dirname, 'src/actions'),
      Constants: path.resolve(__dirname, 'src/constants'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Reducers: path.resolve(__dirname, 'src/reducers')
    }
  },

}