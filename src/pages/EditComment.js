import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import styles from './ViewComment.module.css'
import SongPanel from '../components/SongPanel'
import { getDemoById } from '../axios/axiosConfig'


function EditComment() {

    const { songId } = useParams()
    const [comment, setComment] = useState(null)
    const [song, setSong] = useState(null)
    const history = useHistory()

    useEffect(() => {

        fetchData()

        async function fetchData() {

            const { data } = await getDemoById(songId)
            setSong(data)
            setComment(data.comment.message)

        }
    }, [songId])

    function handleChange(event) {
        setComment({ ...comment, message: event.target.value })
    }

    function handleSave() {
        console.log("write update to Database")
        history.push(`/view-comment/${songId}`)

    }

    return (
        <div className={styles.center}>
            <div className={styles.fullPage}>
                <h3>Edit comment</h3>
                {song && <SongPanel song={song} />}
                <p className={styles.comment}>
                    {comment && (
                        <textarea
                            value={comment.message}
                            onChange={handleChange}
                        />
                    )}
                </p>
                <button
                    className={styles.save}
                    type="button"
                    onClick={handleSave}
                >Save comment</button>
            </div>
        </div>
    )
}

export default EditComment
