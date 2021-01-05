import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import comments from '../assets/comments.json'
import MenuPanel from '../components/MenuPanel'
import SongCard from '../components/SongCard'
import songs from '../assets/audio/songs'
import { IoReturnUpBack } from 'react-icons/io5'
import styles from './DemoOptions.module.css'


function DemoOptions({ isAdmin }) {

    const { songId } = useParams()
    const [comment, setComment] = useState()
    const [song, setSong] = useState();

    useEffect(() => {
        setSong(songs.find(s => s.id === parseInt(songId)))
        setComment(comments.find(c => c.songId === parseInt(songId)))
    }, [songId])


    const adminLinks = () => {
        if (isAdmin) {
            if (comment.message === '') {
                return <li><Link to={`/write-comment/${songId}`}>Write new comment</Link></li>
            } else {
                return <li><Link to={`/edit-comment/${songId}`}>Edit comment</Link></li>
            }
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h3>Demo options</h3>
                <div className={styles.center}>
                    {song &&
                        <SongCard
                            song={song}
                            size={{ width: '100%', height: 180 }}
                            settingBtn={false}
                        />}
                </div>
                <MenuPanel>
                    <li><Link to="/my-demos">
                        <IoReturnUpBack />Back to all demos</Link>
                    </li>
                    {comment && (
                        <>
                            <li>
                                <Link to={`/view-comment/${songId}`}>View comment</Link>
                            </li>
                            {adminLinks()}
                            <li>
                                <Link to={`#`}>Delete demo</Link>
                            </li>
                        </>
                    )}
                </MenuPanel>
            </div>
        </div>
    )
}

export default DemoOptions
