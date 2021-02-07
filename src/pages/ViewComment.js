import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoPencilSharp, IoReturnUpBack } from 'react-icons/io5'
import MenuPanel from '../components/MenuPanel'
import SongPanel from '../components/SongPanel'
import { getDemoById } from '../axios/axiosConfig'
import { useAuthentication } from '../hooks/authentication'
import CommentOptions from '../components/CommentOptions'
import { roles } from '../helpers/roles'

import styles from './ViewComment.module.css'

function ViewComment() {

    const { user, isAdmin } = useAuthentication()
    const { songId } = useParams()
    const [comment, setComment] = useState()
    const [song, setSong] = useState(null)

    useEffect(() => {

        fetchData()
        async function fetchData() {
            const result = await getDemoById(songId)
            if (result) {
                setSong(result.data)
                setComment(result.data.comment)
            }

        }
    }, [songId])

    return (
        <div className={styles['center']}>
            <div className={styles['full-page']}>
                <h3 style={{ marginBottom: 60 }}>View comment</h3>
                {song && <SongPanel song={song} />}
                <div className={styles['container']}>
                    {isAdmin() && (
                        <Link
                            className={styles['edit']}
                            to={`/edit-comment/${songId}`}
                            title="edit comment"
                        >
                            <IoPencilSharp />
                        </Link>
                    )}
                </div>
                <p className={styles['comment']}>
                    {comment && comment.message}
                </p>
                <MenuPanel>
                    <li>
                        <Link to={user.roles.includes(roles.ADMIN) ? '/all-demos' : '/my-demos'} >
                            <IoReturnUpBack /> Back to all demos
                        </Link>
                    </li>
                    {comment && <CommentOptions song={song} comment={comment} />}
                </MenuPanel>
            </div>
        </div>
    )
}

export default ViewComment
