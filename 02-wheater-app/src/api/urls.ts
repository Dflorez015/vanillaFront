import axios from "axios"

export const url = process.env.REACT_APP_WEATHER!

export const rest = axios.create(
    {
        baseURL: url, timeout: 5000, headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    }
)