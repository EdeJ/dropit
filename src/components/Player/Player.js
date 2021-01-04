import React from 'react'
import MainPlayer from '../mainPlayer/MainPlayer'
import SmallPlayer from '../mainPlayer/smallPlayer/SmallPlayer'
import './Player.css'

// TODO kies een audio library en verwijder wat niet wordt gebruikt van de package.json file.

function Player() {

    return (
        <>
            <SmallPlayer />
            <MainPlayer />
        </>
    )
}

export default Player
