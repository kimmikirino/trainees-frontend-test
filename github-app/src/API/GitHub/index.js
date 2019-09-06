import API from '../index'

    const getUsersByName = (userName) => API.get('users/'+userName)
    const getMyRepo = () => API.get(`users/StefanieLibarino/repos`)
export { getUsersByName, getMyRepo };