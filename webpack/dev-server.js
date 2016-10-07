/* eslint-disable object-shorthand, no-var, func-names, global-require */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  name: 'server',
  context: path.join(__dirname, '..', 'app'),
  target: 'node',
  entry: './server',
  output: {
    // The output directory as absolute path
    path: path.join(__dirname, '..', 'dist'),
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'server.js',
    // The output path added to assets in Html.js
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /isIterable/,
        loader: 'imports?Symbol=>false'
      },
      {
        test: /\.js?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        include: path.join(__dirname, '..', 'app')
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loaders: [
          'css?importLoaders=1&localIdentName=[path]_[name]_[local]',
          'postcss'
        ],
        include: path.join(__dirname, '..', 'app')
      },
      {
        test: /\.(jpg|ttf|eot|woff2|woff|svg|png)?$/,
        loader: 'url-loader'
      },
      {
        test: /flag-icon\.css$/,
        loaders: [
          'css'
        ]
      },
      {
        test: /wow\.js$/,
        loader: 'null'
      }
    ]
  },
  resolve: {
    root: [path.join(__dirname, '..', 'app')],
    moduleDirectories: ['../node_modules'],
    extensions: ['', '.js', '.css']
  },
  node: {
    fs: 'empty'
  }
};
