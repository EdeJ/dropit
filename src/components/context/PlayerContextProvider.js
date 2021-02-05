import React, { createContext, useRef, useState } from 'react'

export const PlayerContext = createContext()

function PlayerContextProvider({ children }) {

    const audio = useRef()
    const [currentSong, setSong] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false)
    const [showMainPlayer, setShowMainPlayer] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    function setCurrentSong(song) {
        setSong(song)
        if (song) {
            audio.current.src = `${process.env.REACT_APP_BASE_URL}api/files/${song.fileName}`
            // audio.current.play()
            // setIsPlaying(true)
        } else {
            // audio.current.pause()
        }
    }

    function play() {
        // isPlaying ? audio.current.pause() : audio.current.play()
        audio.current.play()
        setIsPlaying(true)
    }

    function pause() {
        audio.current.pause()
        setIsPlaying(false)
    }

    const data = {
        audio,
        currentSong, setCurrentSong,
        showPlayer, setShowPlayer,
        showMainPlayer, setShowMainPlayer,
        isPlaying, setIsPlaying,
        play, pause
    }
    return (
        <PlayerContext.Provider value={data}>
            <audio crossOrigin="anonymous" ref={audio} ></audio>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider
