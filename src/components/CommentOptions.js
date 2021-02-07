import React, { useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { deleteComment } from '../axios/axiosConfig'
import { useAuthentication } from '../hooks/authentication'
import ConfirmationModal from './confirmationModal/ConfirmationModal'

function CommentOptions({ song, comment }) {

    const { isAdmin } = useAuthentication()
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    async function modalAction(allowAction) {
        setShowModal(false)
        if (allowAction) {
            // setCurrentSong(null)
            const result = await deleteComment(comment.commentId)
            if (result) {
                history.push(`/demo-options/${song.id}`)
            }
        }
    }

    return (
        <>
            {showModal && (
                <ConfirmationModal
                    action={modalAction}
                    message="Are you sure you want to delete this comment?"
                />
            )}
            {comment && (
                <li key="view">
                    <NavLink to={`/view-comment/${song.id}`}>View comment</NavLink>
                </li>
            )}
            {isAdmin() && (
                <>
                    {comment ? (
                        <>
                            <li key="edit"><Link to={`/edit-comment/${song.id}`}>Edit comment</Link></li>
                            <li key="delete">
                                <Link
                                    to={'#'}
                                    onClick={() => setShowModal(true)}
                                >
                                    Delete comment
                                    </Link>
                            </li>
                        </>
                    ) : (
                            <li key="write"><Link to={`/write-comment/${song.id}`}>Write new comment</Link></li>
                        )}
                </>
            )}
        </>
    )
}

export default CommentOptions
