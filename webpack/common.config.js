/* eslint-disable no-var, vars-on-top */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssImport = require('postcss-import');
var postcssSassyMixins = require('postcss-sassy-mixins');
var postcssCSSNext = require('postcss-cssnext');
var CopyPlugin = require('copy-webpack-plugin');

var assetsPath = path.join(__dirname, '..', 'dist');
var publicPath = '/';
var context = path.join(__dirname, '..', 'app');

var commonLoaders = [
  {
    test: /isIterable/,
    loader: 'imports?Symbol=>false'
  },
  {
    test: /\.json?$/,
    loader: 'json'
  },
  {
    test: /\.(jpg|ttf|eot|woff2|woff|svg|png)?$/,
    loader: 'url-loader'
  },
  {
    test: /\.js?$/,
    loader: 'babel',
    include: context
  }
];

var commonProdLoaders = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css?importLoaders=1&localIdentName=[path]_[name]_[local]!postcss'),
    include: context
  },
  {
    test: /flag-icon\.css$/,
    loader: ExtractTextPlugin.extract('css')
  }
];
commonProdLoaders = commonProdLoaders.concat(commonLoaders);

var commonResolve = {
  root: [context],
  moduleDirectories: ['../node_modules'],
  extensions: ['', '.js']
};

var commonPostCSS = [
  postcssImport({
    path: context,
    addDependencyTo: webpack
  }),
  postcssSassyMixins(),
  postcssCSSNext({
    browsers: ['last 10 versions']
  })
];

var commonProdPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('styles/main.css', { allChunks: true }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compressor: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    __DEVCLIENT__: false,
    __DEVSERVER__: false,
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new CopyPlugin([
    { from: '../vendor/bootstrap.min.css', to: 'styles' },
    { from: '../vendor/animate.min.css', to: 'styles' }
  ])
];

module.exports = {
  assetsPath,
  publicPath,
  context,
  commonLoaders,
  commonProdLoaders,
  commonResolve,
  commonPostCSS,
  commonProdPlugins
};
