const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

  entry: './src/index.jsx',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  
  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: './public'
      }
    }),
    
//    new webpack.DefinePlugin({
//      'process.env': {
//        'NODE_ENV': JSON.stringify('production')
//      }
//    })
  ]
};