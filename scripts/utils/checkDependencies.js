'use strict';

/**
 * Check availability and version at run time instead of using peerDependencies
 */

const getWebpackVersion = require('./getWebpackVersion');
const getBabelVersion=require('./getBabelVersion');

const MIN_WEBPACK_VERSION = 1;
const MIN_BABEL_VERSION='6.0.0';
const webpackVersion = getWebpackVersion();
const babelVersion=getBabelVersion();

if (!webpackVersion) {
	console.error('Webpack is required for Styleguidist, please add it to your project');
	process.exit(1);
} else if (babelVersion < MIN_BABEL_VERSION) {
	console.error(`Babel-Loader${babelVersion} is not supported by Styleguidist, the minimum version is ${MIN_BABEL_VERSION}`);
	process.exit(1);
}
