/* eslint-disable no-var */
var config = require('./common.config.js');

module.exports = {
  name: 'server',
  context: config.context,
  target: 'node',
  entry: './server',
  output: {
    // The output directory as absolute path
    path: config.assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'server.js',
    // The output path added to assets in Html.js
    publicPath: config.publicPath,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: config.commonLoaders.concat([
      {
        test: /\.css$/,
        loaders: [
          'css?importLoaders=1&localIdentName=[path]_[name]_[local]',
          'postcss'
        ],
        include: config.context
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
    ])
  },
  resolve: config.commonResolve,
  node: {
    fs: 'empty'
  }
};
