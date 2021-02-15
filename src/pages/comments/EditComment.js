import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import SongPanel from '../../components/songPanel/SongPanel'
import Spinner from '../../components/spinner/Spinner'
import { getDemoById, updateComment } from '../../helpers/axiosConfig'

import styles from './ViewComment.module.css'

function EditComment() {

    const { songId } = useParams()
    const [comment, setComment] = useState(null)
    const [song, setSong] = useState(null)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        fetchData()
        async function fetchData() {
            setIsLoading(true)
            const { data } = await getDemoById(songId)
            setIsLoading(false)
            setSong(data)
            setComment(data.comment)
        }
    }, [songId])

    function handleChange(event) {
        const updatedComment = { ...comment }
        updatedComment.message = event.target.value
        updatedComment.demoId = parseInt(songId)
        updatedComment.viewed = false
        setComment(updatedComment)
    }

    async function handleSave() {
        setIsLoading(true)
        await updateComment(comment)
        setIsLoading(false)
        history.push(`/view-comment/${songId}`)

    }

    return (
        <>
            {isLoading && <Spinner />}
            <div className={styles['center']}>
                <div className={styles['full-page']}>
                    <h3>Edit comment</h3>
                    {song && <SongPanel song={song} />}
                    <p className={styles['comment']}>
                        {comment && (
                            <textarea
                                value={comment.message}
                                onChange={handleChange}
                            />
                        )}
                    </p>
                    <button
                        className={styles['save']}
                        type="button"
                        onClick={handleSave}
                    >Save comment</button>
                </div>
            </div>
        </>
    )
}

export default EditComment
