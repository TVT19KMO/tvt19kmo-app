import state from './state';
import { mutations, mutationTypes } from './mutations';
import { actions, actionTypes } from './actions';

export const types = {
  ...actionTypes,
  ...mutationTypes,
};

export const store = {
  state,
  mutations,
  actions,
};

export default store;
