import React, { useState } from "react"
import { postComment } from "../api"

const CommentForm = ({id, user, setArticleComments}) => {
    const [newComment, setNewComment] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(id, user, body)
        .then((postedComment) => {
            setArticleComments((currentComments) => {
                return[postedComment, ...currentComments]
            })
            setBody("")
        })
        .catch((er) => {
            console.log(er)
        })
    }

    return (
        <form className="commentForm" onSubmit={handleSubmit}>
            <label htmlFor="new-comment">Write a new comment:</label>
            <textarea 
            id="new-comment"
            value={body}
            onChange={(e) => {
                setBody(e.target.value)
            }} required
            />
            <button>Submit</button>
        </form>
    )
}

export default CommentForm
