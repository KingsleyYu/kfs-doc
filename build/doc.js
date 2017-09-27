'use strict';

const fs = require("fs");
const path = require("path");
const dir = require('node-dir');
const logger = require('./logger');


/**
 * 定义的标签列表
 */

const TAGLIST = [
    'class', //类型，用于页面跳转路由
    'module', //主模块
    'submodule' //附属模块
];


exports.build = function (config, callback) {
    if (!fs.existsSync(config.base.rootOutDir)) {
        fs.mkdirSync(config.base.rootOutDir)
    }

    if (!fs.existsSync(config.base.outdir)) {
        fs.mkdirSync(config.base.outdir)
    }

    getFiles(config, (data) => {
        //生成data.json 到 指定目录
        let metaData = config.base;
        var modules = {};

        var i = 0;
        while (i < data.length) {
            var key = data[i].module.toString();
            if (typeof (modules[key]) == "undefined") {
                modules[key] = [];
            }

            modules[key].push({
                name: data[i].subModule,
                class: data[i].class
            });

            i++;
        }

        let sortedKey = Object.keys(modules).sort((a, b) => {
            return a < b;
        })


        let sortedModules = {};

        sortedKey.forEach((key) => {
            let subModuleList = modules[key];
            subModuleList = subModuleList.sort((a, b) => {
                return a.class < b.class ? -1 : 1;
            })
            sortedModules[key] = subModuleList;
        })


        metaData.modules = sortedModules;

        fs.writeFileSync(path.join(config.base.outdir, 'doc.js'), "export default \r\n" + JSON.stringify(metaData));

        callback && callback(data);
    })
};

/**
 * 获取指定目录下markdown文件
 * @param {*} src 
 */
function getFiles(config, callback) {
    let tagList = [];
    logger.info("reading files:")
    dir.readFiles(config.base.paths[0],
        {
            match: /.md$/
        },
        function (err, content, next) {
            if (err) throw err;
            tagList.push(readContent(content))
            next();
        },
        function (err, files) {
            if (err) throw err;
            files.forEach((file) => {
                logger.info(file);
            })

            logger.info('finished reading files');

            callback && callback(tagList);
        });
}


function readContent(content) {
    let tag = null;
    let result = content.match(/:::config([\s\S]+):::/);

    if (result && result.length > 0) {
        content = result[1];
        tag = {};

        tag.class = getClass(content);
        tag.module = getModule(content);
        tag.subModule = getSubModule(content);
    }

    return tag;
}

/**
 * 获取module
 * @param {*} block 
 */
function getClass(block) {
    let result = block.match(/@class([\s\S]*)\n$/);
    return getTagContent(result);
}

/**
 * 获取module
 * @param {*} block 
 */
function getModule(block) {
    let result = block.match(/@module([\s\S]*)\n$/);
    return getTagContent(result);
}

/**
 * 获取subModule
 * @param {*} block 
 */
function getSubModule(block) {
    let result = block.match(/@submodule([\s\S]*)\n$/);
    return getTagContent(result);
}

/**
 * 
 * @param {*} result 
 */
function getTagContent(result) {
    if (result && result.length > 0) {
        if (result[1].trim().indexOf('\n') > 0) {
            result = result[1].split('\n')[0];
            return result.trim();
        }
        else {
            return result[1].trim();
        }
    }

    return '';
}
