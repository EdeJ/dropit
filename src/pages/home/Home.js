import React, { useContext } from 'react'
import { IoPlayOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { PlayerContext } from '../../components/context/PlayerContextProvider'
import { useAuthentication } from '../../hooks/authentication'
import './Home.css'

function Home() {

    const { user, isAdmin } = useAuthentication()
    const { setShowMainPlayer, currentSong, play, isPlaying } = useContext(PlayerContext)

    function playBtnHandler() {
        setShowMainPlayer(true)
        isPlaying || play()
    }

    return (
        <div className="container-center">
            <h2>"Now Give Me A Beat!"</h2>
            {currentSong && (
                <IoPlayOutline
                    className="play-btn"
                    onClick={playBtnHandler}
                />
            )}
            {user && (
                <div className="action-btns">
                    {(isAdmin()) ? (
                        <NavLink className="border" type="button" to="/all-demos" >All demos</NavLink>
                    ) : (
                            <NavLink className="border" type="button" to="/my-demos" >My demos</NavLink>
                        )}
                </div>
            )}
            {/* // TODO Link to my-demos */}
            {!user && (
                <div className="action-btns">
                    <NavLink type="button" to="/sign-in" >Sign In</NavLink>
                    <NavLink className="border" type="button" to="/sign-up" >Sign Up</NavLink>
                </div>
            )}

            <ul>
                <li>Send your demo</li>
                <li>Get feedback from Don Diablo</li>
                <li>Change the history of music...</li>
            </ul>
        </div>
    )
}

export default Home 