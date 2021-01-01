import React, { useEffect, useState } from 'react'
import { ReactComponent as PlayIcon } from '../assets/images/play-icon.svg'
import SideDrawer from '../components/sideDrawer/SideDrawer'
import { IoPlayOutline, IoDiscSharp } from 'react-icons/io5'
import songs from '../assets/audio/songs'
import './MyDemos.css'

// TODO border current selected song

function MyDemos({ currentSong, setCurrentSong, setShowPlayer }) {

    // const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    useEffect(() => {
        console.log(songs);
        setShowPlayer(false);
    }, [setShowPlayer])


    return (
        <div className="full-page">

            <h3>My Demos</h3>
            <div className="demo-list">
                <ul>
                    {songs.map(song => (
                        <li
                            style={{ border: `1px solid ${song === currentSong ? 'var(--custom-green)' : 'var(--custom-brown'}` }}
                            key={song.id}
                            onClick={() => {
                                setShowPlayer(true);
                                setCurrentSong(song);
                            }}>
                            <div>
                                {song === currentSong ? <IoDiscSharp /> : <IoPlayOutline />}
                            </div>
                            <div className="song-details">
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
