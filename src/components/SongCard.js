import React from 'react'
import { IoEllipsisHorizontal, IoPlayOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import vinyl from '../assets/images/turning-vinyl.gif'

function SongCard({ song, isSelected, isPlaying, play }) {
    return (
        <div className={isSelected ? 'current-song' : ''}>
            <Link style={{ padding: 0 }} className="settings-btn" to={`/demo-options/${song.id}`}>
                <IoEllipsisHorizontal />
            </Link>
            <div>
                <button type="button"
                    onClick={() => play(song)}>
                    {isSelected && isPlaying ? (
                        <img src={vinyl} alt="vinyl" />
                    ) : (
                            <IoPlayOutline />
                        )}
                </button>
            </div>
            <div className="song-details"
            // onClick={() => {
            //     setCurrentSong(song);
            //     setShowMainPlayer(true);
            // }}
            >
                <strong>{song.title}</strong>
                <span>{song.artist}</span>
            </div>
        </div>
    )
}

export default SongCard
