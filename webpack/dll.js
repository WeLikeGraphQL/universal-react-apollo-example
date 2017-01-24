/* eslint-disable object-shorthand, no-var, func-names */
var path = require('path');
var webpack = require('webpack');

var config = require('./common.config.js');

module.exports = {
  entry: {
    vendors: [path.join(__dirname, '..', 'vendor', 'vendors.js')]
  },
  output: {
    path: path.join(__dirname, '..', 'dist', 'dll'),
    filename: 'dll.[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '..', 'dll', '[name]-manifest.json'),
      name: '[name]',
      context: config.context
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      __DEVCLIENT__: true,
      __DEVSERVER__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  resolve: config.commonResolve
};
