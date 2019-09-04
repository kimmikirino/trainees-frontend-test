import API from '..';
import axios from 'axios';

const getUser = () => API.get('/users/kariinagomes');

const getUserReposByURL = (url = '') => axios.get(url).then(
  response => response.data
)

export { getUser, getUserReposByURL };