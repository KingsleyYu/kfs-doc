#!/usr/bin/env node

const Y = require('yuidocjs')
const minimist = require('minimist');
const chalk = require('chalk');
const getConfig = require('../scripts/config');
const GfsDocError = require('../scripts/utils/error');

const argv = minimist(process.argv.slice(2));
const command = argv._[0];
const logger=Y.log;


const env = command === 'build' ? 'production' : 'development';
process.env.NODE_ENV = process.env.NODE_ENV || env;


//读取配置数据
let config;
try {
    config = getConfig(argv.config);
} catch (err) {
    if (err instanceof GfsDocError) {
        printErrorWithLink(
            err.message,
            err.extra + '\n\n' + 'Learn how to configure your style guide:'
        );
        process.exit(1);
    } else {
        throw err;
    }
}

config.verbose = config.verbose || argv.verbose;

switch (command) {
    case 'build':
        commandBuild();
        break;
    default:
        commandBuild();
}



function commandBuild() {
	logger.info('Building gfs doc guide...');

	const build = require('../scripts/build');
	const compiler = build(config, err => {
		if (err) {
			console.error(err);
			process.exit(1);
		} else {
			logger.info('Style guide published to:\n' + chalk.underline(config.styleguideDir));
		}
	});

	// Custom error reporting
	compiler.plugin('done', function(stats) {
		const messages = formatWebpackMessages(stats.toJson({}, true));
		const hasErrors = printAllErrorsAndWarnings(messages, stats.compilation);
		if (hasErrors) {
			process.exit(1);
		}
	});
}



function printErrorWithLink(message, linkTitle, linkUrl) {
    console.error(`${chalk.bold.red(message)}\n\n${linkTitle}\n${chalk.underline(linkUrl)}\n`);
}


function printErrors(header, errors, originalErrors, printer) {
    console.error(printer(header));
    const messages = argv.verbose ? originalErrors : errors;
    messages.forEach(message => {
        console.error(message.message || message);
    });
}