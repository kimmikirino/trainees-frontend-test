import API from '..'

// const getUserById = (id = '') => API.get(`user/${id}`);
const getUserByLogin = (login = '') => API.get(`users/${login}`);
// const getUser = () => API.get('user/');
// const getUserByUrl = (url = '') => API.get(`${url}/`);
// const getSpecieByUrl = (url = '') => axios.get(url);


// export { getUser, getUserById, getUserByUrl }
export { getUserByLogin }