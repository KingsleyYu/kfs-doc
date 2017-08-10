'use strict';

const semverUtils = require('semver-utils');

/**
 * Return installed npm package version.
 * @param {package:npm installed package name}
 * @return {number}
 */
module.exports = function getVersion(name) {
	try {
		return Number(semverUtils.parseRange(require(`${name}/package.json`).version)[0].major);
	} catch (err) {
		return undefined;
	}
};
