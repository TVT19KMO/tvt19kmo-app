export const SET_AUTH_LOADING = 'AUTH_LOADING';
export const SET_AUTH_SUCCESS = 'AUTH_SUCCESS';
export const SET_AUTH_ERROR = 'AUTH_ERROR';
export const LOGOUT = 'LOGUOUT';

export const setAuthLoading = (state) => {
  state.status = 'loading';
};

export const setAuthSuccess = (state, token) => {
  state.status = 'success';
  state.token = token;
};

export const setAuthError = (state) => {
  state.status = 'error';
};

export const logout = (state) => {
  state.token = null;
};

export const mutations = {
  [SET_AUTH_LOADING]: setAuthLoading,
  [SET_AUTH_SUCCESS]: setAuthSuccess,
  [SET_AUTH_ERROR]: setAuthError,
  [LOGOUT]: logout,
};

export const mutationTypes = {
  LOGOUT,
  SET_AUTH_LOADING,
  SET_AUTH_SUCCESS,
  SET_AUTH_ERROR,
};

export default mutations;
