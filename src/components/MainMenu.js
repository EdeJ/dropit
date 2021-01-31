import React, { useContext, useState } from 'react'
import { Link, NavLink, useHistory } from "react-router-dom"
import { useAuthentication } from '../hooks/authentication'
import ConfirmationModal from './confirmationModal/ConfirmationModal'
import { PlayerContext } from './context/PlayerContextProvider'

function MainMenu({ setSideDrawerOpen }) {

    const { user, isAdmin, logout } = useAuthentication()
    const { pause, setCurrentSong } = useContext(PlayerContext)
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    function handleLogOut(allowAction) {
        setShowModal(false)
        if (allowAction) {
            logout()
            pause()
            setCurrentSong(null)
            setSideDrawerOpen(false)
            history.push('/')
        }
    }

    return (
        <div>
            {showModal && (
                <ConfirmationModal
                    action={handleLogOut}
                    message="Are you sure you want to sign out?"
                />
            )}
            <ul>
                {/* <ul> */}
                {user && (
                    <li key="myProfile" onClick={() => setSideDrawerOpen(false)}>
                        <NavLink to='/my-profile'>My profile</NavLink>
                    </li>
                )}
                {!user && (
                    <>
                        <li key="signUp" onClick={() => setSideDrawerOpen(false)}>
                            <NavLink to='/sign-up'>Sign up</NavLink>
                        </li>
                        <li key="signIn" onClick={() => setSideDrawerOpen(false)}>
                            <NavLink to='/sign-in'>Sign in</NavLink>
                        </li>
                    </>
                )}
                {user && !isAdmin() && (
                    <>
                        <li key="myDemos" onClick={() => setSideDrawerOpen(false)}>
                            <NavLink to='/my-demos'>My demos</NavLink>
                        </li>
                        <li key="addNewDemo" onClick={() => setSideDrawerOpen(false)}>
                            <NavLink to='add-new-demo'>Add new demo</NavLink>
                        </li>
                    </>
                )}
                {isAdmin() && (
                    <li key="allDemos" onClick={() => setSideDrawerOpen(false)}>
                        <NavLink to='/all-demos'>All demos</NavLink>
                    </li>
                )}
                {user && (
                    <li key="signOut" onClick={setShowModal}>
                        <Link to={'#'}>Sign out</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default MainMenu
