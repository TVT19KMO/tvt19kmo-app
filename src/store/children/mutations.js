import { serializeTask } from './utils';

export const ASSIGN_TASK = 'ASSIGN_TASK';
export const GET_CHILDREN = 'GET_CHILDREN';
export const DELETE_TASK = 'DELETE_TASK';

export const getChildren = () => children.get();

export const assignTask = (state, task) => {
  const index = state.tasks.findIndex(({ id }) => id == task.id);
  console.log(index);
  state.tasks[index] = task;
};

export const deleteTask = (state, taskId) =>
  (state.tasks = state.tasks.filter(({ id }) => id != taskId));

export const mutationTypes = {
  GET_CHILDREN,
  ASSIGN_TASK,
  DELETE_TASK,
};

export const mutations = {
  [GET_CHILDREN]: getChildren,
  [ASSIGN_TASK]: assignTask,
  [DELETE_TASK]: deleteTask,
};

export default mutations;
