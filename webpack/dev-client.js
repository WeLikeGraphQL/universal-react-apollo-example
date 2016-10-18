/* eslint-disable object-shorthand, no-var, func-names, global-require */
var path = require('path');
var webpack = require('webpack');
var postcssImport = require('postcss-import');
var postcssSassyMixins = require('postcss-sassy-mixins');
var postcssCSSNext = require('postcss-cssnext');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  cache: true,
  // if you need debugging change to any source-map: https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',
  name: 'browser',
  context: path.join(__dirname, '..', 'app'),
  entry: {
    app: ['./client', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true']
  },
  output: {
    // The output directory as absolute path
    path: path.join(__dirname, '..', 'dist'),
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: '[name].js',
    // The output path added to assets in Html.js
    publicPath: '/'
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
          presets: ['react-hmre', 'es2015', 'react', 'stage-0'],
          cacheDirectory: 'babel-cache'
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
          'style',
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
          'style',
          'css'
        ]
      }
    ]
  },
  postcss: [
    postcssImport({
      path: path.join(__dirname, '..', 'app'),
      addDependencyTo: webpack
    }),
    postcssSassyMixins(),
    postcssCSSNext({
      browsers: ['last 10 versions']
    })
  ],
  resolve: {
    // now do not have to resolve files in the project using ../.. etc.
    root: [path.join(__dirname, '..', 'app')],
    moduleDirectories: ['../node_modules'],
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new StyleLintPlugin({
      configFile: path.join(__dirname, '..', '.stylelintrc'),
      context: path.join(__dirname, '..', 'app'),
      files: '**/*.css'
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..', 'app'),
      manifest: require('../dll/vendors-manifest.json')
    }),
    new CopyPlugin([
      { from: '../vendor/bootstrap.min.css', to: 'styles' },
      { from: '../vendor/animate.min.css', to: 'styles' },
      { from: '../app/favicon-32x32.png' }
    ])
  ],
  node: {
    fs: 'empty'
  }
};

