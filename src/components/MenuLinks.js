import React from 'react'
import { NavLink } from "react-router-dom"
import { useAuthentication } from '../hooks/authentication'

function MenuLinks({ links, setSideDrawerOpen }) {

    const { isAuthenticated, logout } = useAuthentication()
    return (
        <ul>{links.map(link => (
            <li
                key={link.label}
                onClick={() => setSideDrawerOpen(false)}
            >
                <NavLink to={link.path}>{link.label}</NavLink>
            </li>
        ))}
            {isAuthenticated && <li onClick={logout}>Sign out</li>}
        </ul>
    )
}

export default MenuLinks
