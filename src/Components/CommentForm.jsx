import React, { useState } from "react"
import { postComment } from "../api"

const CommentForm = ({id, user, setArticleComments}) => {
    const [newComment, setNewComment] = useState("")
    const [body, setBody] = useState("")
    const [isError, setIsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(id, user, body)
        .then((postedComment) => {
            setArticleComments((currentComments) => {
                return[postedComment, ...currentComments]
            })
            setBody("")
            setIsError(false)
        })
        .catch((er) => {
            console.log(er)
            setIsError(true)
            
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
        {    isError ? <p>Unable to post Comment, please try again later</p> : null}
        </form>
    )
}

export default CommentForm
