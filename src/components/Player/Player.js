import React, { useEffect, useState } from 'react'
import { ReactComponent as PlayIcon } from '../../assets/images/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assets/images/pause-icon.svg';
import { Howl, Howler } from 'howler';
import * as Tone from 'tone'


import './Player.css'

function Player({ song }) {

    const [togglePlay, setTogglePLay] = useState(false);
    const [toggleMainPlayer, setToggleMainPLayer] = useState(false);


    useEffect(() => {
        // const sound = new Howl({
        //     src: ['../../assets/adio/1.mp3']
        // });
        // sound.play();
        // if (song) {
        //     const player = new Tone.Player(song.fileName).toDestination();
        //     Tone.loaded().then(() => {
        //         player.start();
        //     });
        // }
    }, [song])

    function play() {
        setTogglePLay(!togglePlay);
        // const player = new Tone.Player('../../assets/audio/' + song.fileName).toDestination();
        // Tone.loaded().then(() => {
        //     player.start();
        // });

    }


    return (
        <div className="sticky-player">
            <div onClick={() => setToggleMainPLayer(!toggleMainPlayer)}
                className="container"
                style={{ background: toggleMainPlayer ? 'red' : '#69BA5E' }}
            >
                {song && (
                    <div className="song-details">
                        <strong>{song.title}</strong>
                        <p>{song.artist}</p>
                    </div>
                )}
                <button onClick={(e) => {
                    e.stopPropagation();
                    // setTogglePLay(!togglePlay);
                    play();
                }
                }
                    type="button">
                    {togglePlay ? <PlayIcon /> : <PauseIcon />

                    }
                </button>
            </div>
        </div>
    )
}

export default Player
