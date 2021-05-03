// @ts-check

import api from '@/api/settings';
import { mutationTypes } from './mutations';

export const SET_PASSWORD = 'SET_PASSWORD';


export const setPassword = async ({ commit }, passwordToChange) => {
  const { data: password } = await api.changePassword(passwordToChange);
  commit(mutationTypes.SET_PASSWORD, password);
  return { password };
};


export const actionTypes = {
  SET_PASSWORD,
};

export const actions = {
  [SET_PASSWORD]: setPassword,
};

export default actions;