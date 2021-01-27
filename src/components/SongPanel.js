import React, { useContext } from 'react'
import { PlayerContext } from './context/PlayerContextProvider'
import PlayButton from './PlayButton'
import styles from './SongPanel.module.css'

function SongPanel({ song }) {

    const { isPlaying } = useContext(PlayerContext)

    return (
        <div className={`${styles.song} `}>
            <PlayButton song={song} />
            <div className={styles.songDetails}>
                <strong className={isPlaying ? styles.isPlaying : ''}>{song.songTitle}</strong>
                <span>{song.artist}</span>
            </div>
        </div>
    )
}

export default SongPanel
