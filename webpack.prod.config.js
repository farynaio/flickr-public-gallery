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
    'process.env.NODE_ENV': "'production'"
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
];

config.module.rules.push({
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    'url-loader?limit=10000',
    {
      loader: 'img-loader',
      options: {
        enabled: process.env.NODE_ENV === 'production',
        gifsicle: {
          interlaced: false
        },
        mozjpeg: {
          progressive: true,
          arithmetic: false
        },
        optipng: false, // disabled
        pngquant: {
          floyd: 0.5,
          speed: 2
        },
        svgo: {
          plugins: [
            { removeTitle: true },
            { convertPathData: false }
          ]
        }
      }
    }
  ]
});

module.exports = config;
