import axios from 'axios';

// github API
const route = 'https://api.github.com/';

const API = axios.create({
  baseURL: route
})

export default API;