'use strict';

var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var clc = require('cli-color');

var webpackConfig = require('./webpack.config');
var config = require('./config');

var app = express();
var port = 3000;
var compiler = webpack(webpackConfig);

if (!config.build) {
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));

	app.use(webpackHotMiddleware(compiler));
} 

app.use(express.static(__dirname + '/' + config.root));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/' + config.root + '/index.html');
});

app.listen(port, function (error) {
	if (error) {
		console.error(clc.red(error))
	} else {
		console.log(clc.green('-------------------------------------------'));
		console.log(clc.green('DevServer: ') + clc.yellow('http://localhost:' + port));
		console.log(clc.green('Mode: ') + clc.yellow(config.mode));
		console.log(clc.green('Debug: ') + clc.yellow(config.debug));
		console.log(clc.green('-------------------------------------------'));
	}
});