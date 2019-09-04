import API from '../index'

const config = {
    auth: {
      username: 'leonardonaoki',
      password: 'Leonaoki1@',
    },
  };
  

const getUserByLogin = (login = '') => API.get(`users/${login}`,config)

const getReposByLogin = (login = '') => API.get(`users/${login}/repos`,config)

const getMyProfile = () => API.get('users/leonardonaoki',config)

const getMyRepo = () => API.get('users/leonardonaoki/repos',config)

const getUserCommitsByID = (login = '',id = 0) => API.get(`repos/${login}/${id}/commits`,config)

export { getUserByLogin, getReposByLogin, getMyProfile, getMyRepo,getUserCommitsByID}