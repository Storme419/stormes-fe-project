import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { getArticleById } from "../api"

const ArticlePage = () => {
    const {id} = useParams()
    const [currentArticle, setCurrentArticle] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticleById(id)
        .then((res) => {
            setCurrentArticle(res)
            setLoading(false)
        }).catch(console.log)
    }, [])
console.log(currentArticle)
    function findTimeSince(originalDate){
        const oldDate = new Date(originalDate)
        return formatDistanceToNow(oldDate, {addSuffix: true})
    }
    
    return loading 
    ? <h2 id='loading-msg'>Loading...</h2> : 
    
    <section className="article">
        <h2>Article Page</h2>
        <h3>{currentArticle.title}</h3>
        <h4>By {currentArticle.author}</h4>
        <img className="articleImg" src={currentArticle.article_img_url} alt={currentArticle.title} />
        <p>Created {findTimeSince(currentArticle.created_at)}</p>
        <p>Votes: {currentArticle.votes} </p>
        <p>Tags: {currentArticle.topic}</p> 
        <p>{currentArticle.body}</p>
    </section>
}

export default ArticlePage