import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import comments from '../assets/comments.json'
import MenuPanel from '../components/MenuPanel'
// import songs from '../assets/audio/songs'
import { IoReturnUpBack } from 'react-icons/io5'
import styles from './DemoOptions.module.css'
import SongPanel from '../components/SongPanel'
import { useAuthentication } from '../hooks/authentication'
import { axiosConfig, deleteDemoById, getDemoByUserId } from '../axios/axiosConfig'
import { PlayerContext } from '../components/context/PlayerContextProvider'
import ConfirmationModal from '../components/confirmationModal/ConfirmationModal'
import SideDrawer from '../components/sideDrawer/SideDrawer'


function DemoOptions({ isAdmin }) {

    const { songId } = useParams()
    const [comment, setComment] = useState()
    const [song, setSong] = useState()
    const { setCurrentSong } = useContext(PlayerContext)
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        fetchData()

        async function fetchData() {
            const { data } = await getDemoByUserId(songId)
            setSong(data)
            console.log(song);
        }

    }, [songId])


    const adminLinks = () => {
        if (isAdmin) {
            if (comment.message === '') {
                return <li><Link to={`/write-comment/${songId}`}>Write new comment</Link></li>
            } else {
                return <li><Link to={`/edit-comment/${songId}`}>Edit comment</Link></li>
            }
        }
    }

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
            {showModal && <ConfirmationModal action={modalAction} />}
            <div className={styles.page}>
                <div className={styles.container}>
                    <h3>Demo options</h3>
                    {song && <SongPanel song={song} />}
                    <MenuPanel>
                        <li><Link to="/my-demos">
                            <IoReturnUpBack />Back to all demos</Link>
                        </li>
                        {(song && song.comment) && (
                            <>
                                <li>
                                    <Link to={`/view-comment/${songId}`}>View comment</Link>
                                </li>
                                {adminLinks()}
                            </>
                        )}
                        <li>
                            <Link to={'#'} onClick={() => setShowModal(true)}>Delete demo</Link>
                        </li>
                    </MenuPanel>
                </div>
            </div>
        </>
    )
}

export default DemoOptions
