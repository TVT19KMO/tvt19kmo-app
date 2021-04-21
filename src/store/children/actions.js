// @ts-check

import { getChildren as getChildren_, assignTask as assignTask_ } from '@/api/children';

import { mutationTypes } from './mutations';

export const GET_CHILDREN = 'GET_CHILDREN';
export const ASSIGN_TASK = 'ASSIGN_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const getChildren = async ({ commit }) => {
  const { data: children } = await getChildren_();
  commit(mutationTypes.SET_CHILDREN, children);
};

// export const deleteTask = async ({ commit }, id) => {
//     await deleteTask_({ id });
//     commit(mutationTypes.DELETE_TASK, id);
//   };

export const actionTypes = {
  GET_CHILDREN,
  DELETE_TASK,
};

export const actions = {
  [GET_CHILDREN]: getChildren,
  // [DELETE_TASK]: deleteTask,
};

export default actions;
