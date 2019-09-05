import API from '..';
import axios from 'axios';

const getUser = () => API.get('/users/kariinagomes');

const getUserByUsername = (username = '') => API.get(`/users/${username}`);

const getUserReposByURL = (url = '') => axios.get(url).then(
  response => response.data
)

const getUserRepoCommits = (username, nameRepo = '') => 
   API.get(`/repos/${username}/${nameRepo}/commits`);


// const getUserRepoCommits = (full_name = '') => 
//   API.get(`/repos/${full_name}/commits`);

export { getUser, getUserByUsername, getUserReposByURL, getUserRepoCommits };