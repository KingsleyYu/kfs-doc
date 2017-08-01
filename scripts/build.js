'use strict';

const webpack = require('webpack');
const makeWebpackConfig = require('./make-webpack-config');
const doc = require('./doc')

module.exports = function build(config, env, callback) {
    doc.build(config, () => {
        return webpack(makeWebpackConfig(config, env), (err, stats) => {
            callback(err, stats);
        });
    })
};
