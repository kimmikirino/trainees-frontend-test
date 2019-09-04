import API from '..'

const getUserByName = (login = '') => API.get(`users/${login}`)
const getUserRepos = (login = '') => API.get(`users/${login}/repos`)

export { getUserByName, getUserRepos }