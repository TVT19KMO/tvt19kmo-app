import { api } from './setup';

export const registerUser = async (user) => api.post('users/register', user);

export const authenticateUser = async (user) => api.post('users/token', user);

export const loginUser = async (user) => api.post('users/login', user);

export default {
  registerUser,
};
