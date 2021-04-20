import { serializeTask } from './utils';

export const ASSIGN_TASK = 'ASSIGN_TASK';
export const GET_CHILDREN = 'GET_CHILDREN';
export const getChildren = () => children.get();

export const assignTask = (state, task) => {
  const index = state.tasks.findIndex(({ id }) => id == task.id);
  console.log(index);
  state.tasks[index] = task;
};

export const mutationTypes = {
  GET_CHILDREN,
  ASSIGN_TASK,
};

export const mutations = {
  [GET_CHILDREN]: getChildren,
  [ASSIGN_TASK]: assignTask,
};

export default mutations;
