import axios from 'axios'
import { getUser } from '../functions/helperFunctions'

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getAllDemos = async () => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.get(`/api/demos`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }
}

export const getDemoById = async (demoId) => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.get(`/api/demos/${demoId}`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async () => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.get(`/api/users/`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }
}

export const getAllDemosByUserId = async (userId) => {
    const { accessToken } = getUser()
    // console.log(accessToken)
    try {
        return await axiosConfig.get(`/api/users/${userId}/demos`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }
}

export const deleteDemoById = async (demoId) => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.delete(`/api/demos/${demoId}`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }
}

export const addComment = async (comment) => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.post(
            `/api/comments/`,
            comment,
            {
                headers: { Authorization: accessToken },
            })
    } catch (error) {
        console.log(error)
    }
}

export const updateComment = async (comment) => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.put(
            `/api/comments/${comment.commentId}`,
            comment,
            {
                headers: { Authorization: accessToken },
            })
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment = async (commentId) => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.delete(
            `/api/comments/${commentId}`,
            {
                headers: { Authorization: accessToken },
            })
    } catch (error) {
        console.log(error)
    }
}



