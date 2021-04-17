// @ts-check

import {
    getChildren as getChildren_,
    assignTask as assignTask_,
    completeTask as completeTask,
} from '@/api/children';

import { mutationTypes } from './mutations';

export const GET_CHILDREN = 'GET_CHILDREN';
export const ASSIGN_TASK = 'ASSIGN_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const getChildren = async ({ commit }) => {
    const { data: children } = await getChildren_();
    commit(mutationTypes.SET_CHILDREN, children);
};

export const assignTask = async ({ dispatch, state: { selectedTask } }) => {
    const { data: task } = await assignTask_();
    await dispatch(ASSIGN_TASK, selectedTask);
}

export const completeTask = async ({ commit }, id) => {
    await completeTask_({ id });
    commit(mutationTypes.DELETE_TASK, id);
  };

  export const actionTypes = {
    GET_CHILDREN,
    ASSIGN_TASK,
    DELETE_TASK,
  };
  
  export const actions = {
    [GET_CHILDREN]: getChildren,
    [ASSIGN_TASK]: assignTask,
    [DELETE_TASK]: deleteTask,
  };
  
  export default actions;