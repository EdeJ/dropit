import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
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
