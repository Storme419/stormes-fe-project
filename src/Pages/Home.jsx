import React from 'react'
import ArticleCard from '../Components/ArticleCard'

const Home = ({articles}) => {
    
    return (
    <section className="home">
        <h2>Most popular articles</h2>
        <ul className='article_list'>
            {(articles.sort((a,b) => b.comment_count - a.comment_count)).map(({title, article_img_url, comment_count, votes, article_id}) => {
                return <ArticleCard key={article_id}
                title={title}
                article_img_url={article_img_url}
                comment_count={comment_count}
                votes={votes}
                article_id={article_id}
                />
            })}
        </ul>
    </section>
    )
}

export default Home