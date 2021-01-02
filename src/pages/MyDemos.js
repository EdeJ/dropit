import React from 'react'
// import { ReactComponent as PlayIcon } from '../assets/images/play-icon.svg'
// import SideDrawer from '../components/sideDrawer/SideDrawer'
import { IoPlayOutline, IoDiscSharp, IoEllipsisHorizontal, IoPauseSharp } from 'react-icons/io5'
import songs from '../assets/audio/songs'
import './MyDemos.css'


function MyDemos({ currentSong, isPlaying, setIsPlaying, setCurrentSong, setShowMainPlayer }) {

    function play(song) {
        if (song === currentSong) {
            setIsPlaying(!isPlaying);
        } else {
            setIsPlaying(true);
            setCurrentSong(song);
        }
    }

    return (
        <div className="full-page">

            <h3>My Demos</h3>
            <div className="demo-list">
                <ul>
                    {songs.map(song => (
                        <li
                            className={song === currentSong ? 'current-song' : ''}
                            key={song.id}>
                            <IoEllipsisHorizontal
                                onClick={() => console.log("go to settings")}
                                className="settings-btn"
                            />
                            <div>
                                <button type="button"
                                    onClick={() => play(song)}>
                                    {song === currentSong && isPlaying ? <IoPauseSharp /> : <IoPlayOutline />}
                                </button>
                            </div>
                            <div className="song-details"
                                onClick={() => setShowMainPlayer(true)}>
                                <strong>{song.title}</strong>
                                <span>{song.artist}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyDemos
