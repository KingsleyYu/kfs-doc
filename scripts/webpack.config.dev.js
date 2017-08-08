'use strict';

const path = require('path');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const getWebpackVersion = require('./utils/getWebpackVersion');
const hasJsonLoader = require('./utils/hasJsonLoader');

var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


const isWebpack1 = getWebpackVersion() < 2;
const sourceDir = path.resolve(__dirname, '../src');
const nodeModulesPath = path.resolve(__dirname, '../node_modules')

module.exports = function (config) {
    let webpackConfig = {
        devtool: 'cheap-module-eval-source-map',
        entry: {
            "index": [
                'regenerator-runtime/runtime',
                'webpack-hot-middleware/client',
                path.join(sourceDir, `template/${config.type}/index.js`)
            ],
            vendors: ['react']
        },
        output: {
            path: path.join(process.cwd(), config.outdir),
            publicPath: '/',
            filename: '[name].bundle.js',
            chunkFilename: '[name].js',
        },
        resolveLoader: {
            modulesDirectories: [nodeModulesPath]
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
                test: /\.js[x]?$/,
                loader: 'happypack/loader?id=happybabel'
            }, {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"],
                include: path.join(sourceDir, 'styles')
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
            //add HappyPack for improve the build performance
            new HappyPack({
                id: 'happybabel',
                loaders: ['babel-loader?compact=false'],
                threadPool: happyThreadPool,
                verbose: true
            }),
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: config.title,
                template: path.join(sourceDir, 'index.html'),
                inject: true,
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendors",
                minChunks: Infinity
            })
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


