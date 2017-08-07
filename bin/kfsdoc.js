#!/usr/bin/env node

const Y = require('yuidocjs')
const minimist = require('minimist');
const chalk = require('chalk');
const chokidar = require('chokidar');
const webpack = require('webpack');

const getConfig = require('../scripts/config');
const makeWebpackConfig = require('../scripts/make-webpack-config');
const argv = minimist(process.argv.slice(2));
const command = argv._[0];
const logger = Y.log;


const env = command === 'build' ? 'production' : 'development';
process.env.NODE_ENV = process.env.NODE_ENV || env;


//读取配置数据
let config;
try {
    config = getConfig(argv.config);
} catch (err) {
    console.log('no doc config file found...')
}

switch (command) {
    case "dev":
        commandDev();
    case 'build':
        commandBuild();
        break;
    default:
        commandDev();
}


function commandDev() {
    const server = require('../scripts/server');
    const doc = require('../scripts/doc');
    const devServer=require('../scripts/devServer');

    doc.build(config,()=>{
        devServer(config)
    })

    // doc.build(config, () => {
    //     const webpackConfig = makeWebpackConfig(config, "development");
    //     webpack(webpackConfig)
    //     const compiler = server(config, err => {
    //         if (err) {
    //             console.error(err);
    //         } else {
    //             const isHttps = compiler.options.devServer && compiler.options.devServer.https;

    //             // chokidar.watch(currentDir).on('change', (event, p) => {
    //             //     if (path.extname(p) !== ".md") {
    //             //         doc.build(config);
    //             //     }
    //             // })

    //             logger(
    //                 'doc guide server started at:\n' +
    //                 (isHttps ? 'https' : 'http') +
    //                 '://' +
    //                 config.serverHost || 'localhost' +
    //                 ':' +
    //                 config.serverPort || 9003
    //             );
    //         }
    //     });
    // })
}

function commandBuild() {
    logger('Building gfs doc guide...');

    const build = require('../scripts/build');
    const compiler = build(config, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        } else {
            logger('kfs-doc published to:\n' + chalk.underline(config.styleguideDir));
        }
    });
}
