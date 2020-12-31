import React, { useEffect, useState } from 'react'
import { ReactComponent as PlayIcon } from '../assets/images/play-icon.svg'
import SideDrawer from '../components/sideDrawer/SideDrawer'
import songs from '../assets/audio/songs'
import './MyDemos.css'

// TODO border current selected song

function MyDemos({ setCurrentSong, setShowPlayer }) {

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
                        <li key={song.id} onClick={() => {
                            setShowPlayer(true);
                            setCurrentSong(song);
                        }}>
                            <div><PlayIcon /></div>
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
