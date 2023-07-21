import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { getArticleById } from "../api"
import CommentSection from "../Components/CommentSection"
import { patchVotes } from "../api"

const ArticlePage = ({user}) => {
    const {id} = useParams()
    const [currentArticle, setCurrentArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [userVotes, setUserVotes] = useState(0)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getArticleById(id)
        .then((res) => {
            setCurrentArticle(res)
            setLoading(false)
        }).catch(console.log)
    }, [id])

    function findTimeSince(originalDate){
        const oldDate = new Date(originalDate)
        return formatDistanceToNow(oldDate, {addSuffix: true})
    }

    const handleClick = () => {
        setUserVotes((userVotes) => {
            return userVotes === 0 ?  userVotes + 1 : userVotes - 1
        })
        patchVotes(id, userVotes).catch((err) => {
            console.log(err)
            setIsError(true)
            setUserVotes(null)
        })
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
            <p>{currentArticle.votes + userVotes}</p>
            <button aria-label="Like this article" 
            onClick={handleClick}>{userVotes === 0 ? '♡' : userVotes === 1 ? '❤️' : setUserVotes(0) && '♡'}</button>
            {isError ? <p>Something went wrong! Please try again</p> : null}
            <p>Tags: {currentArticle.topic}</p> 
            <p>{currentArticle.body}</p>
        </article>
        <CommentSection id={id} user={user} />
    </section>

    
}

export default ArticlePage