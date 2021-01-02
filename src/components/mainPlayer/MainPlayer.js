import React, { useEffect, useState } from 'react'
import { IoPlayCircleOutline, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoCloseOutline, IoPauseCircleOutline } from 'react-icons/io5'
import { ReactComponent as EQ } from '../../assets/images/eq.svg'
import './MainPlayer.css';
import songs from '../../assets/audio/songs'

function MainPlayer({ currentSong, setCurrentSong, isPlaying, setIsPlaying, showMainPlayer, setShowMainPlayer }) {

    function previous() {
        let index = songs.map(song => song.id).indexOf(currentSong.id);
        if (index > 0) {
            setCurrentSong(songs[index - 1]);
        }
    }

    function next() {
        let index = songs.map(song => song.id).indexOf(currentSong.id);
        if (index < songs.length - 1) {
            setCurrentSong(songs[index + 1]);
        }
    }

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
                    {/* {songs[songs.map(song => song.id).indexOf(currentSong.id)].id} */}
                    <button onClick={previous}><IoPlaySkipBackSharp /></button>
                    <button
                        className="play"
                        onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
                    </button>
                    <button onClick={next} ><IoPlaySkipForwardSharp /></button>
                </div>
            </div>
        </div>
    )
}

export default MainPlayer