import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SongCard from '../../components/songCard/SongCard'
import { PlayerContext } from '../../components/context/PlayerContextProvider'
import { getAllDemosByUserId } from '../../helpers/axiosConfig'
import { useAuthentication } from '../../hooks/authentication'
import { IoAddCircle } from 'react-icons/io5'

import styles from './MyDemos.module.css'
import Spinner from '../../components/spinner/Spinner'

function MyDemos() {

    const { user } = useAuthentication()
    const { showMainPlayer } = useContext(PlayerContext)
    const [songs, setSongs] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        fetchData()

        async function fetchData() {
            setIsLoading(true)
            try {
                const { data } = await getAllDemosByUserId(user.userId)
                setSongs(data)
                setIsLoading(false)
            } catch (error) {
                // TODO User error message
                setIsLoading(false)
                console.log(error)
            }
        }
    }, [user])

    return (
        <>
            {isLoading && <Spinner />}
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
        </>
    )
}

export default MyDemos
