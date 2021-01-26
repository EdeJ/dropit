import React, { useContext, useEffect, useState } from 'react'
// import songs from '../assets/audio/songs'
import './MyDemos.css'
import SongCard from '../components/SongCard';
import { PlayerContext } from '../components/context/PlayerContextProvider';
import { axiosConfig } from '../axios/axiosConfig';
import { useAuthentication } from '../hooks/authentication';


function MyDemos() {

    const { user } = useAuthentication()
    const { showMainPlayer, setCurrentSong } = useContext(PlayerContext)
    const [songs, setSongs] = useState()

    useEffect(() => {
        fetchData();
        async function fetchData() {
            try {
                console.log("useId: ", user);
                const result = await axiosConfig.get(`/api/demos/by-user/${user.userId}`, { headers: { Authorization: user.accessToken } })
                console.log(result);
                setSongs(result.data)
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
