import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { getArticleById, getCommentsByArticleId } from "../api"
import CommentCard  from "../Components/CommentCard"

const Comments = ({ children }) => (
    <section>
      {children}
    </section>
  );

const ArticlePage = () => {
    const {id} = useParams()
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleComments, setArticleComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticleById(id)
        .then((res) => {
            setCurrentArticle(res)
            setLoading(false)
        }).catch(console.log)
    }, [])

    useEffect(() => {
        getCommentsByArticleId(id)
        .then((res) => {
            setArticleComments(res)
            
        })
    }, [])

    function findTimeSince(originalDate){
        const oldDate = new Date(originalDate)
        return formatDistanceToNow(oldDate, {addSuffix: true})
    }
    
    return loading 
    ? <h2 id='loading-msg'>Loading...</h2> : 
    
    <section>
        <article className="article">
            <h2>Article Page</h2>
            <h3>{currentArticle.title}</h3>
            <h4>By {currentArticle.author}</h4>
            <img className="articleImg" src={currentArticle.article_img_url} alt={currentArticle.title} />
            <p>Created {findTimeSince(currentArticle.created_at)}</p>
            <p>Votes: {currentArticle.votes} </p>
            <p>Tags: {currentArticle.topic}</p> 
            <p>{currentArticle.body}</p>
            <p>{articleComments.length} comments</p>
        </article>
        <Comments>
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
        </Comments>
    </section>

    
}

export default ArticlePage