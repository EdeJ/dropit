import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import songs from '../../assets/audio/songs.json'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { PlayerContext } from '../context/PlayerContextProvider'
import styles from './MainPlayer.module.css'

import {
    IoPlayCircleOutline,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoCloseOutline,
    IoPauseCircleOutline
} from 'react-icons/io5'
import AudioVisualizer from '../AudioVisualizer'
import { useAuthentication } from '../../hooks/authentication'

function MainPlayer() {

    const { currentSong, setCurrentSong, showMainPlayer, setShowMainPlayer, isPlaying, play } = useContext(PlayerContext)
    const [index, setIndex] = useState()

    const { user } = useAuthentication()
    console.log(user)

    function previous() {
        if (index > 0) {
            setCurrentSong(songs[index - 1])
        }
    }

    function next() {
        if (index < songs.length - 1) {
            setCurrentSong(songs[index + 1])
        }
    }

    return (
        <div className={styles.mainPlayer} style={{ transform: showMainPlayer ? 'translateY(0)' : '' }} >
            <div className={styles.headerContainer}>
                <button className={styles.closeButton}
                    onClick={() => setShowMainPlayer(false)}
                    type="button">
                    <IoCloseOutline />
                </button>
            </div>
            <div className={styles.center}>
                <div className={styles.songContainer}>
                    <div className={styles.eq}>
                        <AudioVisualizer />
                    </div>
                    <div className={styles.songDetails}>
                        <h2>{currentSong && currentSong.songTitle}</h2>
                        <span>{currentSong && currentSong.artist}</span>
                        <Link className={styles.settings} to={`/demo-options/${currentSong.id}`}
                            onClick={() => setShowMainPlayer(false)}
                        >
                            <IoEllipsisHorizontal />
                        </Link>
                    </div>
                    <div className={styles.controlContainer}>
                        <div className={styles.controlBtns}>

                            <button onClick={previous}>
                                <IoPlaySkipBackSharp />
                            </button>
                            <button
                                className={styles.play}
                                onClick={play}
                            >
                                {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
                            </button>
                            <button onClick={next} >
                                <IoPlaySkipForwardSharp />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPlayer