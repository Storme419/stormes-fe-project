import Home from '../Pages/Home'
import ArticlePage from '../Pages/ArticlePage'
import { getArticles } from '../api'
import {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'

const MainSection = ({user}) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res)
            setLoading(false)
        }).catch(console.log)
    }, [])

    return loading 
    ? <h2 id='loading-msg'>Loading...</h2> : 
    
        <main>
            <Routes>
                <Route path="/" element={<Home articles={articles}/>} />
                <Route path="/articles/:id" element={<ArticlePage user={user}/>} />
            </Routes>
        </main>
    
}

export default MainSection