import API from '..';

const getUserByName = (login = '') => API.get(`users/${login}`);
const getUserRepos = (login = '') => API.get(`users/${login}/repos`);
const getCommitsRepos = (login = '', repo = '') => API.get(`repos/${login}/${repo}/commits`);

export { getUserByName, getUserRepos, getCommitsRepos }