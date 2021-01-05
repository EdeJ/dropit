import React, { createContext, useState } from 'react'

export const PlayerContext = createContext()

function PlayerContextProvider({ children }) {

    const [currentSong, setCurrentSong] = useState()
    const [showPlayer, setShowPlayer] = useState(false);
    const [showMainPlayer, setShowMainPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);


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
