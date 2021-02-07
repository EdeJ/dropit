import React, { useContext } from 'react'
import { PlayerContext } from './context/PlayerContextProvider'
import PlayButton from './PlayButton'
import styles from './SongPanel.module.css'

function SongPanel({ song }) {

    const { isPlaying } = useContext(PlayerContext)

    return (
        <div className={`${styles['song']} `}>
            <PlayButton song={song} />
            <div className={styles['song-details']}>
                <strong className={isPlaying ? styles['is-playing'] : ''}>{song['song-title']}</strong>
                <span>{song.artist}</span>
            </div>
        </div>
    )
}

export default SongPanel
