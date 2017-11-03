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
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          { loader: 'url-loader', options: { limit: 8192, fallback: `responsive-loader?adapter=${sharp}` }},
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
              optipng: false,
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
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.scss' ]
  }
};
