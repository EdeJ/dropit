import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Toolbar.css';
import { NavLink } from 'react-router-dom';

function Toolbar({ drawerToggleClickHandler }) {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar-logo" ><NavLink exact to="/"><Logo title="dropit" /></NavLink></div>
                <div className="toggle-button">
                    <DrawerToggleButton drawerToggleClickHandler={drawerToggleClickHandler} />
                </div>
                {/* <div className="spacer"></div> */}
                <div className="toolbar-navigation-items">
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Users</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;
