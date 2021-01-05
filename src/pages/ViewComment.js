import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import comments from '../assets/comments'
import songs from '../assets/audio/songs'
import styles from './ViewComment.module.css'
import { IoPencilSharp, IoReturnUpBack } from 'react-icons/io5'
import MenuPanel from '../components/MenuPanel'
// import PlayButton from '../components/PlayButton'
import SongPanel from '../components/SongPanel'

function ViewComment() {

    const { songId } = useParams();
    const [comment, setComment] = useState(null);
    const [song, setSong] = useState(null);

    useEffect(() => {
        setComment(comments.find(c => c.songId === parseInt(songId)));
        setSong(songs.find(s => s.id === parseInt(songId)));

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
                    {comment && comment.message}
                </p>
                {/* <ul className={styles.linkList}>
                <li><NavLink to='/my-demos'>My demos</NavLink></li>
            </ul> */}
                <MenuPanel>
                    <li>
                        <Link to="/my-demos"><IoReturnUpBack />Back to all demos</Link>
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
