/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const path = require('path');
const sharp = require('responsive-loader/sharp');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'react-dev-utils/webpackHotDevClient',
    './src/index.js'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.scss' ]
  }
};
