import React from "react"
import { useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"

const ArticlePage = ({articles}) => {
    const {id} = useParams()

    function findTimeSince(originalDate){
        const oldDate = new Date(originalDate)
        return formatDistanceToNow(oldDate, {addSuffix: true})
    }

    const currentArticle = articles.find((article) => article.article_id === parseInt(id))
    const {author, title, topic, article_img_url, comment_count, votes, article_id, created_at} = currentArticle

    const articleAge = findTimeSince(`${created_at}`)

    return (
    <section className="article">
        <h2>Article Page</h2>
        <h3>{title}</h3>
        <h4>By {author}</h4>
        <img className="articleImg" src={article_img_url} alt={title} />
        <p>Created {articleAge}</p>
        <p>Tags: {topic}</p>
        <p>Votes: {votes} Comments: {comment_count}</p>

    </section>
    )
}

export default ArticlePage