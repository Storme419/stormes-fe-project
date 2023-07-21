import React from 'react'
import ArticleCard from '../Components/ArticleCard'
import { useParams } from 'react-router-dom'

const Home = ({articles}) => {
    const {topic} = useParams()
    
    return (
    <section className="home">
        {topic === 'home' ? (
            <>
                <h2>Most popular articles</h2>
                <ul className='article_list'>
                  {articles.map(({ title, article_img_url, comment_count, votes, article_id }) => (
                    <ArticleCard
                      key={article_id}
                      title={title}
                      article_img_url={article_img_url}
                      comment_count={comment_count}
                      votes={votes}
                      article_id={article_id}
                    />
                  ))}
                </ul>
              </>
               
        ) : (
            <>
                <h2>Most popular articles</h2>
                <ul className='article_list'>
                {articles
                    .filter((article) => article.topic === topic)
                    .map(({ title, article_img_url, comment_count, votes, article_id }) => (
                    <ArticleCard
                        key={article_id}
                        title={title}
                        article_img_url={article_img_url}
                        comment_count={comment_count}
                        votes={votes}
                        article_id={article_id}
                    />
                    ))}
                </ul>
            </>
        )}
    </section>
    )
}

export default Home