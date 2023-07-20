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

export const getArticleById = (id) => {
    return api.get(`/articles/${id}`)
    .then((res) => {
        return res.data.article
    })
}

export const getCommentsByArticleId = (id) => {
    return api.get(`/articles/${id}/comments`)
    .then((res) => {
        return res.data.comment
    })
}
