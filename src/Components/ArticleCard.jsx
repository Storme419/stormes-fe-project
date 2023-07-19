import React from "react"
import { Link } from "react-router-dom"

const ArticleCard = ({title, article_img_url, comment_count, votes, article_id}) => {

    return (
        <div className="articleCard">
            <Link to={`/articles/${article_id}`}>
                <p>{title}</p>
                <img className="articleImg" src={article_img_url} alt={title} />
            </Link>
            
            <p>Comment Count: {comment_count}   Votes: {votes}</p>
        </div>
    )
}

export default ArticleCard