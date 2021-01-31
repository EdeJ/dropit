import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from "react-router-dom"
import { useAuthentication } from '../hooks/authentication'
import { PlayerContext } from './context/PlayerContextProvider'

function MainMenu({ setSideDrawerOpen }) {

    const { user, isAdmin, logout } = useAuthentication()
    const { pause, setCurrentSong } = useContext(PlayerContext)
    const history = useHistory()

    return (
        <ul onClick={() => setSideDrawerOpen(false)}>
            {user && (
                <li key="myProfile">
                    <NavLink to='/my-profile'>My profile</NavLink>
                </li>
            )}
            {!user && (
                <>
                    <li key="signUp">
                        <NavLink to='/sign-up'>Sign up</NavLink>
                    </li>
                    <li key="signIn">
                        <NavLink to='/sign-in'>Sign in</NavLink>
                    </li>
                </>
            )}
            {user && !isAdmin() && (
                <>
                    <li key="myDemos">
                        <NavLink to='/my-demos'>My demos</NavLink>
                    </li>
                    <li key="addNewDemo">
                        <NavLink to='add-new-demo'>Add new demo</NavLink>
                    </li>
                </>
            )}
            {isAdmin() && (
                <li key="allDemos">
                    <NavLink to='all-demos'>All demos</NavLink>
                </li>
            )}
            {user && <li key="signOut" onClick={() => {
                logout()
                pause()
                setCurrentSong(null)
                history.push('/')
            }
            }><Link to={'#'}>Sign out</Link></li>}
        </ul>
    )
}

export default MainMenu
