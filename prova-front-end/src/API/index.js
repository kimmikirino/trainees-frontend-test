import axios from 'axios'

const URL = 'https://api.github.com'

const API = axios.create({
    baseURL: URL
})

export default API