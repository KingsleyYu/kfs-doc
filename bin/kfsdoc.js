#!/usr/bin/env node


const minimist = require('minimist');
const path = require('path');
const chalk = require('chalk');
const chokidar = require('chokidar');
const argv = minimist(process.argv.slice(2));
const command = argv._[0];
const doc = require('../build/doc')
const getConfig = require('../build/config');
const logger = require('../build/logger');


let env = "development";
if (command === "build" || command == "deploy") {
    env = "production";
}

process.env.NODE_ENV = process.env.NODE_ENV || env;

process.on('uncaughtException', err => {
    if (err.code === 'EADDRINUSE') {
        logger.info(
            `You have another server running at port ${config.serverPort} somewhere, shut it down first`,
            'You can change the port using the `serverPort` option in your style guide config:'
        );
    } else {
        logger.error('--------------------------------------------------------------------------');
        logger.error('An uncaught gfsdoc error has occurred, stack trace given below');
        logger.error('--------------------------------------------------------------------------');
        logger.error(err.stack || err.message || err);
        logger.error('--------------------------------------------------------------------------');
        logger.error('Node.js version: ' + process.version);
        logger.error('--------------------------------------------------------------------------');
    }
    process.exit(1);
});

// Load gfsdoc guide config
let config;
try {
    //kfsdoc develop --config examples/doc.config.js
    config = getConfig(argv.config);
} catch (err) {
    logger.error('no doc config file found...')
    process.exit(1);
}

logger.info('Start gfsdoc...')
doc.build(config, () => {
    switch (command) {
        case 'build':
            commandBuild();
            break;
        case 'dev':
            commandDev();
            break;
        default:
            commandDev();
    }
})



function commandDev() {
    require(path.resolve(__dirname, '..', 'build/dev-server.js'));
}

function commandBuild() {
    logger.info('Building gfs doc...');
}
