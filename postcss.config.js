var webpack = require('webpack');
var postcssImport = require('postcss-import');
var postcssSassyMixins = require('postcss-sassy-mixins');
var postcssCSSNext = require('postcss-cssnext');
var config = require('./webpack/common.config.js');

module.exports = {
  plugins: [
    postcssImport({
      path: config.context,
      addDependencyTo: webpack
    }),
    postcssSassyMixins(),
    postcssCSSNext({
      browsers: ['last 10 versions']
    })
  ]
};
