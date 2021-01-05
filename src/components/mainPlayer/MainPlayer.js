import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as EQ } from '../../assets/images/eq.svg'
import songs from '../../assets/audio/songs'
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

function MainPlayer() {

    const { currentSong, setCurrentSong, showMainPlayer, setShowMainPlayer, isPlaying, setIsPlaying } = useContext(PlayerContext);
    const [index, setIndex] = useState();

    useEffect(() => {
        setIndex(songs.map(song => song.id).indexOf(currentSong.id));
    }, [currentSong.id]);

    function previous() {
        if (index > 0) {
            setCurrentSong(songs[index - 1]);
        }
    }

    function next() {
        if (index < songs.length - 1) {
            setCurrentSong(songs[index + 1]);
        }
    }

    return (
        <div className={`${styles.mainPlayer} ${showMainPlayer ? styles.open : ''}`} >
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
                        <EQ />
                    </div>
                    <div className={styles.songDetails}>
                        <h2>{currentSong && currentSong.title}</h2>
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
                                onClick={() => setIsPlaying(!isPlaying)}
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