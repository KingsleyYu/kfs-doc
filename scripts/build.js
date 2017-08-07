'use strict';

const webpack = require('webpack');
const makeWebpackConfig = require('./make-webpack-config');
const doc = require('./doc')

module.exports = function build(config, env, callback) {
    return webpack(makeWebpackConfig(config, env), (err, stats) => {
        callback&&callback(err, stats);
    });
};
