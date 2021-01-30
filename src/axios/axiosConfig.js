import axios from 'axios'
import { getUser } from '../functions/helperFunctions'

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getDemoByUserId = async (demoId) => {
    const { accessToken } = getUser()
    try {
        return await axiosConfig.get(`/api/demos/${demoId}`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }

}

export const getAllDemosByUserId = async (userId) => {
    const { accessToken } = getUser()
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


