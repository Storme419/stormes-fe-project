import axios from 'axios'

const api = axios.create({
    baseURL: 'https://stormes-be-project.onrender.com/api'
})

export const getArticles = () => {
    return api.get('/articles')
    .then((res) => {
        return res.data.articles
    })
}

export const getTopics = () => {
    return api.get('/topics')
    .then((res) => {
        return res.data.topics
    })
}
