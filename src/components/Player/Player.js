import React from 'react'
import MainPlayer from '../mainPlayer/MainPlayer'
import SmallPlayer from '../mainPlayer/smallPlayer/SmallPlayer'
import './Player.css'
// TODO kies een audio library en verwijder wat niet wordt gebruikt van de package.json file.

function Player({ currentSong, isPlaying, setIsPlaying, showMainPlayer, setShowMainPlayer }) {


    return (
        <>
            <SmallPlayer
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setShowMainPlayer={setShowMainPlayer}
            />
            <MainPlayer
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                showMainPlayer={showMainPlayer}
                setShowMainPlayer={setShowMainPlayer}
            />
        </>
    )
}

export default Player
