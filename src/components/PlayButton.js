import React, { useContext } from 'react'
import { PlayerContext } from './context/PlayerContextProvider'
import styles from './PlayButton.module.css'

function PlayButton({ song }) {

    const { currentSong, setCurrentSong, isPlaying, setIsPlaying } = useContext(PlayerContext)

    const setIcon = () => {
        if (song === currentSong && isPlaying) {
            return styles.vinyl
        } else {
            return styles.play
        }
    }

    const play = () => {
        if (song === currentSong) {
            setIsPlaying(!isPlaying)
        } else {
            setIsPlaying(true)
            setCurrentSong(song)
        }
    }

    return (
        <div className={styles.playButton}>
            <button
                type="button"
                className={setIcon()}
                onClick={() => play()}
            >
            </button>
        </div>
    )
}

export default PlayButton
