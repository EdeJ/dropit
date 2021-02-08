import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import SongPanel from '../../components/SongPanel'
import { getDemoById, updateComment } from '../../axios/axiosConfig'

import styles from './ViewComment.module.css'

function EditComment() {

    const { songId } = useParams()
    const [comment, setComment] = useState(null)
    const [song, setSong] = useState(null)
    const history = useHistory()

    const [html, setHtml] = useState('my <b>HTML</b>');

    useEffect(() => {

        fetchData()
        async function fetchData() {

            const { data } = await getDemoById(songId)
            setSong(data)
            setComment(data.comment)
        }
    }, [songId])

    function onChange(e) {
        setHtml(e.target.value);
    }


    function handleChange(event) {
        const updatedComment = { ...comment }
        updatedComment.message = event.target.value
        updatedComment.demoId = parseInt(songId)
        setComment(updatedComment)
    }

    async function handleSave() {
        await updateComment(comment)
        history.push(`/view-comment/${songId}`)

    }

    return (
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
    )
}

export default EditComment
