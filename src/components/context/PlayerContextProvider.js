import React, { createContext, useState } from 'react'
import { Howl, Howler } from 'howler'
import ReactAudioPlayer from 'react-audio-player';
import { render } from '@testing-library/react';

export const PlayerContext = createContext()

function PlayerContextProvider({ children }) {

    const [currentSong, setCurrentSong] = useState()
    const [showPlayer, setShowPlayer] = useState(false);
    const [showMainPlayer, setShowMainPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // const [audio] = useState(new Audio('fly-me-to-the-moon.mp3'))
    // const audio = 0;

    // function setCurrentSong(currentSong) {
    //     // audio.pause()
    //     // audio.src = currentSong.fileName
    //     // audio.load()
    //     // audio.oncanplay = setIsPlaying(true)
    //     setCurrentSong2(currentSong)

    // }

    // function setIsPlaying(param) {

    //     // param ? audio.play() : audio.pause()

    //     // setIsPlaying2(param)
    // }

    const data = {
        currentSong,
        setCurrentSong,
        showPlayer, setShowPlayer,
        showMainPlayer, setShowMainPlayer,
        isPlaying, setIsPlaying
    }
    return (
        <PlayerContext.Provider value={data}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider
