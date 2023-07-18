const ArticleCard = ({title, article_img_url, comment_count, votes}) => {
    return (
        <div className="articleCard">
            <p>{title}</p>
            <img className="articleCardImg" src={article_img_url} alt={title} />
            <p>Comment Count: {comment_count}   Votes: {votes}</p>
        </div>
    )
}

export default ArticleCard