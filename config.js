'use strict';

var config = {
	root: 'client',
	mode: process.env.NODE_ENV,
	debug: process.env.NODE_ENV === 'production-debug' || process.env.NODE_ENV !== 'production',
	build: process.env.NODE_ENV === 'production-debug' || process.env.NODE_ENV === 'production',
	css: null
}

config.debug ? config.css = '[name]__[local]___[hash:base64:5]' : config.css = '[hash:base64:5]';

module.exports = config;