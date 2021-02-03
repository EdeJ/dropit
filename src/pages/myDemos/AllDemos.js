import React, { useEffect, useState } from 'react'
import SongCard from '../../components/SongCard'
import { getAllUsers } from '../../axios/axiosConfig'

import styles from './MyDemos.module.css'

function AllDemos() {

    const [allUsers, setAllUsers] = useState()

    useEffect(() => {
        fetchData()
        async function fetchData() {
            try {
                const { data } = await getAllUsers()
                console.log("All USERSL ", data)
                setAllUsers(data)
            } catch (error) {
            }
        }
    }, [])

    return (
        <div className="full-page">
            <h3>All Demos</h3>
            <div className={styles['demo-list']}>
                <ul>
                    {allUsers && allUsers.map(user => (
                        <>
                            {user.demos.length > 0 && (
                                <li className={styles['user']}><strong>User: </strong>{user.username}</li>
                            )}
                            {user.demos.map(demo => (
                                <li key={demo.id}>
                                    <SongCard
                                        song={demo}
                                        size={{ width: 144, height: 144 }}
                                    />
                                </li>
                            ))}
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AllDemos
