import API from '../index'
  
const getUserByLogin = (login = '') => API.get(`users/${login}`)

const getReposByLogin = (login = '') => API.get(`users/${login}/repos`)

const getMyProfile = () => API.get('users/leonardonaoki')

const getMyRepo = () => API.get('users/leonardonaoki/repos')

const getUserCommitsByID = (login = '',id = 0) => API.get(`repos/${login}/${id}/commits`)

export { getUserByLogin, getReposByLogin, getMyProfile, getMyRepo,getUserCommitsByID}