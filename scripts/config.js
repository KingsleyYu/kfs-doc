'use strict';

/**
 * Read, parse and validate config file or passed config.
 *
 * @param {object|string} [config] All config options or config file name or nothing.
 * @returns {object}
 */
const fs = require('fs');
const path = require('path');
const findup = require('findup');
const isString = require('lodash/isString');
const merge = require('lodash/merge');


const PKG = require(path.resolve(process.cwd(), 'package.json'));
const CONFIG_FILENAME = 'doc.config.js';


function getConfig(config) {
    config = config || {};

    let configFilepath;
    if (isString(config)) {
        configFilepath = path.resolve(process.cwd(), config);
        if (!fs.existsSync(configFilepath)) {
            console.error('doc config not found: ' + configFilepath + '.')
        }
        config = {};
    } else {
        configFilepath = findConfigFile();
    }

    if (configFilepath) {
        config = require(configFilepath);

        config.type = config.type || "react";
        config.path = config.paths[0]
        config.rootOutDir = config.outdir || "doc/";
        config.outdir = path.join(config.outdir || 'doc', PKG.version, '/');
        config.project.version = PKG.version;
    }

    const configDir = configFilepath ? path.dirname(configFilepath) : process.cwd();

    const mergedConfig = merge({}, config);

    return mergedConfig;
}

/**
 * Try to find config file up the file tree.
 *
 * @return {string|boolean} Config absolute file path.
 */
function findConfigFile() {
    let configDir;
    try {
        configDir = findup.sync(process.cwd(), CONFIG_FILENAME);
    } catch (exception) {
        return false;
    }

    return path.join(configDir, CONFIG_FILENAME);
}

module.exports = getConfig;