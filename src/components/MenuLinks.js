import React from 'react'
import { NavLink } from "react-router-dom"

function MenuLinks({ links, setSideDrawerOpen }) {
    return (
        <ul>{links.map(link => (
            <li
                key={link.label}
                onClick={() => setSideDrawerOpen(false)}
            >
                <NavLink to={link.path}>{link.label}</NavLink>
            </li>
        ))}
        </ul>
    )
}

export default MenuLinks
