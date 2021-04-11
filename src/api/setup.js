import axios from 'axios';

const isDevMode = import.meta.env.DEV;

/**
 * Setup axios for API.
 */
export const api = axios.create({
  baseURL: isDevMode
    ? 'http://localhost:5000/api'
    : 'https://game-management-api.herokuapp.com/api/',
});

export default api;
