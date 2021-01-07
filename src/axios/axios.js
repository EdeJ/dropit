import axios from 'axios'

export const axiosConfigured = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

