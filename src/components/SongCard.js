import React from 'react'
import { IoEllipsisHorizontal, IoPlayOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import vinyl from '../assets/images/turning-vinyl.gif'
import styles from './SongCard.module.css';

function SongCard({ song, isSelected, isPlaying, play, setShowMainPlayer }) {
    return (
        <div className={styles.songCard + ' ' + (isSelected ? styles.selected : '')}>
            <Link style={{ padding: 0 }} className="settings-btn" to={`/demo-options/${song.id}`}>
                <IoEllipsisHorizontal />
            </Link>
            <div className={styles.container}>
                <button type="button"
                    onClick={() => play(song)}>
                    {isSelected && isPlaying ? (
                        <img src={vinyl} alt="vinyl" />
                    ) : (
                            <IoPlayOutline />
                        )}
                </button>
            </div>
            <div className={styles.songDetails}
                onClick={() => {
                    play(song);
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
