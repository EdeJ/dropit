import React, { useEffect, useState } from 'react'
import SongCard from '../../components/SongCard'
import { getAllUsers } from '../../axios/axiosConfig'

import styles from './MyDemos.module.css'

function AllDemos() {

    const [allUsers, setAllUsers] = useState()
    const [hasDemos, setHasDemos] = useState(false)

    useEffect(() => {

        fetchData()
        async function fetchData() {
            try {
                const { data } = await getAllUsers()
                setAllUsers(data)

                // Check if there are any demos
                data.forEach(user => {
                    if (user.demos.length > 0) {
                        setHasDemos(true)
                    }
                })
            } catch (error) {
            }
        }
    }, [])

    function displayDemos(demos) {
        return demos.map(demo => (
            <li key={demo.id}>
                <SongCard
                    song={demo}
                    size={{ width: 144, height: 144 }}
                />
            </li>
        ))
    }

    function displayUser(user) {
        return user.demos.length > 0 && (
            <ul key={`ul.${user.userId}`}>
                <li
                    key={`user.${user.userId}`}
                    className={styles['user']}>
                    <strong>User: </strong>{user.username}
                </li>
                {displayDemos(user.demos)}
            </ul>
        )
    }


    return (
        <div className="full-page">
            <h3>All Demos</h3>
            <div className={styles['demo-list']}>
                {!hasDemos && <ul><li key="no-demos">No demos yet...</li></ul>}
                {allUsers && allUsers.map(user => (
                    <div>
                        {displayUser(user)}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default AllDemos
