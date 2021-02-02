import React, { useContext, useEffect, useState } from 'react'
import SongCard from '../components/SongCard'
import { PlayerContext } from '../components/context/PlayerContextProvider'
import { getAllDemosByUserId } from '../axios/axiosConfig'
import { useAuthentication } from '../hooks/authentication'

import './MyDemos.css'


function MyDemos() {

    const { user } = useAuthentication()
    const { showMainPlayer } = useContext(PlayerContext)
    const [songs, setSongs] = useState()


    // TODO Alle demos zitten al in de User, moet dit hier nog wel geladen worden???
    useEffect(() => {
        console.log("my-demos LOADED!")
        fetchData()
        async function fetchData() {
            try {
                const { data } = await getAllDemosByUserId(user.userId)
                setSongs(data)
            } catch (error) {
            }
        }
    }, [user])

    // function deleteDemo(demoId) {
    //     deleteDemoById(demoId)
    // }

    return (
        <div className="full-page">
            {console.log(songs)}
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
