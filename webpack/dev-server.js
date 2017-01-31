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
    rules: config.commonLoaders.concat([
      {
        test: /\.css$/,
        use: [
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
          'css-loader'
        ]
      },
      {
        test: /wow\.js$/,
        use: 'null-loader'
      }
    ])
  },
  resolve: config.commonResolve,
  node: {
    fs: 'empty'
  }
};
