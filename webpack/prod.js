/* eslint-disable object-shorthand, no-var, func-names */
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
    test: /\.js?$/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements'
      ]
    },
    include: path.join(__dirname, '..', 'app')
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
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css?importLoaders=1&localIdentName=[path]_[name]_[local]!postcss'),
    include: path.join(__dirname, '..', 'app')
  },
  {
    test: /flag-icon\.css$/,
    loader: ExtractTextPlugin.extract('css')
  },
  {
    test: /wow\.js$/,
    loader: 'null'
  }
];

var commonPlugins = [
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

var postCSSConfig = function () {
  return [
    postcssImport({
      path: path.join(__dirname, '..', 'app'),
      addDependencyTo: webpack
    }),
    postcssSassyMixins(),
    postcssCSSNext({
      browsers: ['last 10 versions']
    })
  ];
};

module.exports = [
//   {
//   // eval - Each module is executed with eval and //@ sourceURL.
//   devtool: 'eval',
//   // The configuration for the client
//   name: 'browser',
//   context: context,
//   // Multiple entry with hot loader
//   // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/webpack.config.multientry.js
//   entry: './client',
//   output: {
//     // The output directory as absolute path
//     path: assetsPath,
//     // The filename of the entry chunk as relative path inside the output.path directory
//     filename: 'app.js',
//     // The output path added to assets in Html.js
//     publicPath: publicPath
//   },
//   module: {
//     loaders: commonLoaders
//   },
//   postcss: postCSSConfig,
//   resolve: {
//     root: [path.join(__dirname, '..', 'app')],
//     moduleDirectories: ['../node_modules'],
//     extensions: ['', '.js', '.css']
//   },
//   plugins: commonPlugins
// },
  {
    name: 'server',
    context: context,
    target: 'node',
    entry: './server',
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: 'server.js',
      // The output path from the view of the Javascript
      publicPath: publicPath,
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: commonLoaders
    },
    postcss: postCSSConfig,
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      moduleDirectories: ['../node_modules'],
      extensions: ['', '.js', '.css']
    },
    plugins: commonPlugins
  }
];
