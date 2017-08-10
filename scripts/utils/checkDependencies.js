'use strict';

/**
 * Check availability and version at run time instead of using peerDependencies
 */

const getPackageVersion = require('./getPackageVersion');
const GfsDocError=require('./error');
const chalk = require('chalk');

const MIN_WEBPACK_VERSION = 1;
const MIN_BABEL_VERSION = 6;
const MIN_BABEL_LOADER_VERSION = 6;
const MIN_BABEL_CORE_VERSION = 6;


const webpackVersion = getPackageVersion('webpack');
const babelVersion = getPackageVersion('babel');
const babelLoaderVersion = getPackageVersion('babel-loader');
const babelCoreVersion = getPackageVersion('babel-core');

if (!webpackVersion) {
	printErrorAndExit('Webpack is required for gfs-doc, please add it to your project');
} else if (!babelVersion) {
	printErrorAndExit('Babel is required for gfs-doc, please add it to your project')
}
else if (babelVersion < MIN_BABEL_VERSION) {
	printErrorAndExit(`Babel${babelVersion} is not supported by gfs-doc, the minimum version is ${MIN_BABEL_VERSION}`)
}
else if (!babelLoaderVersion) {
	printErrorAndExit(`Babel-Loader is required for gfs-doc, please add it to your project`)
}
else if (babelLoaderVersion < MIN_BABEL_LOADER_VERSION) {
	printErrorAndExit(`Babel-Loader${babelLoaderVersion} is not supported by gfs-doc, the minimum version is ${MIN_BABEL_LOADER_VERSION}`)
}
else if (!babelCoreVersion) {
	printErrorAndExit('Babel-Core is required for gfs-doc, please add it to your project')
}
else if (babelCoreVersion < MIN_BABEL_CORE_VERSION) {
	printErrorAndExit(`Babel-Core${babelCoreVersion} is not supported by gfs-doc, the minimum version is ${MIN_BABEL_CORE_VERSION}`)
}


function printErrorAndExit(msg){
	console.error(chalk.bold.red('error: --------------------------------------------------------------------------'));
	console.error(chalk.bold.red('error: An uncaught gfs-doc error has occurred, stack trace given below'));
	console.error(chalk.bold.red('error: '+ msg));
	console.error(chalk.bold.red('error: --------------------------------------------------------------------------'));
	process.exit(1);
}
