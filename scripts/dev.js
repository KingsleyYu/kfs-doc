'use strict';

const path = require('path')
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackDevServer = require('webpack-dev-server');
const makeWebpackConfig = require('./make-webpack-config');
const doc = require('./doc')

const devPort = 9001

module.exports = function build(config, env, callback) {
    doc.build(config, () => {

        let webpackConfig = makeWebpackConfig(config, env);

        webpackConfig
            .entry
            .index
            .unshift('regenerator-runtime/runtime', `webpack-dev-server/client?http://localhost:${devPort}`, 'webpack/hot/dev-server');
        // 编译
        var compiler = webpack(webpackConfig);

        // 初始化一个webpack-dev-server
        new webpackDevServer(compiler, {
            publicPath: '/' + config.outdir,
            historyApiFallback: false,
            stats: {
                colors: true
            }
        }).listen(devPort, 'localhost', function (error) {
            callback(error);
        });
    })
};