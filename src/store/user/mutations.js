export const SET_AUTH_LOADING = 'AUTH_LOADING';
export const SET_AUTH_SUCCESS = 'AUTH_SUCCESS';
export const SET_AUTH_ERROR = 'AUTH_ERROR';
export const SET_BALANCE = 'SET_BALANCE';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGUOUT';

export const setAuthLoading = (state) => {
  state.status = 'loading';
};

export const setBalance = (state, balance) => {
  state.userData.balance = balance;
};

export const setAuthSuccess = (state, token) => {
  state.status = 'success';
  state.token = token;
};

export const setAuthError = (state) => {
  state.status = 'error';
};

export const setUser = (state, user) => {
  state.userData = user;
};

export const logout = (state) => {
  state.token = null;
  state.userData = null;
};

export const mutations = {
  [SET_USER]: setUser,
  [SET_AUTH_LOADING]: setAuthLoading,
  [SET_AUTH_SUCCESS]: setAuthSuccess,
  [SET_AUTH_ERROR]: setAuthError,
  [SET_BALANCE]: setBalance,
  [LOGOUT]: logout,
};

export const mutationTypes = {
  LOGOUT,
  SET_AUTH_LOADING,
  SET_AUTH_SUCCESS,
  SET_AUTH_ERROR,
  SET_USER,
  SET_BALANCE,
};

export default mutations;
