import axios from 'axios';

const isDevMode = import.meta.env.DEV;

// Setup axios for api request handling.
export const api = axios.create({
  baseURL: isDevMode
    ? 'http://localhost:5000/api'
    : 'https://game-management-api.herokuapp.com/api/',
});

// Get stored auth token, if one is stored.
const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default api;
