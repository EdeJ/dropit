import React, { useEffect, useState } from 'react'
// import { ReactComponent as PlayIcon } from '../assets/images/play-icon.svg'
// import SideDrawer from '../components/sideDrawer/SideDrawer'
import { IoPlayOutline, IoDiscSharp, IoEllipsisHorizontal, IoPauseSharp } from 'react-icons/io5'
import songs from '../assets/audio/songs'
import MenuLinks from '../components/MenuLinks';
import SideDrawer from '../components/sideDrawer/SideDrawer';
import './MyDemos.css'

import comments from '../assets/comments'


function MyDemos({ currentSong, isPlaying, setIsPlaying, setCurrentSong, showMainPlayer, setShowMainPlayer }) {

    // const songLinks = [{ path: '/view-comment', label: 'View comment' },
    // { path: '/write-comment', label: 'Write comment' },
    // { path: '/play-demo', label: 'Play demo' }]

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [currentSongSettings, setCurrentSongSettings] = useState({});
    const [viewComment, setViewComment] = useState(false);
    const [songLinks, setSongLinks] = useState([]);


    function play(song) {
        if (song === currentSong) {
            setIsPlaying(!isPlaying);
        } else {
            setIsPlaying(true);
            setCurrentSong(song);
        }
    }

function setSongOptions(song) {
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
        <div className="full-page">
            <SideDrawer
                sideDrawerOpen={sideDrawerOpen}
                setSideDrawerOpen={setSideDrawerOpen}
            >
                <h2>{currentSongSettings.title}</h2>
                {/* {viewComment && (
                    <p>{comments[currentSongSettings.id].message}</p>
                )} */}
                <MenuLinks
                    links={songLinks}
                    setSideDrawerOpen={setSideDrawerOpen}
                />
            </SideDrawer>

            <h3>My Demos</h3>
            <div className="demo-list">
                <ul className={showMainPlayer ? 'overlay' : ''}>
                    {songs.map(song => (
                        <li
                            className={song === currentSong ? 'current-song' : ''}
                            key={song.id}>
                            <IoEllipsisHorizontal
                                onClick={() => {
                                    setSongOptions(song);
                                }}
                                className="settings-btn"
                            />
                            <div>
                                <button type="button"
                                    onClick={() => play(song)}>
                                    {song === currentSong && isPlaying ? <IoPauseSharp /> : <IoPlayOutline />}
                                </button>
                            </div>
                            <div className="song-details"
                                onClick={() => {
                                    setCurrentSong(song);
                                    setShowMainPlayer(true);
                                }}>
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
