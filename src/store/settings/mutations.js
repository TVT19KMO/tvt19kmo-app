import _ from 'lodash';

export const SET_PASSWORD = 'SET_PASSWORD';

export const setPassword = (state, password) => {
  state.password = password;
};

export const mutationTypes = {
  SET_PASSWORD,
};

export const mutations = {
  [SET_PASSWORD]: setPassword,
};

export default mutations;
