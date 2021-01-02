import React from 'react'
import { IoPlayCircleOutline, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoCloseOutline, IoPauseCircleOutline } from 'react-icons/io5'
import { ReactComponent as EQ } from '../../assets/images/eq.svg'
import './MainPlayer.css';

function MainPlayer({ currentSong, isPlaying, setIsPlaying, showMainPlayer, setShowMainPlayer }) {

    return (
        <div className={`main-player ${showMainPlayer ? 'open' : ''}`} >
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
                    <h2>{currentSong && currentSong.title}</h2>
                    <span>{currentSong && currentSong.artist}</span>
                </div>
            </div>
            <div className="control-container">
                <div className="control-btns">
                    <button><IoPlaySkipBackSharp /></button>
                    <button
                        className="play"
                        onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
                    </button>
                    <button><IoPlaySkipForwardSharp /></button>
                </div>
            </div>
        </div>
    )
}

export default MainPlayer