'use strict';

const semverUtils = require('semver-utils');

/**
 * Return installed Babel-Loader version.
 *
 * @return {number}
 */
module.exports = function getWebpackVersion() {
	try {
		return Number(semverUtils.parseRange(require('babel-loader/package.json').version)[0].major);
	} catch (err) {
		return undefined;
	}
};
