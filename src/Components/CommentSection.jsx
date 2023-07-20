import React, { useState, useEffect } from "react"
import { formatDistanceToNow } from "date-fns"
import { getCommentsByArticleId } from "../api"
import CommentCard  from "./CommentCard"

const CommentSection = ({id}) => {
    const [articleComments, setArticleComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCommentsByArticleId(id)
        .then((res) => {
            setArticleComments(res)
            setLoading(false)
        }).catch((er) => {
            console.log(er)
            setArticleComments([])
            setLoading(false)
        })
    }, [id])

    function findTimeSince(originalDate){
        const oldDate = new Date(originalDate)
        return formatDistanceToNow(oldDate, {addSuffix: true})
    }

    return loading 
    ? <h2 id='loading-msg'>Loading comments...</h2> : 
    
    articleComments.length === 0 ? <h2>No comments yet!</h2> :
    <div>
        <p>{articleComments.length} comments</p>
        <ul className='comment_list'>
            {(articleComments.sort((a,b) => b.votes - a.votes)).map(({author, body, created_at, votes, comment_id}) => {
                return <CommentCard key={comment_id}
                author={author}
                body={body}
                created_at={findTimeSince(created_at)}
                votes={votes}
                />
            })}
        </ul>
    </div>
}

export default CommentSection