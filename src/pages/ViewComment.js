import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './ViewComment.module.css'
import { IoPencilSharp, IoReturnUpBack } from 'react-icons/io5'
import MenuPanel from '../components/MenuPanel'
import SongPanel from '../components/SongPanel'
import { getDemoById } from '../axios/axiosConfig'
import { roles } from '../helpers/roles'
import { useAuthentication } from '../hooks/authentication'

function ViewComment() {

    const { user } = useAuthentication()
    const { songId } = useParams()
    const [comment, setComment] = useState()
    const [song, setSong] = useState(null)

    useEffect(() => {

        fetchData()

        async function fetchData() {

            const { data } = await getDemoById(songId)
            setSong(data)
            setComment(data.comment.message)

        }
    }, [songId])

    return (
        <div className={styles.center}>
            <div className={styles.fullPage}>
                <h3 style={{ marginBottom: 60 }}>View comment</h3>
                {song && <SongPanel song={song} />}
                <div className={styles.container}>
                    <Link
                        className={styles.edit}
                        to={`/edit-comment/${songId}`}
                        title="edit comment"
                    >
                        <IoPencilSharp />
                    </Link>
                </div>
                <p className={styles.comment}>
                    {comment}
                </p>
                {/* <ul className={styles.linkList}>
                <li><NavLink to='/my-demos'>My demos</NavLink></li>
            </ul> */}
                <MenuPanel>
                    <li>
                        <Link to={user.roles.includes(roles.ADMIN) ? '/all-demos' : '/my-demos'} >
                            <IoReturnUpBack /> Back to all demos
                        </Link>
                    </li>
                    <li>
                        <Link to={`/edit-comment/${songId}`} >Edit comment</Link>
                    </li>
                    <li>
                        <Link to={`#`}>Delete demo</Link>
                    </li>
                </MenuPanel>
            </div>
        </div>
    )
}

export default ViewComment
