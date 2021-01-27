import React, { useContext, useEffect, useState } from 'react'
import './MyDemos.css'
import SongCard from '../components/SongCard';
import { PlayerContext } from '../components/context/PlayerContextProvider';
import { getAllDemosByUserId } from '../axios/axiosConfig';
import { useAuthentication } from '../hooks/authentication';


function MyDemos() {

    const { user } = useAuthentication()
    const { showMainPlayer } = useContext(PlayerContext)
    const [songs, setSongs] = useState()

    useEffect(() => {
        fetchData();
        async function fetchData() {
            try {
                const { data } = await getAllDemosByUserId(user.userId)
                setSongs(data)
            } catch (error) {
            }
        }
    }, [])

    return (
        <div className="full-page">
            <h3>My Demos</h3>
            <div className="demo-list">
                {!showMainPlayer && (
                    <ul>
                        {songs && songs.map(song => (
                            <li key={song.id}>
                                <SongCard
                                    song={song}
                                    // isSelected={song === currentSong}
                                    size={{ width: 144, height: 144 }}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default MyDemos
