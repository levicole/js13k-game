var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/game.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'game.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2016']
              }
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    publicPath: './build'
  }
};
