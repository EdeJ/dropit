import React, { useContext } from 'react'
import { PlayerContext } from './context/PlayerContextProvider'
import TurningRecord from '../assets/images/turning-vinyl.gif'
import styles from './PlayButton.module.css'
import { IoPlayOutline } from 'react-icons/io5'

function PlayButton({ song }) {

    console.log("song: ", song);

    const { currentSong, setCurrentSong, isPlaying, setIsPlaying } = useContext(PlayerContext)

    // console.log('currentSong = ', currentSong);
    // console.log('song = ', song);
    // const setIcon = () => {
    //     if (song === currentSong && isPlaying) {
    //         return styles.vinyl
    //     } else {
    //         return styles.play
    //     }
    // }

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
                onClick={() => play()}
            >
                {(currentSong && song.id === currentSong.id && isPlaying) ? <img src={TurningRecord} alt="vinyl" /> : <IoPlayOutline />}
            </button>
        </div>
    )
}

export default PlayButton
