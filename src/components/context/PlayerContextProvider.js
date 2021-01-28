import React, { createContext, useState } from 'react'

export const PlayerContext = createContext()

function PlayerContextProvider({ children }) {

    const [audio] = useState(new Audio())
    const [currentSong, setSong] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false)
    const [showMainPlayer, setShowMainPlayer] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    function setCurrentSong(song) {
        setSong(song)
        if (song) {
            audio.src = `${process.env.REACT_APP_BASE_URL}api/files/${song.fileName}`
            audio.play()
            setIsPlaying(true)
        }
    }

    function play() {
        isPlaying ? audio.pause() : audio.play()
        setIsPlaying(!isPlaying)
    }

    function pause() {
        audio.pause()
        setIsPlaying(false)
    }

    const data = {
        currentSong, setCurrentSong,
        showPlayer, setShowPlayer,
        showMainPlayer, setShowMainPlayer,
        isPlaying, setIsPlaying,
        play, pause
    }
    return (
        <PlayerContext.Provider value={data}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider
