import axios from 'axios';

/**
 * Setup axios for API.
 */
export const api = axios.create({
  baseURL: 'https://game-management-api.herokuapp.com/api/',
});

export default api;
