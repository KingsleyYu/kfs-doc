'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const getWebpackVersion = require('./utils/getWebpackVersion');
const hasJsonLoader = require('./utils/hasJsonLoader');

const isWebpack1 = getWebpackVersion() < 2;
const sourceDir = path.resolve(__dirname, '../src');

module.exports = function (config) {
    let webpackConfig = {
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'regenerator-runtime/runtime',
            // listen to code updates emitted by hot middleware:
            'webpack-hot-middleware/client',
            // your code:
            path.resolve(sourceDir, `template/${config.type}/index.js`)
        ],
        output: {
            path: path.join(process.cwd(), config.outdir),
            publicPath: '/',
            filename: '[name].bundle.js',
            chunkFilename: '[name].js',
        },
        resolveLoader: {
            modulesDirectories: [
                path.resolve(__dirname, '../node_modules')
            ]
        },
        resolve: {
            extensions: isWebpack1 ? ['', '.js', '.jsx', '.json', '.less'] : ['.js', '.jsx', '.less', '.json'],
            alias: {
                docConfig: path.join(process.cwd(), config.outdir, 'doc'),
                component: path.join(process.cwd(), config.project.entry)
            },
        },
        module: {
            loaders: [{
                test: /\.js|.jsx$/,
                loaders: ['babel-loader'],
                exclude: path.resolve(__dirname, '../node_modules/')
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=./iconfont/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)/,
                loader: 'url-loader?limit=999999'
            },
            {
                test: /\.md$/,
                loader: 'babel-loader!markdown-it-gfs-loader'
            }]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: config.title,
                template: path.join(sourceDir, 'index.html'),
                inject: true,
            }),
            new ExtractTextPlugin('css/[name].css'),
        ],
        stats: {
            colors: true,
            reasons: true,
        }
    };

    if (isWebpack1 && !hasJsonLoader(webpackConfig)) {
        webpackConfig = merge(webpackConfig, {
            module: {
                loaders: [
                    {
                        test: /\.json$/,
                        loader: 'json-loader',
                    },
                ],
            },
        });
    }
    return webpackConfig
}


