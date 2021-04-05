import { getTasks as getTasks_, deleteTask as deleteTask_ } from '@/api/tasks';
import { mutationTypes } from './mutations';

export const GET_TASKS = 'GET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';

export const getTasks = async ({ commit }) => {
  const { data: tasks } = await getTasks_();
  commit(mutationTypes.SET_TASKS, tasks);
};

export const deleteTask = async ({ commit }, id) => {
  await deleteTask_({ id });
  commit(mutationTypes.DELETE_TASK, id);
};

export const actionTypes = {
  GET_TASKS,
  DELETE_TASK,
};

export const actions = {
  [GET_TASKS]: getTasks,
  [DELETE_TASK]: deleteTask,
};

export default actions;
