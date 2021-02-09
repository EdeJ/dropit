import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { PlayerContext } from '../context/PlayerContextProvider'
import { getAllDemos, getAllDemosByUserId } from '../../axios/axiosConfig'
import AudioVisualizer from '../AudioVisualizer'
import { useAuthentication } from '../../hooks/authentication'
import {
    IoPlayCircleOutline,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoCloseOutline,
    IoPauseCircleOutline
} from 'react-icons/io5'

import styles from './MainPlayer.module.css'

function MainPlayer() {

    const {
        currentSong,
        setCurrentSong,
        showMainPlayer,
        setShowMainPlayer,
        isPlaying,
        play,
        pause
    } = useContext(PlayerContext)
    const [songList, setSongList] = useState()
    const { user, isAdmin } = useAuthentication()

    useEffect(() => {

        fetchData()
        async function fetchData() {
            let result;
            if (isAdmin()) {
                result = await getAllDemos()
            } else {
                result = await getAllDemosByUserId(user.userId)
            }

            setSongList(result.data)
        }

    }, [isAdmin, user])

    function previous() {
        const index = getCurrentIndex()
        if (index > 0) {
            setCurrentSong(songList[index - 1])
            isPlaying && play()
        }
    }

    function next() {
        const index = getCurrentIndex()
        if (index < songList.length - 1) {
            setCurrentSong(songList[index + 1])
            isPlaying && play()
        }
    }

    function playHandler() {
        isPlaying ? pause() : play()
    }

    function getCurrentIndex() {
        return songList.map(song => song.id).indexOf(currentSong.id)
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

                            {songList && (
                                <button
                                    onClick={previous}
                                    className={styles[getCurrentIndex() - 1 < 0 ? 'disabled' : '']}>
                                    <IoPlaySkipBackSharp />
                                </button>
                            )}
                            <button
                                className={styles['play']}
                                onClick={playHandler}
                            >
                                {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
                            </button>
                            {songList && (
                                <button
                                    onClick={next}
                                    className={styles[getCurrentIndex() + 2 > songList.length ? 'disabled' : '']}>
                                    <IoPlaySkipForwardSharp />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPlayer