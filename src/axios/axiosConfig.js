import axios from 'axios'
import { getUser } from '../functions/helperFunctions'

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Authorization: getUser() }
})

export const getAllUsers = async () => {
    try {
        return await axiosConfig.get('/api/users/')
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (userId) => {
    try {
        return await axiosConfig.get(`/api/users/${userId}`)
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (user) => {
    try {
        return await axiosConfig.put(`/api/users/${user.userId}`, user)
    } catch (error) {
        console.log(error)
    }
}

export const getAllDemos = async () => {
    try {
        return await axiosConfig.get('/api/demos')
    } catch (error) {
        console.log(error)
    }
}

export const getDemoById = async (demoId) => {
    try {
        return await axiosConfig.get(`/api/demos/${demoId}`)
    } catch (error) {
        console.log(error)
    }
}

export const getAllDemosByUserId = async (userId) => {
    try {
        return await axiosConfig.get(`/api/users/${userId}/demos`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteDemoById = async (demoId) => {
    try {
        return await axiosConfig.delete(`/api/demos/${demoId}`)
    } catch (error) {
        console.log(error)
    }
}

export const addComment = async (comment) => {
    try {
        return await axiosConfig.post('/api/comments/', comment)
    } catch (error) {
        console.log(error)
    }
}

export const updateComment = async (comment) => {
    try {
        return await axiosConfig.put(
            `/api/comments/${comment.commentId}`, comment)
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment = async (commentId) => {
    try {
        return await axiosConfig.delete(`/api/comments/${commentId}`)
    } catch (error) {
        console.log(error)
    }
}



