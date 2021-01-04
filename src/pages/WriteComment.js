import React from 'react'
import { useParams } from 'react-router-dom';

function WriteComment() {
    const { songId } = useParams();
    return (
        <div>
            Write a comment {songId}
        </div>
    )
}

export default WriteComment
