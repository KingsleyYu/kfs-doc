'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _docConfig = require('docConfig');

var _docConfig2 = _interopRequireDefault(_docConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getDataByClass: function getDataByClass(className) {
        var classData = null;
        if (_docConfig2.default.classes) {
            Object.keys(_docConfig2.default.classes).forEach(function (oKey) {
                if (oKey === className) {
                    classData = _docConfig2.default.classes[oKey];
                }
            });
        }
        return classData;
    },
    getMeunByKey: function getMeunByKey(key) {
        var menu = null;

        var menuList = [];

        _docConfig2.default.project.menus.forEach(function (oMenu) {
            if (oMenu.subMenus && oMenu.subMenus.length) {
                oMenu.subMenus.forEach(function (oSubMenu) {
                    menuList.push(oSubMenu);
                });
            } else {
                menuList.push(oMenu);
            }
        });

        if (menuList.length) {
            menuList.forEach(function (oMenu) {
                if (oMenu.key === key) {
                    menu = oMenu;
                }
            });
        }

        return menu;
    }
}; /**
    * docConfig 数据操作类
    */