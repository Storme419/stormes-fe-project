import {useEffect, useState} from 'react'
import Home from '../Pages/Home'
import { getArticles } from '../api'
import { Routes, Route } from 'react-router-dom'

const MainSection = () => {
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
            </Routes>
        </main>
    
}

export default MainSection