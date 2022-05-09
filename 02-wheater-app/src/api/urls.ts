import axios from "axios"

export const url = process.env.API_REACT_WEATHER!

export const rest = axios.create(
    { baseURL: url, timeout: 5000 }
)