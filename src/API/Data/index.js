import API from '..'

const getUserByName = () => API.get(`users/LucasMSnts`)
//const getUserByName = (user = '') => API.get(`users/${user}`)
const getUserRepos = (user = '') => API.get(`users/${user}/repos`)


export { getUserByName, getUserRepos }