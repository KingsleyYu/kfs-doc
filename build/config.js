'use strict';

const fs = require('fs');
const path = require('path');
const findup = require('findup');
const isString = require('lodash/isString');
const merge = require('lodash/merge');
const logger = require('./logger');

const PKG = require(path.resolve(process.cwd(), 'package.json'));
const CONFIG_FILENAME = 'doc.config.js';


function getConfig(config) {
    let baseConfig = getBaseConfig(config);

    let webpackConfig = getWebpackConfig(baseConfig);

    return {
        base: baseConfig,
        build: webpackConfig.build,
        dev: webpackConfig.dev
    }
}

function getBaseConfig(config) {
    config = config || {};

    let configFilepath;
    if (isString(config)) {
        configFilepath = path.resolve(process.cwd(), config);
        if (!fs.existsSync(configFilepath)) {
            logger.error('doc config not found: ' + configFilepath + '.')
        }
    } else {
        configFilepath = findConfigFile();
    }

    if (configFilepath) {
        config = require(configFilepath);
        config.type = config.type || "react";
        config.path = config.paths[0]
        config.rootOutDir = config.outdir || "doc/";
        config.outdir = "";
        config.outdir = path.join(config.outdir || 'doc', PKG.version, '/');
        config.project.version = PKG.version;
    }
    const mergedConfig = merge({}, config);

    return mergedConfig;
}


function getWebpackConfig(config) {
    return {
        build: {
            env: {
                NODE_ENV: '"production"'
            },
            index: path.resolve(__dirname, '../dist/index.html'),
            assetsRoot: path.join(process.cwd(), config.outdir),
            assetsSubDirectory: 'static',
            assetsPublicPath: './',
            productionSourceMap: true,
            // Gzip off by default as many popular static hosts such as
            // Surge or Netlify already gzip all static assets for you.
            // Before setting to `true`, make sure to:
            // npm install --save-dev compression-webpack-plugin
            productionGzip: false,
            productionGzipExtensions: ['js', 'css'],
            // Run the build command with an extra argument to
            // View the bundle analyzer report after build finishes:
            // `npm run build --report`
            // Set to `true` or `false` to always turn it on or off
            bundleAnalyzerReport: process.env.npm_config_report
        },
        dev: {
            env: {
                NODE_ENV: '"development"'
            },
            port: config.port || 8088,
            autoOpenBrowser: true,
            assetsSubDirectory: 'static',
            assetsPublicPath: './',
            proxyTable: {},
            // CSS Sourcemaps off by default because relative paths are "buggy"
            // with this option, according to the CSS-Loader README
            // (https://github.com/webpack/css-loader#sourcemaps)
            // In our experience, they generally work as expected,
            // just be aware of this issue when enabling this option.
            cssSourceMap: false
        }
    }
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
        // configDir = findup.sync(process.cwd()+'/examples/basic', CONFIG_FILENAME);
    } catch (exception) {
        return false;
    }

    return path.join(configDir, CONFIG_FILENAME);
}

module.exports = getConfig;