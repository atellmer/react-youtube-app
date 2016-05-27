'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');
var rev = require('gulp-rev-append');
var clc = require('cli-color');

var webpackConfig = require('./webpack.config');
var config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('-------------------------------------------'));

var path = {
	root: 'client/',
	app: function () {
		return this.root + 'app/'
	},
	dist: function () {
		return this.root + 'dist/'
	}
};

var task = {
	connect: '',
	webpack: '',
	html: '',
	hashFiles: ''
};

//connect
gulp.task('connect', function () {
	task.connect = connect.server({
		root: path.root.slice(0, -1),
		port: 3000,
		livereload: true
	});
	
	return task.connect;
});

//webpack
gulp.task('webpack', function () {
	task.webpack = gulp.src(path.app() + 'index.jsx')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(path.dist()))
		.pipe(connect.reload());
		
	return task.webpack;
});

//html
gulp.task('html', function () {
	task.html = gulp.src(path.root + '*.html')
		.pipe(connect.reload());
		
	return task.html;
});

//hash-files
gulp.task('hash-files', function () {
	task.hashFiles = gulp.src(path.root + '**/*.html')
		.pipe(rev())
		.pipe(gulp.dest(function (file) {
			return file.base;
		}))
		.pipe(connect.reload());
		
	return task.hashFiles;
});

//watch
gulp.task('watch', function () {
	gulp.watch(path.app() + '**/*', ['webpack', 'hash-files']);
	gulp.watch(path.root + '*.html', ['html']);
});

gulp.task('default', [
	'connect', 
	'webpack', 
	'hash-files', 
	'watch'
]);