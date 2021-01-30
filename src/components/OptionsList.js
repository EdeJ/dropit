import React from 'react'
import { Link } from 'react-router-dom'

function OptionsList({ isAdmin, song }) {

    console.log(song);

    return (
        <>
            {song.comment && (
                <li>
                    <Link to={`/view-comment/${song.id}`}>View comment</Link>
                </li>
            )}
            { isAdmin && (
                <>
                    <li><Link to={`/write-comment/${song.id}`}>Write new comment</Link></li>
                    {song.comment && (
                        <li><Link to={`/edit-comment/${song.id}`}>Edit comment</Link></li>
                    )}
                </>
            )}
        </>
    )
}

export default OptionsList
