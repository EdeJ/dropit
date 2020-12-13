import React, { useState } from 'react'
import { ReactComponent as PlayIcon } from '../../assets/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assets/pause-icon.svg';
import './Player.css'

function Player() {

    const [toggle, setTogglePLay] = useState(false);
    const [toggleMainPlayer, setToggleMainPLayer] = useState(false);

    return (
        <div className="sticky-player">
            <div onClick={() => setToggleMainPLayer(!toggleMainPlayer)}
                className="container"
                style={{ background: toggleMainPlayer ? 'red' : '#69BA5E' }}
            >
                <div className="song-details">
                    <strong>Fly Me To The Moon</strong>
                    <p>Frank Sinatra</p>
                </div>
                <button onClick={(e) => {
                    e.stopPropagation();
                    setTogglePLay(!toggle);
                }
                }
                    type="button">
                    {toggle ? <PlayIcon /> : <PauseIcon />

                    }
                </button>
            </div>
        </div>
    )
}

export default Player
