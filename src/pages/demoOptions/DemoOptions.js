import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import MenuPanel from '../../components/menuPanel/MenuPanel'
import { IoReturnUpBack } from 'react-icons/io5'
import SongPanel from '../../components/songPanel/SongPanel'
import { useAuthentication } from '../../hooks/authentication'
import { deleteDemoById, getDemoById } from '../../helpers/axiosConfig'
import { PlayerContext } from '../../components/context/PlayerContextProvider'
import ConfirmationModal from '../../components/confirmationModal/ConfirmationModal'
import { roles } from '../../helpers/roles'

import styles from './DemoOptions.module.css'

function DemoOptions() {

    const { songId } = useParams()
    const [song, setSong] = useState()
    const { currentSong, setCurrentSong, pause } = useContext(PlayerContext)
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const { user, isAdmin } = useAuthentication()

    useEffect(() => {

        fetchData()
        async function fetchData() {
            const { data } = await getDemoById(songId)
            setSong(data)
        }

    }, [songId])


    async function modalAction(allowAction) {
        setShowModal(false)
        if (allowAction) {
            const result = await deleteDemoById(songId)
            if (result) {

                // if the deleted song is the currently playing song, 
                // stop playing audio and set current song to null, this will hide the sticky footer music player.
                if (currentSong && parseInt(songId) === parseInt(currentSong.id)) {
                    setCurrentSong(null)
                    pause()
                }
                isAdmin() ? history.push('/all-demos') : history.push('/my-demos')
            }
        }
    }

    return (
        <>
            {showModal && (
                <ConfirmationModal
                    action={modalAction}
                    message="Are you sure you want to delete this demo?"
                />
            )}
            <div className={styles['page']}>
                <div className={styles['container']}>
                    <h3>Demo options</h3>
                    {song && (
                        <>
                            <SongPanel song={song} />
                            <MenuPanel>
                                <li>
                                    <Link to={user.roles.includes(roles.ADMIN) ? '/all-demos' : '/my-demos'} >
                                        <IoReturnUpBack />Back to all demos</Link>
                                </li>
                                {song.comment && (
                                    <li key="view">
                                        <Link to={`/view-comment/${song.id}`}>View comment</Link>
                                    </li>
                                )}
                                {isAdmin() && !song.comment && (
                                    <li key="write">
                                        <Link to={`/write-comment/${song.id}`}>Write comment</Link>
                                    </li>
                                )}
                                <li>
                                    <Link to={'#'} onClick={() => setShowModal(true)}>Delete demo</Link>
                                </li>
                            </MenuPanel>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default DemoOptions
