import {
  getTasks as getTasks_,
  deleteTask as deleteTask_,
  updateTask as updateTask_,
  getTaskDifficulties as getTaskDifficulties_,
  getTaskRooms as getTaskRooms_,
} from '@/api/tasks';

import { mutationTypes } from './mutations';

export const GET_TASKS = 'GET_TASKS';
export const GET_TASK_DIFFICULTIES = 'GET_TASK_DIFFICULTIES';
export const GET_TASK_ROOMS = 'GET_TASK_ROOMS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const getTasks = async ({ commit }) => {
  const { data: tasks } = await getTasks_();
  commit(mutationTypes.SET_TASKS, tasks);
};

export const createTask = async ({ commit }) => {
  // TODO: Implement
};

export const updateTask = async ({ commit }, task) => {
  const { data: updatedTask } = await updateTask_(task);
  commit(mutationTypes.UPDATE_TASK, updatedTask);
};

export const deleteTask = async ({ commit }, id) => {
  await deleteTask_({ id });
  commit(mutationTypes.DELETE_TASK, id);
};

export const getTaskDifficulties = async ({ commit }) => {
  const { data: taskDifficulties } = await getTaskDifficulties_();
  commit(mutationTypes.SET_TASK_DIFFICULTIES, taskDifficulties);
};

export const getTaskRooms = async ({ commit }) => {
  const { data: taskRooms } = await getTaskRooms_();
  commit(mutationTypes.SET_TASK_ROOMS, taskRooms);
};

export const actionTypes = {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_TASK_DIFFICULTIES,
  GET_TASK_ROOMS,
};

export const actions = {
  [GET_TASKS]: getTasks,
  [CREATE_TASK]: createTask,
  [UPDATE_TASK]: updateTask,
  [DELETE_TASK]: deleteTask,
  [GET_TASK_DIFFICULTIES]: getTaskDifficulties,
  [GET_TASK_ROOMS]: getTaskRooms,
};

export default actions;
