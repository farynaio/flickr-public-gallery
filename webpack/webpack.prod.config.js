/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SwigWebpackPlugin = require('swig-webpack-plugin');

const config = require('./webpack.base.config.js');

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false
    }
  }),
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true
  })
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': 'production'
  }),
  new SwigWebpackPlugin({
    beautify: true,
    data: {
      cdn: ''
    }
  })
]

module.exports = config;
