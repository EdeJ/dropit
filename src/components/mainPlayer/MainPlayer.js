import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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
// import { useAuthentication } from '../../hooks/authentication'

function MainPlayer() {

    const { currentSong, setCurrentSong, showMainPlayer, setShowMainPlayer, isPlaying, play, pause } = useContext(PlayerContext)
    const [index] = useState() //setIndex
    // const { user } = useAuthentication()

    function previous() {
        // if (index > 0) {
        //     setCurrentSong(songs[index - 1])
        // }
    }

    function next() {
        // if (index < songs.length - 1) {
        //     setCurrentSong(songs[index + 1])
        // }
    }

    function playHandler() {
        isPlaying ? pause() : play()
    }

    return (
        <div className={styles['main-player']} style={{ transform: showMainPlayer ? 'translateY(0)' : '' }} >
            <div className={styles['header-container']}>
                <button className={styles['close-button']}
                    onClick={() => setShowMainPlayer(false)}
                    type="button">
                    <IoCloseOutline />
                </button>
            </div>
            <div className={styles['center']}>
                <div className={styles['song-container']}>
                    <div className={styles['visualizer']}>
                        <AudioVisualizer />
                    </div>
                    <div className={styles['song-details']}>
                        <h2>{currentSong && currentSong.songTitle}</h2>
                        <span>{currentSong && currentSong.artist}</span>
                        <Link className={styles['settings']} to={`/demo-options/${currentSong.id}`}
                            onClick={() => setShowMainPlayer(false)}
                        >
                            <IoEllipsisHorizontal />
                        </Link>
                    </div>
                    <div className={styles['control-container']}>
                        <div className={styles['control-btns']}>

                            <button onClick={previous}>
                                <IoPlaySkipBackSharp />
                            </button>
                            <button
                                className={styles['play']}
                                onClick={playHandler}
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