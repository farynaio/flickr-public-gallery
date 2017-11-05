/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
const path = require('path');
const webpack = require('webpack');
const { HotModuleReplacementPlugin } = webpack;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack/config.js');

config.devtool = 'eval';
config.entry = [
	'react-hot-loader/patch',
	'./src/index.js'
];

config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'development'"
  }),
  new webpack.LoaderOptionsPlugin({
    debug: true
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

config.stats = {
	colors: true,
	modules: true,
	reasons: true,
	errorDetails: true,
	cachedAssets: true,
	cached: true
};

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
config.module.rules.push({
  test: /\.scss$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader', options: { modules: true } },
    {
      loader: 'sass-loader',
      options: {
        includePaths: [ path.resolve(__dirname, '../src/styles')]
      }
    }
  ]
});

config.devServer = {
  contentBase: path.resolve(__dirname, 'dist'),
  watchContentBase: true,
  compress: true,
  open: false,
  hot: true,
  port: 9000
};

module.exports = config;
