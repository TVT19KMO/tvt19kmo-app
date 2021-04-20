// @ts-check

import {
  getTasks as getTasks_,
  deleteTask as deleteTask_,
  createTask as createTask_,
  updateTask as updateTask_,
  getTaskDifficulties as getTaskDifficulties_,
  getTaskRooms as getTaskRooms_,
  getAssignedTasks as getAssignedTasks_,
} from '@/api/tasks';

import { mutationTypes } from './mutations';

/**************
 * CONSTANTS **
 **************/

export const GET_TASKS = 'GET_TASKS';
export const GET_TASK_DIFFICULTIES = 'GET_TASK_DIFFICULTIES';
export const GET_TASK_ROOMS = 'GET_TASK_ROOMS';
export const GET_ASSIGNED_TASKS = 'GET_ASSIGNED_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_TASK = 'SAVE_TASK';

/**************
 * FUNCTIONS **
 **************/

/**
 * Fetches all tasks from the database and updates state.
 * @param {import('vuex').ActionContext} context
 */
export const getTasks = async ({ commit }) => {
  const { data: tasks } = await getTasks_();
  commit(mutationTypes.SET_TASKS, tasks);
};

/**
 * Saves the selected task int the database.
 * @param {import('vuex').ActionContext} context
 */
export const saveTask = async ({ dispatch, state: { selectedTask } }) => {
  if (selectedTask.id) {
    await dispatch(UPDATE_TASK, selectedTask);
  } else {
    await dispatch(CREATE_TASK, selectedTask);
  }
};

/**
 * Creates a new task in the database and updates state.
 * @param {import('vuex').ActionContext} context
 * @param {*} taskToCreate Task being created.
 */
export const createTask = async ({ commit }, taskToCreate) => {
  const { data: createdTask } = await createTask_(taskToCreate);
  commit(mutationTypes.ADD_TASK, createdTask);
};

/**
 * Updates a task in the database and updates state.
 * @param {import('vuex').ActionContext} context
 * @param {*} taskToUpdate Task being updated.
 */
export const updateTask = async ({ commit }, taskToUpdate) => {
  const { data: updatedTask } = await updateTask_(taskToUpdate);
  commit(mutationTypes.UPDATE_TASK, updatedTask);
};

/**
 * Deletes a task from database and updates state.
 * @param {import('vuex').ActionContext} context
 * @param {string} id The identifier of the task to delete.
 */
export const deleteTask = async ({ commit }, id) => {
  await deleteTask_({ id });
  commit(mutationTypes.DELETE_TASK, id);
};

/**
 * Fetches all task difficulties.
 * @param {import('vuex').ActionContext} context
 */
export const getTaskDifficulties = async ({ commit }) => {
  const { data: taskDifficulties } = await getTaskDifficulties_();
  commit(mutationTypes.SET_TASK_DIFFICULTIES, taskDifficulties);
};

/**
 * Fetches all task rooms.
 * @param {import('vuex').ActionContext} context
 */
export const getTaskRooms = async ({ commit }) => {
  const { data: taskRooms } = await getTaskRooms_();
  commit(mutationTypes.SET_TASK_ROOMS, taskRooms);
};

/**
 * Fetches all assigned tasks.
 */
export const getAssignedTasks = async ({ commit }) => {
  const { data: assignedTasks } = await getAssignedTasks_();
  commit(mutationTypes.SET_ASSIGNED_TASKS, assignedTasks);
};

export const actionTypes = {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_TASK_DIFFICULTIES,
  GET_TASK_ROOMS,
  GET_ASSIGNED_TASKS,
};

export const actions = {
  [GET_TASKS]: getTasks,
  [SAVE_TASK]: saveTask,
  [CREATE_TASK]: createTask,
  [UPDATE_TASK]: updateTask,
  [DELETE_TASK]: deleteTask,
  [GET_TASK_DIFFICULTIES]: getTaskDifficulties,
  [GET_TASK_ROOMS]: getTaskRooms,
  [GET_ASSIGNED_TASKS]: getAssignedTasks,
};

export default actions;
