import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContextProvider'
import { IoChatbox, IoChatboxOutline, IoEllipsisHorizontal } from 'react-icons/io5'
import PlayButton from '../playButton/PlayButton'
import styles from './SongCard.module.css'

function SongCard({ song, size }) {

    const {
        currentSong,
        setCurrentSong,
        setShowMainPlayer,
        isPlaying,
        play
    } = useContext(PlayerContext)

    function clickHandler() {

        if (!currentSong || song.id !== currentSong.id) {
            setCurrentSong(song)
        }
        isPlaying && play()
        setShowMainPlayer(true)
    }

    return (
        <div
            className={`${styles['songCard']} ${currentSong === song ? styles['selected'] : ''}`}
            style={{ width: size.width, height: size.height }}
        >
            {song.comment && (
                <Link
                    to={`/view-comment/${song.id}`}
                    className={styles['review-icon']}
                >
                    {song.comment.viewed ? <IoChatboxOutline /> : <IoChatbox />}
                </Link>
            )}
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
