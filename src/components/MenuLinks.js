import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from "react-router-dom"
import { useAuthentication } from '../hooks/authentication'
import { PlayerContext } from './context/PlayerContextProvider'

function MenuLinks({ links, setSideDrawerOpen }) {

    const { user, logout } = useAuthentication()
    const { pause, setCurrentSong } = useContext(PlayerContext)
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
            {user && <li key="TODO" onClick={() => {
                logout()
                pause()
                setCurrentSong(null)
                setSideDrawerOpen(false)
                history.push('/')

            }
            }><Link to={'/'}>Sign out</Link></li>}
        </ul>
    )
}

export default MenuLinks
