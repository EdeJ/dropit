import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoPencilSharp, IoReturnUpBack } from 'react-icons/io5'
import MenuPanel from '../../components/menuPanel/MenuPanel'
import SongPanel from '../../components/SongPanel'
import { getDemoById, updateComment } from '../../axios/axiosConfig'
import { useAuthentication } from '../../hooks/authentication'
import CommentOptions from '../../components/CommentOptions'
import { roles } from '../../helpers/roles'

import styles from './ViewComment.module.css'

function ViewComment() {

    const { user, isAdmin } = useAuthentication()
    const { songId } = useParams()
    const [comment, setComment] = useState()
    const [song, setSong] = useState(null)

    useEffect(() => {

        let timerId;

        fetchData()
        async function fetchData() {
            const result = await getDemoById(songId)
            if (result) {
                setSong(result.data)
                setComment(result.data.comment)
            }

            const updatedComment = { ...result.data.comment }
            updatedComment.demoId = parseInt(songId)
            updatedComment.viewed = true

            // When viewed by user, update comment viewed-status to true after 2 seconds
            if (!isAdmin()) {
                timerId = setTimeout(() => {
                    updateComment(updatedComment)
                }, 2000);
            }
        }

        return () => clearTimeout(timerId)

    }, [songId, isAdmin])

    return (
        <div className={styles['center']}>
            <div className={styles['full-page']}>
                <h3>View comment</h3>
                {song && <SongPanel song={song} />}
                <div className={styles['container']}>
                    {isAdmin() && (
                        <Link className={styles['edit']}
                            to={`/edit-comment/${songId}`}
                            title="edit comment"
                        ><IoPencilSharp /> <span>edit</span>
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
                    {comment && (
                        <CommentOptions song={song} comment={comment} />
                    )}
                </MenuPanel>
            </div>
        </div>
    )
}

export default ViewComment
