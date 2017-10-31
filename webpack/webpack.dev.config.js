/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SwigWebpackPlugin = require('swig-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard');

const baseConfig = require('./webpack.base.config.js');

const config = Object.assign({}, baseConfig);

config.plugins = [
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': 'development'
  }),
  // new SwigWebpackPlugin({
  //   filename: './src#<{(|.html',
  //   beautify: true,
  //   data: {
  //     cdn: 'http://localhost:8080/'
  //   }
  // }),
  // new DashboardPlugin(),
  // new webpack.HotModuleReplacementPlugin()
];

config.devServer = {
  contentBase: path.join(__dirname, '../dist'),
  compres: true,
  port: 9000
};

module.exports = config;
