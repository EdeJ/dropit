import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import comments from '../assets/comments'
import songs from '../assets/audio/songs'
import styles from './ViewComment.module.css'
import SongPanel from '../components/SongPanel'
import { axiosConfig } from '../axios/axiosConfig'
import { useAuthentication } from '../hooks/authentication'

function EditComment() {

    const { songId } = useParams()
    const [comment, setComment] = useState(null)
    const [song, setSong] = useState(null)
    const history = useHistory()
    const { user } = useAuthentication()

    useEffect(() => {
        fetchData();
        async function fetchData() {
            try {
                const result = await axiosConfig.get(`/api/demos/${songId}`, { headers: { Authorization: user.accessToken } })
                console.log(result);
                setSong(result.data)
                setComment(comments.find(c => c.songId === parseInt(result.data.id)));
            } catch (error) {

            }
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
