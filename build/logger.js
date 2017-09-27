/**
 * 日志文件定义
 */

const chalk = require('chalk');


module.exports = {
    info(msg) {
        console.log(chalk.cyan(`info=>${msg}`));
    },

    debug(msg) {
        console.log(chalk.yellow(`debug=>${msg}`));
    },
    error(msg) {
        console.log(chalk.red(`error=>${msg}`));
    }
}