import React, { useEffect, useState } from 'react'
import { ReactComponent as PlayIcon } from '../assets/play-icon.svg';
import SideDrawer from '../components/sideDrawer/SideDrawer';
import './MyDemos.css';

function MyDemos({ setShowPlayer }) {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    useEffect(() => {
        setShowPlayer(false);
    }, [setShowPlayer])


    const songs = [
        { id: 1, title: "Fly me to the moon", artist: "Frank Sinatra" },
        { id: 2, title: "You Probably Couldn’t See for the Lights but You Were Staring Straight at Me", artist: "Arctic Monkeys" },
        { id: 3, title: "You and your friend", artist: "Dire Straits" },
        { id: 4, title: "Have a little faith in me", artist: "John Hiatt" },
        { id: 5, title: "Until You Come Back to Me (That’s What I’m Gonna Do)", artist: "Aretha Franklin" },
        { id: 6, title: "Thriller", artist: "Michael Jackson" },
        { id: 7, title: "123456789123456789123456789", artist: "Unknown" }
    ]

    return (
        <div className="full-page">
            <SideDrawer show={sideDrawerOpen} backdropClickHandler={() => setSideDrawerOpen(false)} />
            <h3>My Demos</h3>
            <div className="demo-list">
                <ul>
                    {songs.map(({ id, title, artist }) => (
                        <li key={id} onClick={() => setShowPlayer(true)}>
                            <div><PlayIcon /></div>
                            <div className="song-details">
                                <strong>{title.length < 18 ? title : title.substr(0, 17) + '...'}</strong>
                                <span>{artist}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyDemos
