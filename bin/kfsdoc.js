#!/usr/bin/env node

const path = require('path')
const minimist = require('minimist');
const chalk = require('chalk');
const chokidar = require('chokidar');
const getConfig = require('../scripts/config');
const argv = minimist(process.argv.slice(2));
const command = argv._[0];


const env = command === 'build' ? 'production' : 'development';
process.env.NODE_ENV = process.env.NODE_ENV || env;


//读取配置数据
let config;
try {
    config = getConfig(argv.config);
} catch (err) {
    console.error('no doc config file found...')
}


const doc = require('../scripts/doc');

doc.build(config,()=>{
    require('../build/dev-server.js')
})



// require('../build/build.js')



// switch (command) {
//     case "dev":
//         commandDev();
//     case 'build':
//         commandBuild();
//         break;
//     default:
//         commandDev();
// }


// function commandDev() {
//     const doc = require('../scripts/doc');
//     const devServer = require('../scripts/server');
//     const currentDir = path.join(process.cwd(), config.path);
//     const port = config.port || 9003;

//     doc.build(config, () => {
//         devServer(config, err => {
//             if (err) {
//                 console.error(err);
//                 process.exit(1);
//             }
//             chokidar.watch(currentDir).on('change', (p) => {
//                 console.log(p)
//                 if (path.extname(p) !== ".md") {
//                     doc.build(config);
//                 }
//             })
//         })
//     })
// }

// function commandBuild() {
//     logger('Building gfs doc guide...');

//     const build = require('../scripts/build');
//     const compiler = build(config, err => {
//         if (err) {
//             console.error(err);
//             process.exit(1);
//         } else {
//             logger('kfs-doc published to:\n' + chalk.underline(config.styleguideDir));
//         }
//     });
// }



