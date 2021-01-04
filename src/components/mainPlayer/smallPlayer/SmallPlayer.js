import React from 'react'
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5'

function SmallPlayer({ currentSong, isPlaying, setIsPlaying, setShowMainPlayer }) {

    return (
        <div className="sticky-player">
            <div
                onClick={() => setShowMainPlayer(true)}
                className="container">
                {currentSong && (
                    <div className="song-details">
                        <strong>{currentSong.title}</strong>
                        <p>{currentSong.artist}</p>
                    </div>
                )}
                <button onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                }}
                    type="button">
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
            </div>
        </div>
    )
}

export default SmallPlayer
