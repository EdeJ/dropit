import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import comments from '../assets/comments.json'
import MenuPanel from '../components/MenuPanel'
// import songs from '../assets/audio/songs'
import { IoReturnUpBack } from 'react-icons/io5'
import styles from './DemoOptions.module.css'
import SongPanel from '../components/SongPanel'
import { useAuthentication } from '../hooks/authentication'
import { axiosConfig, deleteDemoById, getDemoById } from '../axios/axiosConfig'
import { PlayerContext } from '../components/context/PlayerContextProvider'
import ConfirmationModal from '../components/confirmationModal/ConfirmationModal'
import SideDrawer from '../components/sideDrawer/SideDrawer'
import OptionsList from '../components/OptionsList'
import { roles } from '../helpers/roles'


function DemoOptions({ isAdmin }) {

    const { songId } = useParams()
    const [comment, setComment] = useState()
    const [song, setSong] = useState()
    const { setCurrentSong } = useContext(PlayerContext)
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const { user } = useAuthentication()

    useEffect(() => {

        fetchData()

        async function fetchData() {
            const { data } = await getDemoById(songId)
            setSong(data)
            console.log(song);
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
                    {song && <SongPanel song={song} />}
                    <MenuPanel>
                        <li>
                            <Link to={user.roles.includes(roles.ADMIN) ? '/all-demos' : 'my-demos'} >
                                <IoReturnUpBack />Back to all demos</Link>
                        </li>
                        {song && <OptionsList isAdmin={user.roles.includes(roles.ADMIN)} song={song} />}
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
