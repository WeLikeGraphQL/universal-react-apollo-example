/* eslint-disable no-var */
var config = require('./common.config.js');

module.exports = [
  {
    // eval - Each module is executed with eval and //@ sourceURL.
    devtool: 'eval',
    // The configuration for the client
    name: 'browser',
    context: config.context,
    // Multiple entry with hot loader
    // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/webpack.config.multientry.js
    entry: './client',
    output: {
      // The output directory as absolute path
      path: config.assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: 'app.js',
      // The output path added to assets in Html.js
      publicPath: config.publicPath
    },
    module: {
      loaders: config.commonProdLoaders
    },
    postcss: config.commonPostCSS,
    resolve: config.commonResolve,
    plugins: config.commonProdPlugins
  },
  {
    name: 'server',
    context: config.context,
    target: 'node',
    entry: './server',
    output: {
      // The output directory as absolute path
      path: config.assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: 'server.js',
      // The output path from the view of the Javascript
      publicPath: config.publicPath,
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: config.commonProdLoaders.concat([
        {
          test: /wow\.js$/,
          loader: 'null'
        }
      ])
    },
    postcss: config.commonPostCSS,
    resolve: config.commonResolve,
    plugins: config.commonProdPlugins,
    externals: [
      {
        'isomorphic-fetch': {
          root: 'isomorphic-fetch',
          commonjs2: 'isomorphic-fetch',
          commonjs: 'isomorphic-fetch',
          amd: 'isomorphic-fetch'
        }
      }
    ]
  }
];
