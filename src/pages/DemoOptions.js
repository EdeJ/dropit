import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import MenuPanel from '../components/MenuPanel'
import { IoReturnUpBack } from 'react-icons/io5'
import SongPanel from '../components/SongPanel'
import { useAuthentication } from '../hooks/authentication'
import { deleteDemoById, getDemoById } from '../axios/axiosConfig'
import { PlayerContext } from '../components/context/PlayerContextProvider'
import ConfirmationModal from '../components/confirmationModal/ConfirmationModal'
import OptionsList from '../components/OptionsList'
import { roles } from '../helpers/roles'

import styles from './DemoOptions.module.css'

function DemoOptions() {

    const { songId } = useParams()
    const [song, setSong] = useState()
    const { setCurrentSong } = useContext(PlayerContext)
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
            setCurrentSong(null)
            const result = await deleteDemoById(songId)
            if (result) {
                history.push('/my-demos')
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
            <div className={styles.page}>
                <div className={styles.container}>
                    <h3>Demo options</h3>
                    {song && (
                        <>
                            <SongPanel song={song} />
                            <MenuPanel>
                                <li>
                                    <Link to={user.roles.includes(roles.ADMIN) ? '/all-demos' : '/my-demos'} >
                                        <IoReturnUpBack />Back to all demos</Link>
                                </li>
                                {/* {song && <OptionsList isAdmin={user.roles.includes(roles.ADMIN)} song={song} />} */}
                                {song.comment && (
                                    <li key="view">
                                        <Link to={`/view-comment/${song.id}`}>View comment</Link>
                                    </li>
                                )}
                                {isAdmin() && (
                                    <>
                                        {song.comment ? (
                                            <>
                                                <li key="edit"><Link to={`/edit-comment/${song.id}`}>Edit comment</Link></li>
                                                <li key="delete"><Link to={`/delete-comment/${song.id}`}>Delete comment</Link></li>
                                            </>
                                        ) : (
                                                <li key="write"><Link to={`/write-comment/${song.id}`}>Write new comment</Link></li>
                                            )}
                                    </>
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
