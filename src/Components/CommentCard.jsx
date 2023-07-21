import React from "react"

const CommentCard = ({author, body, created_at, votes}) => {

    return (
        <div className="commentCard">
            <h5>{author}</h5>
            <p>{body}</p>
            <p>❤️: {votes}</p>
            <p>Created: {created_at}</p>
        </div>
    )
}

export default CommentCard