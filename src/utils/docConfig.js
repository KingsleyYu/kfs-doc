/**
 * docConfig 数据操作类
 */

// import docConfig from 'docConfig'

export default {
    // getDataByClass: function (className) {
    //     let classData = null;
    //     if (docConfig.classes) {
    //         Object.keys(docConfig.classes).forEach(oKey => {
    //             if (oKey === className) {
    //                 classData = docConfig.classes[oKey]
    //             }
    //         })
    //     }
    //     return classData;
    // },
    // getMenus: function () {
    //     let menu = null;
    //     let menuList = [];


    //     if (docConfig.project.menus && docConfig.project.menus.length) {
    //         docConfig.project.menus.forEach(oData => {
    //             menu = {};
    //             menu.name = oData.name;
    //             menu.iconClass = oData.iconClass;

    //             if (oData.subMenus && oData.subMenus) {
    //                 menu.subMenus = [];
    //                 oData.subMenus.forEach(oSubMenu => {
    //                     menu.subMenus.push({
    //                         name: oSubMenu.name,
    //                         url: oSubMenu.url
    //                     })
    //                 })
    //             }
    //             menuList.push(menu)
    //         })
    //     }

    //     if (docConfig.modules) {
    //         menu = {};
    //         menu.name = "App 控件"
    //         menu.iconClass = "fa fa-mobile";
    //         menu.isModule=true;
    //         menu.subMenus = [];
    //         Object.keys(docConfig.modules).forEach(oKey => {
    //             let subMeunData = docConfig.modules[oKey]
    //             if (!subMeunData.is_submodule) {
                    
    //                 let subMenuItem = {};
    //                 subMenuItem.name = subMeunData.name;

    //                 if (subMeunData.submodules && subMeunData.submodules.length) {
    //                     if (subMeunData.submodules[0].classes && subMeunData.submodules[0].classes.length) {
    //                         subMenuItem.items = [];
    //                         subMeunData.submodules[0].classes.forEach(oClass => {
    //                             subMenuItem.items.push({
    //                                 name: oClass.name,
    //                                 shortName: oClass.Button,
    //                                 description: oClass.description,
    //                                 submodule: oClass.submodule,
    //                                 since: oClass.since
    //                             })
    //                         })
    //                     }
    //                 }

    //                 menu.subMenus.push(subMenuItem)
    //             }
    //         })
    //         menuList.push(menu)
    //     }
    //     return menuList;
    // },
    // getMeunByKey: function (key) {
    //     let menu = null;

    //     let menuList = [];

    //     docConfig.project.menus.forEach(oMenu => {
    //         if (oMenu.subMenus && oMenu.subMenus.length) {
    //             oMenu.subMenus.forEach(oSubMenu => {
    //                 menuList.push(oSubMenu)
    //             })
    //         } else {
    //             menuList.push(oMenu)
    //         }
    //     })

    //     if (menuList.length) {
    //         menuList.forEach(oMenu => {
    //             if (oMenu.key === key) {
    //                 menu = oMenu;
    //             }
    //         })
    //     }

    //     return menu;
    // }
}