import React, { useEffect, useState } from 'react'
import { ReactComponent as PlayIcon } from '../../assets/images/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assets/images/pause-icon.svg';
import { IoChevronUpSharp, IoPlaySharp, IoPauseSharp } from 'react-icons/io5'


// import { Howl, Howler } from 'howler';
// import * as Tone from 'tone'

// TODO kies een audio library en verwijder wat niet wordt gebruikt van de package.json file.

import './Player.css'
// import SideDrawer from '../sideDrawer/SideDrawer';
import MainPlayer from '../mainPlayer/MainPlayer';

function Player({ song }) {

    const [togglePlay, setTogglePLay] = useState(false);
    const [showMainPlayer, setShowMainPlayer] = useState(false);

    // const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    useEffect(() => {
    }, [song])

    function play() {
        setTogglePLay(!togglePlay);
    }

    return (
        <div className="sticky-player">
            <MainPlayer
                song={song}
                show={showMainPlayer}
                setShowMainPlayer={setShowMainPlayer}
            />
            <div onClick={() => {
                setShowMainPlayer(true);
            }}
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
                    // setTogglePLay(!togglePlay);
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

export default Player
