import React, { useEffect, useState } from 'react'
import { IoPlayCircleOutline, IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoCloseOutline, IoPauseCircleOutline } from 'react-icons/io5'
import { ReactComponent as EQ } from '../../assets/images/eq.svg'
import './MainPlayer.css';
import songs from '../../assets/audio/songs'
import { IoPlayOutline, IoDiscSharp, IoEllipsisHorizontal, IoPauseSharp } from 'react-icons/io5'
import comments from '../../assets/comments';

function MainPlayer({ currentSong, setCurrentSong, isPlaying, setIsPlaying, showMainPlayer, setShowMainPlayer }) {

    const [index, setIndex] = useState();
        const [currentSongSettings, setCurrentSongSettings] = useState({});
            const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
                const [songLinks, setSongLinks] = useState([]);

    useEffect(() => {
        setIndex(songs.map(song => song.id).indexOf(currentSong.id));
    }, [currentSong.id]);

    function previous() {
        if (index > 0) {
            setCurrentSong(songs[index - 1]);
        }
    }

    function next() {
        if (index < songs.length - 1) {
            setCurrentSong(songs[index + 1]);
        }
    }

    function setSongOptions(song) {
    console.log("TEST");
    setShowMainPlayer(false);
    setCurrentSongSettings(song);
    setSideDrawerOpen(true);

    const comment = comments.find(c=> c.songId === song.id);

    const links = [];

    if (comment.message !== '') {
        links.push({ path: `/view-comment/${comment.songId}`, label: 'view comment' });
    } else {
        links.push({ path: `/write-comment/${comment.songId}`, label: 'Write comment' });
    }
    // links.push({ path: '/play-demo', label: 'Play demo' })

    setSongLinks(links);
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
                 <IoEllipsisHorizontal size={30}
                                onClick={() => {
                                    console.log("TEST!");
                                    setSongOptions(currentSong);
                                }}
                                className="settings-btn"
                            />
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