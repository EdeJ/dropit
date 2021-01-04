import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory, useParams } from 'react-router-dom'
import comments from '../assets/comments'
import songs from '../assets/audio/songs'
import styles from './ViewComment.module.css'

function EditComment() {

    const { songId } = useParams();
    const [comment, setComment] = useState(null);
    const [song, setSong] = useState(null);
    const history = useHistory();

    useEffect(() => {
        setComment(comments.find(c => c.songId === parseInt(songId)));
        setSong(songs.find(s => s.id === parseInt(songId)));

    }, [songId])

    function handleChange(event) {
        setComment({ ...comment, message: event.target.value });
    }

    function handleSave() {
        console.log("write update to Database");
        history.push(`/view-comment/${songId}`);

    }

    return (
        <div className={styles.fullPage}>
            <h3>Edit comment</h3>
            {song && (
                <div>
                    <strong>{song.title}</strong>
                    <p>Artist: {song.artist}</p>
                </div>
            )}
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
    )
}

export default EditComment
