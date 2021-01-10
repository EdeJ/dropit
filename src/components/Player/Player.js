import React, { useContext } from 'react'
import MainPlayer from '../mainPlayer/MainPlayer'
import SmallPlayer from '../mainPlayer/smallPlayer/SmallPlayer'
import { PlayerContext } from '../context/PlayerContextProvider'
import './Player.css'

// TODO kies een audio library en verwijder wat niet wordt gebruikt van de package.json file.

function Player() {

    const { showMainPlayer } = useContext(PlayerContext);

    return (
        <>
            {!showMainPlayer && <SmallPlayer />}
            {showMainPlayer && <MainPlayer />}
        </>
    )
}

export default Player
