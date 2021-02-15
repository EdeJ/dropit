import React, { useContext } from 'react'
import { IoPlayOutline } from 'react-icons/io5'
import { PlayerContext } from '../../components/context/PlayerContextProvider'
import LinkButtonStyle from '../../components/linkButtonStyle/LinkButtonStyle'
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
                        <LinkButtonStyle url="/all-demos" >All demos</LinkButtonStyle>
                    ) : (
                            <LinkButtonStyle url="/my-demos" >My demos</LinkButtonStyle>
                        )}
                </div>
            )}
            {!user && (
                <div className="action-btns">
                    <LinkButtonStyle url="/sign-in" border={false}>Sign in</LinkButtonStyle>
                    <LinkButtonStyle url="/sign-up" >Sign up</LinkButtonStyle>
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
