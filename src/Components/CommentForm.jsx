import React, { useState } from "react"
import { postComment } from "../api"

const CommentForm = ({id, user, setArticleComments}) => {
    const [body, setBody] = useState("")
    const [isError, setIsError] = useState(false)
    const [isPosted, setIsPosted] = useState(false)
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        setIsPending(true)
        e.preventDefault()
        postComment(id, user, body)
        .then((postedComment) => {
            setArticleComments((currentComments) => {
                return[postedComment, ...currentComments]
            })
            setBody("")
            setIsError(false)
            setIsPosted(true)
            setIsPending(false)
        })
        .catch((er) => {
            console.log(er)
            setIsError(true)
            setIsPending(false)
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
            <button disabled={isPending}>{isPending ? 'Submitting' : 'Submit'}</button>
            {isPosted ? <p>Posted comment successfully!</p> : null}
            {isError ? <p>Unable to post Comment, please try again later</p> : null}
        </form>
    )
}

export default CommentForm