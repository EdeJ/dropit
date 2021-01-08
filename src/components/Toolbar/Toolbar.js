import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import './Toolbar.css'

function Toolbar({ sideDrawerOpen, setSideDrawerOpen, children }) {

    // const location = useLocation()

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
                    <DrawerToggleButton setSideDrawerOpen={() => setSideDrawerOpen(!sideDrawerOpen)} />
                </div>
                {/* <div className="spacer"></div> */}
                <div className="toolbar-navigation-items">
                    {/* <MenuLinks backdropClickHandler={backdropClickHandler} /> */}
                    <ul>                    {children}</ul>

                </div>
            </nav>
        </header>
    )
}

export default Toolbar
