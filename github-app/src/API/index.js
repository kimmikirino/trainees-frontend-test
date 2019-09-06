import axios from 'axios'

  const route = 'https://api.github.com/'
  const API = axios.create({
    baseURL: route

  })

export default API