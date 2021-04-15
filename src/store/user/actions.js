import { authenticateUser as authenticate, loginUser as login } from '@/api';
import api from '@/api/setup';
import { SET_AUTH_SUCCESS, LOGOUT, SET_AUTH_LOADING } from './mutations';

export const REGISTER_USER = 'REGISTER_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';

/**
 * Authenticates the user to user the app/API.
 * @param {import("vuex").ActionContext} context
 * @param {*} user
 */
export const authenticateUser = async ({ commit, dispatch }, user) => {
  try {
    console.log(ree);
    commit(SET_AUTH_LOADING);
    const { data: user } = await authenticate(user);
    localStorage.setItem('user-token', user.token);
    commit(SET_AUTH_SUCCESS, user.token);
  } catch (err) {
    commit(SET_AUTH_ERROR, err);
    localStorage.removeItem('user-token');
  }
};

export const loginUser = async ({ commit, dispatch }, user) => {
  //try {
  const {
    data: { token },
  } = await login(user);
  console.log(token);
  localStorage.setItem('user-token', token);
  commit(SET_AUTH_SUCCESS, token);
  /** } catch (err) {
    localStorage.removeItem('user-token');
  }*/
};

/**
 * Logouts the user form the appi.
 */
export const logoutUser = async ({ commit, dispatch }) => {
  commit(LOGOUT);
  localStorage.removeItem('user-token');
  delete api.defaults.headers.common['Authorization'];
};

export const actionTypes = {
  REGISTER_USER,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  LOGIN_USER,
};

export const actions = {
  [LOGIN_USER]: loginUser,
  [AUTHENTICATE_USER]: authenticateUser,
  [LOGOUT_USER]: logoutUser,
};

export default actions;
