'use strict';

var path = require('path');
var webpack = require('webpack');
var nib = require('nib');

var config = require('./config');

if (!config.build) {
	module.exports = {
		devtool: config.debug ? 'eval' : null,
		resolve: {
			extensions: ['', '.js', '.jsx']
		},
		entry: [
			'webpack-hot-middleware/client',
			'babel-polyfill',
			'./' + config.root + '/app/index'
		],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/dist/'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loaders: ['react-hot', 'babel'],
					include: [
						path.resolve(__dirname, config.root),
					]
				},
				{
					test: /\.jsx$/,
					loaders: ['react-hot', 'babel'],
					include: [
						path.resolve(__dirname, config.root),
					]
				},
				{
					test: /\.css$/,
					loader: 'style!css?localIdentName=' + config.css
				},
				{
					test: /\.styl$/,
					loader: 'style!css?localIdentName=' + config.css + '!stylus?paths=node_modules/bootstrap-stylus/stylus/'
				}
    		]
		},
		stylus: {
			use: [nib()],
			import: ['~nib/lib/nib/index.styl'],
			compress: config.debug ? false : true
		},
		plugins: [
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin()
		]
	}
} else {
	module.exports = {
		devtool: config.debug ? 'inline-sourcemap' : null,
		resolve: {
			extensions: ['', '.js', '.jsx']
		},
		output: {
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loaders: ['babel'],
					include: [
						path.resolve(__dirname, config.root),
					]
				},
				{
					test: /\.jsx$/,
					loaders: ['babel'],
					include: [
						path.resolve(__dirname, config.root),
					]
				},
				{
					test: /\.css$/,
					loader: 'style!css?localIdentName=' + config.css
				},
				{
					test: /\.styl$/,
					loader: 'style!css?localIdentName=' + config.css + '!stylus?paths=node_modules/bootstrap-stylus/stylus/'
				}
    		]
		},
		stylus: {
			use: [nib()],
			import: ['~nib/lib/nib/index.styl'],
			compress: config.debug ? false : true
		},
		plugins: config.debug ? [] : [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.NoErrorsPlugin()
		]
	}
}