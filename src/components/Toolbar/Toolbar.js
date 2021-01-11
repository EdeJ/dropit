import React from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import './Toolbar.css'
import { useAuthentication } from '../../hooks/authentication'

function Toolbar({ sideDrawerOpen, setSideDrawerOpen, children }) {

    const { isAuthenticated } = useAuthentication()

    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar-logo" >
                    {/* {location.pathname !== '/' && ( */}
                    <Link to={isAuthenticated ? 'my-demos' : '/'}>
                        <Logo title="dropit" />
                    </Link>
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
