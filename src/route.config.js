/**
 * router 配置类
 */

import docConfig from 'docConfig'
import path from 'path'

const customNavs = docConfig.project.menus;
const compoentNavs = docConfig.modules;

import Button2 from '../../../src/form/aa/bb/Button.md';
import Hello from './Hello';


const LOAD_DOC_MAP = (filePath, moduleName) => {
    return r => require.ensure([], () => r(require(`../../../src/${filePath}`)), 'components')
}


const IMPORT_DOC = (filePath) => {
    return () => import(`../../../src/${filePath}`)
}

const registerDocRoute = (componentNavConfigs) => {
    let routes = [];

    Object.keys(componentNavConfigs).forEach(oKey => {
        let navs = componentNavConfigs[oKey];

        navs.forEach(nav => {
            if (!nav.class) return;

            routes.push({
                name: nav.class,
                path: `/component/${nav.class}`,
                // component: LOAD_DOC_MAP(nav.path, nav.class),
                component:IMPORT_DOC(nav.path),
                meta: {
                    title: nav.name
                }
            })
        })
    })

    return routes;
}

// let route = registerDocRoute(compoentNavs);

let route=[];

let indexRoute = {
    path: '/',
    component: r => require.ensure([], () => r(require(`./Hello`)), 'components')
}

route.push({
    path: '/',
    component: Hello
})

route.push({
    path:'/component/button2',
    component:Button2
})

// route.concat([indexRoute])

// route = route.concat([
//     {
//         path: '/',

//     }
// ])

export default route;