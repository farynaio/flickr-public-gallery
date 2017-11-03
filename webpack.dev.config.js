/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack/config.js');

config.devtool = 'cheap-eval-source-map';

config.plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: true
  }),
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'development'"
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
  new DashboardPlugin(),
	new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

config.module.rules.push({
	test: /\.jsx?$/,
	include: path.resolve(__dirname, 'src'),
	use: {
		loader: 'babel-loader',
		options: {
			babelrc: false,
			cacheDirectory: true,
			presets: [ 'env', 'react', 'stage-0' ],
			plugins: [ 'transform-runtime', 'react-hot-loader/babel' ]
		}
  }
});

config.devServer = {
  contentBase: path.resolve(__dirname, '../dist'),
  watchContentBase: true,
  compress: true,
  open: false,
  hot: true,
  port: 9000
};

module.exports = config;
