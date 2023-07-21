import React, { useState } from "react"
import { Link } from "react-router-dom"
import { patchVotes } from "../api"

const ArticleCard = ({title, article_img_url, comment_count, votes, article_id}) => {
    const [userVotes, setUserVotes] = useState(0)
    const [isError, setIsError] = useState(false)

    const handleClick = () => {
        setUserVotes((userVotes) => {
            return userVotes === 0 ?  userVotes + 1 : userVotes - 1
        })
        patchVotes(article_id, userVotes).catch((err) => {
            console.log(err)
            setIsError(true)
        })
    }

    return (
        <div className="articleCard">
            <Link to={`/articles/${article_id}`}>
                <p>{title}</p>
                <img className="articleImg" src={article_img_url} alt={title} />
            </Link>
            <p>{votes + userVotes}</p>
            <button aria-label="Like this article" 
            onClick={handleClick}>{userVotes === 0 ? '♡' : '❤️'}</button>
            {isError ? <p>Something went wrong! Please try again</p> : null}
            <p>Comment Count: {comment_count}</p>
        </div>
    )
}

export default ArticleCard