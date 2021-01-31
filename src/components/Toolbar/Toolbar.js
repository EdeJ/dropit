import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { useAuthentication } from '../../hooks/authentication'
import { roles } from '../../helpers/roles'
import { IoMenu, IoPersonCircleOutline } from 'react-icons/io5'

import './Toolbar.css'

function Toolbar({ sideDrawerOpen, setSideDrawerOpen, children }) {

    const { user } = useAuthentication()

    function getColor() {
        return user.roles.includes(roles.ADMIN) ? '#CB2431' : '#69BA5E'
    }

    return (
        <header className="toolbar">
            {/* {user && (
                <div style={{ fontSize: '10px' }}>
                    <p key="1">USERNAME: {user.username}</p>
                    <p key="2">ROLES: {user.roles.map(role => <span>{role}, </span>)}</p>
                </div>
            )} */}
            <nav className="toolbar-navigation">
                <div className="toolbar-logo" >
                    <Link to="/">
                        <Logo title="dropit" />
                    </Link>
                </div>
                <div className="header-buttons">
                    {user && (
                        <Link to="/my-profile">
                            <IoPersonCircleOutline className="profile-icon" color={getColor()} />
                        </Link>
                    )}
                    <IoMenu className="toggle-menu-btn" onClick={() => setSideDrawerOpen(!sideDrawerOpen)} />
                </div>
                <div className="toolbar-navigation-items">
                    <ul>{children}</ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar
