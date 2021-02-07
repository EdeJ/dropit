import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContextProvider'
import TurningRecord from '../assets/images/turning-vinyl.gif'
import { IoPlayOutline } from 'react-icons/io5'

import styles from './PlayButton.module.css'

function PlayButton({ song }) {

    const { currentSong, setCurrentSong, isPlaying, setIsPlaying } = useContext(PlayerContext)

    const play = () => {
        if (song === currentSong) {
            setIsPlaying(!isPlaying)
        } else {
            setIsPlaying(true)
            setCurrentSong(song)
        }
    }

    return (
        <div className={styles['play-button']}>
            <button
                type="button"
                onClick={() => play()}
            >
                {(song === currentSong && isPlaying) ? <img src={TurningRecord} alt="vinyl" /> : <IoPlayOutline />}
            </button>
        </div>
    )
}

export default PlayButton
