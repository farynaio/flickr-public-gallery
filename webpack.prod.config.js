/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack/config.js');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

config.devtool = 'source-map';
config.entry = [
  './src/index.js'
];

config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'production'"
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false
    }
  }),
	extractSass,
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

config.module.rules.push({
	test: /\.scss$/,
	use: extractSass.extract({
		use: [
			{ loader: 'css-loader', options: { modules: false } },
			{
				loader: 'sass-loader',
				options: {
					includePaths: [ path.resolve(__dirname, '../src/styles')]
				}
			}
		],
		fallback: 'style-loader'
	})
});

module.exports = config;
