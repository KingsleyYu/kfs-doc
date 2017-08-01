'use strict';

const Y = require('yuidocjs');
const fs = require("fs");
const path = require("path");
const docConfig=require('./config')()

exports.build = function (config, callback) {    
    if (!fs.existsSync(docConfig.rootOutdir)) {
        fs.mkdirSync(docConfig.rootOutdir)
    }

    if (!fs.existsSync(docConfig.outdir)) {
        fs.mkdirSync(docConfig.outdir)
    }

    buildDoc(docConfig,callback);

    function buildDoc(options,callback) {
        var json;
        
        try {
            json = (new Y.YUIDoc(options)).run();
        } catch (e) {
            console.log(e);
            return;
        }

        options = Y.Project.mix(json, options);

        var metaData = buildDocConfig(Object.assign({}, json));

        fs.writeFileSync(path.join(options.outdir, 'doc.js'), "export default \r\n" + JSON.stringify(metaData));
    }

    function buildDocConfig(data) {
        var items = [], submodules = [], module, subModule, moduleName, subModuleName;
        Y.each(data.modules, function (item) {
            item.name && items.push({
                type: 'module',
                name: item.name
            });
        });

        Y.each(data.classes, function (item) {
            item.name && items.push({
                type: 'class',
                name: item.name
            });
        })

        data.classitems.forEach(function (item) {
            item.name && items.push({
                type: item.itemtype,
                className: item['class'],
                name: item.name
            });
        })

        data.filterItems = items;

        //group the classes by module and submodule 
        Y.each(data.modules, function (i, oModuleKey) {
            module = data.modules[oModuleKey];
            if (!module.is_submodule) {
                submodules = [];
                Y.each(module.submodules, function (j, oSubModuleKey) {
                    submodules.push({
                        name: oSubModuleKey,
                        classes: getClassesBySubmodule(data.classes, module.name, oSubModuleKey)
                    })
                })
                // module.submodules = submodules;
                submodules.sort(Y.DocBuilder.prototype.nameSort);
                module.submodules = submodules;
            }
        })

        return data;
    }

    /**
     * 根据module和submodule 分组classes
     * @param {*} data 
     * @param {*} module 
     * @param {*} submodule 
     */
    function getClassesBySubmodule(data, module, submodule) {
        var c_array = [];

        Y.each(data, function (i, o) {
            if (data[o].module === module && data[o].submodule === submodule) {
                c_array.push(data[o])
            }
        })

        return c_array
    }
};