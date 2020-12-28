import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MenuLinks from '../MenuLinks';

import './Toolbar.css';

function Toolbar({ drawerToggleClickHandler, backdropClickHandler }) {

    const location = useLocation();

    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar-logo" >
                    {/* {location.pathname !== '/' && ( */}
                    <NavLink exact to="/">
                        <Logo title="dropit" />
                    </NavLink>
                    {/* )} */}
                </div>
                <div className="toggle-button">
                    <DrawerToggleButton drawerToggleClickHandler={drawerToggleClickHandler} />
                </div>
                {/* <div className="spacer"></div> */}
                <div className="toolbar-navigation-items">
                    <MenuLinks backdropClickHandler={backdropClickHandler} />
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;
