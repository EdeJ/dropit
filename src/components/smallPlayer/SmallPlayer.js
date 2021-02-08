import React, { useContext } from 'react'
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'
import { PlayerContext } from '../context/PlayerContextProvider'

import styles from './smallPlayer.module.css'

function SmallPlayer() {

    const { currentSong, setShowMainPlayer, isPlaying, play, pause } = useContext(PlayerContext)

    function playHandler() {
        isPlaying ? pause() : play()
    }

    return (
        <div className={styles['sticky-player']}>
            <div
                className={styles['container']}>
                {currentSong && (
                    <div
                        className={styles['song-details']}
                        onClick={() => setShowMainPlayer(true)}
                        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    >
                        <strong>{currentSong.songTitle}</strong>
                        <p>{currentSong.artist}</p>
                    </div>
                )}
                <button onClick={playHandler}
                    type="button">
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
            </div>
        </div>
    )
}

export default SmallPlayer
