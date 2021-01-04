import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import comments from '../assets/comments'
import songs from '../assets/audio/songs'
import styles from './ViewComment.module.css'
import { IoPencilSharp } from 'react-icons/io5'

function ViewComment() {

    const { songId } = useParams();
    const [comment, setComment] = useState(null);
    const [song, setSong] = useState(null);

    useEffect(() => {
        setComment(comments.find(c => c.songId === parseInt(songId)));
        setSong(songs.find(s => s.id === parseInt(songId)));

    }, [songId])

    return (
        <div className={styles.fullPage}>
            <h3 style={{ marginBottom: 60 }}>View comment</h3>
            {song && (
                <div>
                    <strong>{song.title}</strong>
                    <p>Artist: {song.artist}</p>
                </div>
            )}
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
                {comment && comment.message}
            </p>
            <ul className={styles.linkList}>
                <li><NavLink to='/my-demos'>My demos</NavLink></li>
            </ul>
        </div>
    )
}

export default ViewComment
