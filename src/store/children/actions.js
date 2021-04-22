// @ts-check

import api from '@/api/children';

import { mutationTypes } from './mutations';

export const GET_CHILDREN = 'GET_CHILDREN';
export const ASSIGN_TASK = 'ASSIGN_TASK';

export const getChildren = async ({ commit }) => {
  const { data: children } = await api.getChildren();
  commit(mutationTypes.SET_CHILDREN, children);
};

export const actionTypes = {
  GET_CHILDREN,
};

export const actions = {
  [GET_CHILDREN]: getChildren,
};

export default actions;
