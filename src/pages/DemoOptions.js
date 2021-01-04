import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import songs from '../assets/audio/songs.json'
import styles from './DemoOptions.module.css'
import comments from '../assets/comments.json'
import { IoReturnUpBack } from 'react-icons/io5'
import MenuPanel from '../components/MenuPanel'
import SongCard from '../components/SongCard'


function DemoOptions({ isAdmin }) {

    const { songId } = useParams()
    const [comment, setComment] = useState()

    useEffect(() => {
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
            <h3>Demo options</h3>
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
                        {/* <li>
                            <Link to={`/#`}>View comment</Link>
                        </li> */}
                        <li>
                            <Link to={`#`}>Delete demo</Link>
                        </li>
                    </>
                )}
            </MenuPanel>
        </div>
    )
}

export default DemoOptions
