import { registerUser as register, loginUser as login, getInfo } from '@/api';
import api from '@/api/setup';
import { SET_AUTH_SUCCESS, LOGOUT, SET_AUTH_LOADING, SET_USER } from './mutations';

export const FETCH_INFO = 'FETCH_INFO';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const updateAuthData = (token, id) => {
  localStorage.setItem('user-id', id);
  localStorage.setItem('user-token', token);
  api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

/**
 * Authenticates the user to user the app/API.
 * @param {import("vuex").ActionContext} context
 * @param {*} user
 */
export const registerUser = async ({ commit, dispatch }, user) => {
  const { data } = await register(user);
  updateAuthData(data.token);
  commit(SET_AUTH_SUCCESS, data.token);
  await dispatch(FETCH_INFO);
};

export const loginUser = async ({ commit, dispatch }, user) => {
  const { data } = await login(user);
  updateAuthData(data.token, data.id);
  commit(SET_AUTH_SUCCESS, data.token, data.id);
  await dispatch(FETCH_INFO);
};

export const fetchInfo = async ({ commit }) => {
  const { data } = await getInfo();
  commit(SET_USER, data.user);
};

/**
 * Logouts the user form the api.
 */
export const logoutUser = async ({ commit }) => {
  commit(LOGOUT);
  localStorage.removeItem('user-token');
  delete api.defaults.headers.common['Authorization'];
};

export const actionTypes = {
  REGISTER_USER,
  LOGOUT_USER,
  LOGIN_USER,
  FETCH_INFO,
};

export const actions = {
  [REGISTER_USER]: registerUser,
  [LOGIN_USER]: loginUser,
  [LOGOUT_USER]: logoutUser,
  [FETCH_INFO]: fetchInfo,
};

export default actions;
