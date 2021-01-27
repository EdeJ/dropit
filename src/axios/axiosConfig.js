import axios from 'axios'
import { getUser } from '../functions/helperFunctions'

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const getDemoByUserId = async (demoId) => {
    const { accessToken } = await getUser()
    try {
        return await axiosConfig.get(`/api/demos/${demoId}`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }

}

export const getAllDemosByUserId = async (userId) => {
    const { accessToken } = await getUser()
    try {
        return await axiosConfig.get(`/api/demos/by-user/${userId}`, { headers: { Authorization: accessToken } })
    } catch (error) {
        console.log(error)
    }

}


