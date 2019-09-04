import API from '..'
import Axios from 'axios';

const getUserById = (id = '') => API.get(`user/${id}`);
const getUserByLogin = (login = '') => API.get(`users/${login}`);
const getRepositoriesByUrl = (url = '') => Axios.get(url);

export { getUserById, getUserByLogin, getRepositoriesByUrl }