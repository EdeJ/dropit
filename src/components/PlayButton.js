import React, { useContext } from 'react'
import { PlayerContext } from './context/PlayerContextProvider'
import { IoPlayOutline } from 'react-icons/io5'

import TurningRecord from '../assets/images/turning-vinyl.gif'
import styles from './PlayButton.module.css'

function PlayButton({ song }) {

    const { currentSong, setCurrentSong, isPlaying, play, pause } = useContext(PlayerContext)

    function handlePlay() {
        if (currentSong && song.id === currentSong.id) {
            isPlaying ? pause() : play()
        } else {
            setCurrentSong(song)
            play()
        }
    }

    return (
        <div className={styles['play-button']}>
            <button type="button" onClick={handlePlay}>
                {(currentSong && song.id === currentSong.id && isPlaying) ? (
                    <img src={TurningRecord} alt="vinyl" />
                ) : (
                        <IoPlayOutline />
                    )}
            </button>
        </div>
    )
}

export default PlayButton
