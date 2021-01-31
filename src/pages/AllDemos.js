import React, { useContext, useEffect, useState } from 'react'
import SongCard from '../components/SongCard';
import { PlayerContext } from '../components/context/PlayerContextProvider';
import { getAllDemos } from '../axios/axiosConfig';
import './MyDemos.css'

function AllDemos() {

    const { showMainPlayer } = useContext(PlayerContext)
    const [songs, setSongs] = useState()

    useEffect(() => {
        fetchData();
        async function fetchData() {
            try {
                const { data } = await getAllDemos()
                setSongs(data)
            } catch (error) {
            }
        }
    }, [])

    return (
        <div className="full-page">
            <h3>All Demos</h3>
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

export default AllDemos
