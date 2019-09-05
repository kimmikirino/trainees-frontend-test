import API from '..';
import axios from 'axios';

// get "default" user
const getUser = () => API.get('/users/kariinagomes');

// get user by username (input field)
const getUserByUsername = (username = '') => API.get(`/users/${username}`);

// get user repos (using the url returned in user info - user.repos_url)
const getUserReposByURL = (url = '') => axios.get(url).then(
  response => response.data
)

// get commits related to the repo; search by username and repository name
const getUserRepoCommits = (username, nameRepo = '') => 
   API.get(`/repos/${username}/${nameRepo}/commits`);

export { getUser, getUserByUsername, getUserReposByURL, getUserRepoCommits };