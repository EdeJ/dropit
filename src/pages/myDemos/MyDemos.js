import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SongCard from '../../components/songCard/SongCard'
import { PlayerContext } from '../../components/context/PlayerContextProvider'
import { getAllDemosByUserId } from '../../helpers/axiosConfig'
import { useAuthentication } from '../../hooks/authentication'
import { IoAddCircle } from 'react-icons/io5'

import styles from './MyDemos.module.css'

function MyDemos() {

    const { user } = useAuthentication()
    const { showMainPlayer } = useContext(PlayerContext)
    const [songs, setSongs] = useState()

    useEffect(() => {
        // TODO loading icon 
        fetchData()
        async function fetchData() {
            try {
                const { data } = await getAllDemosByUserId(user.userId)
                setSongs(data)
            } catch (error) {
            }
        }
    }, [user])

    return (
        <div className="full-page">
            <h3>My Demos</h3>
            <div className={styles['demo-list']}>
                {!showMainPlayer && (
                    <ul>
                        <li className={styles['add-btn-container']}>
                            <Link to="/add-new-demo">
                                <IoAddCircle />
                                <p>Add new demo</p>
                            </Link>

                        </li>
                        {songs && songs.map(song => (
                            <li key={song.id}>
                                <SongCard
                                    song={song}
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
