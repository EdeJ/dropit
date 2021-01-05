import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PlayerContext } from './context/PlayerContextProvider'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import styles from './SongCard.module.css';

function SongCard({ song, isSelected, size, settingBtn = true }) {

    const { currentSong, setCurrentSong, setShowMainPlayer, isPlaying, setIsPlaying } = useContext(PlayerContext);

    function play() {
        if (song === currentSong) {
            setIsPlaying(!isPlaying);
        } else {
            setIsPlaying(true);
            setCurrentSong(song);
        }
    }

    const setIcon = () => {
        if (song === currentSong && isPlaying) {
            return styles.vinyl
        } else {
            return styles.play
        }
    }

    return (
        <div className={`${styles.songCard} ${currentSong.id === song.id ? styles.selected : ''}`}
            style={{ width: size.width, height: size.height }}
        >
            {settingBtn && (
                <Link className={styles.settings} to={`/demo-options/${song.id}`}>
                    <IoEllipsisHorizontal />
                </Link>
            )}
            <div className={styles.container}>
                <button type="button"
                    className={setIcon()}
                    onClick={() => play()}
                >
                </button>
            </div>
            <div className={styles.songDetails}
                style={{ with: size }}
                onClick={() => {
                    play();
                    setShowMainPlayer(true);
                }}
            >
                <strong>{song.title}</strong>
                <span>{song.artist}</span>
            </div>
        </div>
    )
}

export default SongCard
