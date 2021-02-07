import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PlayerContext } from './context/PlayerContextProvider'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import styles from './SongCard.module.css'
import PlayButton from './playButton/PlayButton'

function SongCard({ song, size }) {

    const { currentSong, setCurrentSong, setShowMainPlayer } = useContext(PlayerContext)

    function clickHandler() {
        if (!currentSong) {
            setCurrentSong(song)
        }
        setShowMainPlayer(true)
    }

    return (
        <div className={`${styles['songCard']} ${currentSong === song ? styles['selected'] : ''}`}
            style={{ width: size.width, height: size.height }}
        >
            <Link className={styles['settings']} to={`/demo-options/${song.id}`}>
                <IoEllipsisHorizontal />
            </Link>
            <div className={styles['container']}>
                <PlayButton song={song} />
            </div>
            <div className={styles['songDetails']}
                onClick={clickHandler}
            >
                <strong className={currentSong === song ? styles['selected'] : ''}>{song.songTitle}</strong>
                <span>{song.artist}</span>
            </div>
        </div>
    )
}

export default SongCard
