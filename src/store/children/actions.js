// @ts-check

import api from '@/api/children';
import { mutationTypes } from './mutations';

export const GET_CHILDREN = 'GET_CHILDREN';
export const ADD_CHILD = 'ADD_CHILD';
export const REMOVE_CHILD_DEVICE = 'REMOVE_CHILD_DEVICE';

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

export const removeChildDevice = async ({ commit }, id) => {
  await api.removeDevice(id);
  commit(mutationTypes.REMOVE_CHILD_DEVICE, id);
};

export const actionTypes = {
  ADD_CHILD,
  GET_CHILDREN,
  REMOVE_CHILD_DEVICE,
};

export const actions = {
  [GET_CHILDREN]: getChildren,
  [ADD_CHILD]: addChild,
  [REMOVE_CHILD_DEVICE]: removeChildDevice,
};

export default actions;
