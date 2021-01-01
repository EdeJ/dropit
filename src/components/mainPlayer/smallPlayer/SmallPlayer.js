import React, { useState } from 'react'
import { IoChevronUpSharp, IoPlaySharp, IoPauseSharp } from 'react-icons/io5'

function SmallPlayer({ song, onClick }) {

    const [togglePlay, setTogglePlay] = useState(false);

    function play() {
        setTogglePlay(!togglePlay)
    }

    return (
        <div className="sticky-player">
            <div
                onClick={onClick}
                className="container"
            >
                {/* <IoChevronUpSharp className="arrow-up" /> */}
                {song && (
                    <div className="song-details">
                        <strong>{song.title}</strong>
                        <p>{song.artist}</p>
                    </div>
                )}
                <button onClick={(e) => {
                    e.stopPropagation();
                    // setTogglePlay(!togglePlay);
                    play();
                }}
                    type="button">
                    {togglePlay ? <IoPlaySharp /> : <IoPauseSharp />}
                    {/* {togglePlay ? <PlayIcon /> : <PauseIcon />} */}
                </button>
            </div>
        </div>
    )
}

export default SmallPlayer
