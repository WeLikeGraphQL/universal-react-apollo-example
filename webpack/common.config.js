/* eslint-disable no-var, vars-on-top */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

var assetsPath = path.join(__dirname, '..', 'dist');
var publicPath = '/';
var context = path.join(__dirname, '..', 'app');

var commonLoaders = [
  // {
  //   test: /isIterable/,
  //   use: 'imports?Symbol=>false'
  // },
  {
    test: /\.(jpg|ttf|eot|woff2|woff|svg|png)?$/,
    use: 'url-loader'
  },
  {
    test: /\.js?$/,
    use: 'babel-loader'
  }
];

var commonProdLoaders = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: "[path]_[name]_[local]"
          }
        },
        'postcss-loader'
      ]
    }),
    include: context
  },
  {
    test: /flag-icon\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css-loader'
    })
  }
];
commonProdLoaders = commonProdLoaders.concat(commonLoaders);

var commonResolve = {
  modules: [
    context,
    'node_modules'
  ],
  extensions: ['.js', '.css']
};

// var commonPostCSS = [
//   postcssImport({
//     path: context,
//     addDependencyTo: webpack
//   }),
//   postcssSassyMixins(),
//   postcssCSSNext({
//     browsers: ['last 10 versions']
//   })
// ];

var commonProdPlugins = [
  new ExtractTextPlugin({filename: 'styles/main.css', allChunks: true }),
  // new webpack.LoaderOptionsPlugin({
  //   options: {
  //     postcss: [
  //       postcssImport({
  //         path: context,
  //         addDependencyTo: webpack
  //       }),
  //       postcssSassyMixins(),
  //       postcssCSSNext({
  //         browsers: ['last 10 versions']
  //       })
  //     ]
  //   }
  // }),
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
  commonProdPlugins
};
