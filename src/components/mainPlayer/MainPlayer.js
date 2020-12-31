import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';
import './MainPlayer.css';

// import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutline;
// import { FiSkipBack, FiSkipForward, FiPlayCircle } from "react-icons/fi";
import { IoPlayCircleOutline, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoCloseOutline, IoPauseCircleOutline } from 'react-icons/io5'
import { ReactComponent as EQ } from '../../assets/images/eq.svg'


function MainPlayer({ show, setShowMainPlayer }) {

    const [playing, setPlaying] = useState(false);

    return (
        <div className={`main-player ${show ? 'open' : ''}`}>
            <div className="header-container">
                <button className="close-btn"
                    onClick={() => setShowMainPlayer(false)}
                    type="button">
                    <IoCloseOutline />
                </button>
            </div>
            <div className="song-container">
                <div className="eq">
                    <EQ />
                </div>
                <div className="song-details">
                </div>
            </div>
            <div className="control-container">
                <div className="control-btns">
                    <button><IoPlaySkipBackSharp /></button>
                    <button
                        className="play"
                        onClick={() => setPlaying(!playing)}
                    >
                        {playing ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
                    </button>
                    <button><IoPlaySkipForwardSharp /></button>
                </div>
            </div>
        </div>
    )
}

export default MainPlayer