import React from 'react'
import { NavLink, Redirect, useHistory } from "react-router-dom"
import { useAuthentication } from '../hooks/authentication'

function MenuLinks({ links, setSideDrawerOpen }) {

    const { isAuthenticated, logout } = useAuthentication()
    const history = useHistory()
    return (
        <ul>{links.map(link => (
            <li
                key={link.label}
                onClick={() => setSideDrawerOpen(false)}
            >
                <NavLink to={link.path}>{link.label}</NavLink>
            </li>
        ))}
            {isAuthenticated && <li onClick={() => {
                logout()
                setSideDrawerOpen(false)
                history.push('/')

            }
            }><span to={'#'}>Sign out</span></li>}
        </ul>
    )
}

export default MenuLinks
