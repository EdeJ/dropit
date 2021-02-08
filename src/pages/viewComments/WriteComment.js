import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { addComment, getDemoById } from '../../axios/axiosConfig'
import SongPanel from '../../components/SongPanel'

import styles from './ViewComment.module.css'

function WriteComment() {

    const { songId } = useParams()
    const [comment, setComment] = useState({})
    const [song, setSong] = useState(null)
    const history = useHistory()

    useEffect(() => {

        fetchData()
        async function fetchData() {
            const { data } = await getDemoById(songId)
            setSong(data)
            const newComment = {}
            newComment.demoId = songId
            newComment.message = ''
        }
    }, [songId])

    function handleChange(event) {
        const updatedComment = { ...comment }
        updatedComment.message = event.target.value
        updatedComment.demoId = songId
        setComment(updatedComment)
    }

    async function handleSave() {
        await addComment(comment)
        history.push(`/view-comment/${songId}`)

    }

    return (
        <div className={styles['center']}>
            <div className={styles['full-page']}>
                <h3>Write comment</h3>
                {song && <SongPanel song={song} />}
                <p className={styles['comment']}>
                    <textarea
                        value={comment.message}
                        onChange={handleChange}
                    />
                </p>
                <button
                    className={styles['save']}
                    type="button"
                    onClick={handleSave}
                >Save comment</button>
            </div>
        </div>
    )
}

export default WriteComment
