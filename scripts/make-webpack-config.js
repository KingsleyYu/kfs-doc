'use strict';

const path = require('path');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const getWebpackVersion = require('./utils/getWebpackVersion');
const hasJsonLoader = require('./utils/hasJsonLoader');

var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const isWebpack1 = getWebpackVersion() < 2;
const sourceDir = path.resolve(__dirname, '../dist');
const nodeModulesPath = path.resolve(__dirname, '../node_modules')
const template=path.resolve(__dirname, '../scripts/templates/index.html')

module.exports = function (config, env) {
    process.env.NODE_ENV = process.env.NODE_ENV || env;

    const isProd = env === 'production';

    let webpackConfig = {
        entry: {
            index: [path.resolve(sourceDir, `template/${config.type}/index.js`)]
        },
        output: {
            path: path.join(process.cwd(), config.outdir),
            publicPath: '/',
            filename: '[name].bundle.js',
            chunkFilename: '[name].js',
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
                loader: 'happypack/loader?id=happybabel'
            }, {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
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
            new HtmlWebpackPlugin({
                title: config.project.name,
                template: path.resolve(__dirname, '../templates/index.html'),
                inject: true,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env),
                },
            }),
            new ExtractTextPlugin('css/[name].css'),
        ],
        performance: {
            hints: false,
        },
    };

    if (isProd) {
        webpackConfig = merge(webpackConfig, {
            output: {
                filename: 'build/bundle.[chunkhash:8].js',
                chunkFilename: 'build/[name].[chunkhash:8].js',
            },
            plugins: [
                new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        keep_fnames: true,
                        screw_ie8: true,
                        warnings: false,
                    },
                    output: {
                        comments: false,
                    },
                    mangle: {
                        keep_fnames: true,
                    },
                }),
                new CleanWebpackPlugin(['build'], {
                    root: config.outdir,
                    verbose: config.verbose,
                }),
            ],
        });
        if (isWebpack1) {
            webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
        }
    } else {
        webpackConfig = merge(webpackConfig, {
            stats: {
                colors: true,
                reasons: true,
            },
            plugins: [new webpack.HotModuleReplacementPlugin()],
            devServer: {
                hot: true,
                inline: true
            }
        });
    }

    if (config.webpackConfig) {
        webpackConfig = mergeWebpackConfig(webpackConfig, config.webpackConfig, env);
    }

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

    return webpackConfig;
};
