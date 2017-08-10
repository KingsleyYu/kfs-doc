/**
 * 菜单组件定义
 */

import React from 'react'
import { Link } from 'react-router'


class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    toggle() {

    }

    getMenu(menu) {
        let menuItem = null;

        if (menu.subMenus && menu.subMenus.length) {
            menuItem = (
                <div>
                    <span className="module">{menu.name}</span>
                    <ul className="pure-menu-list sub-nav">
                        {
                            menu.subMenus.map(subMenu => {
                                return (
                                    <li key={subMenu.name} className="nav-item">
                                        <Link to={'/components/' + subMenu.key} className="module">{subMenu.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        else {
            menuItem = (
                <Link to={'/components/' + menu.key} className="module">{menu.name}</Link>
            )
        }

        return menuItem;
    }


    getModule(module) {

    }

    render() {
        const { menu, type } = this.props;

        return (
            <li className="nav-item" key={menu.name}>
                {this.getMenu(menu)}
            </li>
        )
    }
}

export default Menu;