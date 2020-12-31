import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';
import './MainPlayer.css';

// import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutline;
// import { FiSkipBack, FiSkipForward, FiPlayCircle } from "react-icons/fi";
import { IoPlayCircleOutline, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoCloseOutline } from 'react-icons/io5'


function MainPlayer({ show, setShowMainPlayer }) {

    return (
        <div className={`main-player ${show ? 'open' : ''}`}>
            <div className="btn-container">
                {/* <button onClick={() => setShowMainPlayer(false)} type="button"><CloseIcon /></button> */}
                <IoCloseOutline
                    className="close-btn"
                    size={40}
                    onClick={() => setShowMainPlayer(false)}
                />
            </div>

            <div>Main Player</div>
            <div className="control-container">
                <div className="control-btns">
                    <IoPlaySkipBackSharp size={40} />
                    <IoPlayCircleOutline size={80} />
                    <IoPlaySkipForwardSharp size={40} />
                </div>
            </div>
        </div>
    )
}

export default MainPlayer