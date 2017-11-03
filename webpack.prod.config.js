/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack/config.js');

config.devtool = 'source-map';
config.entry = [
  './src/index.js'
];

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
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'production'"
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
];

config.module.rules.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader'
});

module.exports = config;
