import axios from 'axios';

/**
 * Setup axios for API.
 */
export const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export default api;
