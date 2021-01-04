import React from 'react'

function SongCard() {
    return (
        <div
            className={song === currentSong ? 'current-song' : ''}
            key={song.id}>
            <Link style={{ padding: 0 }} className="settings-btn" to={`/demo-options/${song.id}`}><IoEllipsisHorizontal /></Link>
            <div>
                <button type="button"
                    onClick={() => play(song)}>
                    {song === currentSong && isPlaying ? (
                        <img src={vinyl} alt="vinyl" />
                    ) : (
                            <IoPlayOutline />
                        )}

                    {/* {song === currentSong && isPlaying ? <IoPauseSharp /> : <IoPlayOutline />} */}
                </button>
            </div>
            <div className="song-details"
                onClick={() => {
                    setCurrentSong(song);
                    setShowMainPlayer(true);
                }}>
                <strong>{song.title}</strong>
                <span>{song.artist}</span>
            </div>
        </div>
    )
}

export default SongCard
