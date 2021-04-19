import { api } from './setup';

export const registerUser = async (user) => await api.post('users/register', user);

export const loginUser = async (user) => await api.post('users/login', user);

export const getInfo = async () => await api.get('users/info');

export default {
  registerUser,
  loginUser,
  getInfo,
};
