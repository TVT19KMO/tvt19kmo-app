// @ts-check

import api from '@/api/children';
import { mutationTypes } from './mutations';

export const GET_CHILDREN = 'GET_CHILDREN';
export const ADD_CHILD = 'ADD_CHILD';

export const getChildren = async ({ commit }) => {
  const { data: children } = await api.getChildren();
  commit(mutationTypes.SET_CHILDREN, children);
  return { children };
};

export const addChild = async ({ commit }, childToAdd) => {
  const { data: child } = await api.addChild(childToAdd);
  commit(mutationTypes.ADD_CHILD, child);
  return { child };
};

export const actionTypes = {
  ADD_CHILD,
  GET_CHILDREN,
};

export const actions = {
  [GET_CHILDREN]: getChildren,
  [ADD_CHILD]: addChild,
};

export default actions;
