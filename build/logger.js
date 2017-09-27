/**
 * 日志文件定义
 */

const chalk = require('chalk');


export default {
    info(msg) {
        console.log(chalk.bgCyan(`info=>${msg}`));
    },

    debug(msg) {
        console.log(chalk.yellow(`debug=>${msg}`));
    },
    error(msg) {
        console.log(chalk.red(`error=>${msg}`));
    }
}