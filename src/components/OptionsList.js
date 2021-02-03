import React from 'react'
import { Link } from 'react-router-dom'

function OptionsList({ isAdmin, song }) {

    console.log(song);

    return (
        <>
            {song.comment && (
                <li key="view">
                    <Link to={`/view-comment/${song.id}`}>View comment</Link>
                </li>
            )}
            { isAdmin && (
                <>
                    {song.comment ? (
                        <>
                            <li key="edit"><Link to={`/edit-comment/${song.id}`}>Edit comment</Link></li>
                            <li key="delete"><Link to={`/delete-comment/${song.id}`}>Delete comment</Link></li>
                        </>
                    ) : (
                            <li key="write"><Link to={`/write-comment/${song.id}`}>Write new comment</Link></li>
                        )}
                </>
            )}
        </>
    )
}

export default OptionsList
