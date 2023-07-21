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

export const patchVotes = (id, userVotes) => {
    const patchRequestBody = {
        inc_votes: userVotes === 0 ? 1 : -1
    }
    return api.patch(`/articles/${id}`, patchRequestBody)
    .then((res) => {
        return res.data.article
    })
}

export const postComment = (id, username, body) => {
    const postRequestBody = {
        username: username,
        body: body
    }
    return api.post(`/articles/${id}/comments`, postRequestBody)
    .then((res) => {
        return res.data.comment
    })
}