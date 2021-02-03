import React, { useContext } from 'react'
import { PlayerContext } from './context/PlayerContextProvider'
import TurningRecord from '../assets/images/turning-vinyl.gif'
import styles from './PlayButton.module.css'
import { IoPlayOutline } from 'react-icons/io5'

function PlayButton({ song }) {

    const { currentSong, setCurrentSong, isPlaying, play } = useContext(PlayerContext)

    function handlePlay() {
        if (currentSong && song.id === currentSong.id) {
            play()
        } else {
            setCurrentSong(song)
            play()
        }
    }

    return (
        <div className={styles.playButton}>
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
