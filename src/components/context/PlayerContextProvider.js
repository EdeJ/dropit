import React, { createContext, useState } from 'react'
import { Howl, Howler } from 'howler'
import ReactAudioPlayer from 'react-audio-player';
import { render } from '@testing-library/react';

export const PlayerContext = createContext()

function PlayerContextProvider({ children }) {

    const [currentSong, setCurrentSong2] = useState()
    const [showPlayer, setShowPlayer] = useState(false);
    const [showMainPlayer, setShowMainPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    function setCurrentSong(currentSong) {

        // render(

        // )
        // let audio = new Audio("/2.mp3")


        console.log("change song!")

        // var sound = new Howl({
        //     src: ['/1.mp3']
        // })

        // sound.play()
        // audio.play()
        setCurrentSong2(currentSong)
    }


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
