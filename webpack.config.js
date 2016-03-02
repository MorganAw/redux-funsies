var path = require('path');
var webpack = require('webpack');

var module_path = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/client/client'
  ],
  output: {
    path: path.join(__dirname, 'static', 'webpack'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ],
    preLoaders: [{
      test: /\.jsx$/,
      exclude: module_path,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}