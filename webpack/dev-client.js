/* eslint-disable object-shorthand, no-var, func-names, global-require */
var path = require('path');
var webpack = require('webpack');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

var config = require('./common.config.js');

module.exports = {
  // if you need debugging change to any source-map: https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',
  name: 'browser',
  context: config.context,
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './client'
    ]
  },
  output: {
    // The output directory as absolute path
    path: config.assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: '[name].js',
    // The output path added to assets in Html.js
    publicPath: config.publicPath
  },
  module: {
    rules: config.commonLoaders.concat([
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: "[path]_[name]_[local]"
            }
          },
          'postcss-loader'
        ],
        include: config.context
      },
      {
        test: /flag-icon\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ])
  },
  resolve: config.commonResolve,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: path.join(__dirname, '..', '.stylelintrc'),
      context: config.context,
      files: '**/*.css'
    }),
    new webpack.DllReferencePlugin({
      context: config.context,
      manifest: require('../dll/vendors-manifest.json')
    }),
    new CopyPlugin([
      { from: '../vendor/bootstrap.min.css', to: 'styles' },
      { from: '../vendor/animate.min.css', to: 'styles' },
      { from: '../app/favicon-32x32.png' }
    ])
  ]
};
