// @ts-check

import api from '@/api/tasks';

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
export const ASSIGN_TASK = 'ASSIGN_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

/**************
 * FUNCTIONS **
 **************/

/**
 * Fetches all tasks from the database and updates state.
 * @param {import('vuex').ActionContext} context
 */
export const getTasks = async ({ commit }) => {
  const { data: tasks } = await api.getTasks();
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
  const { data: createdTask } = await api.createTask(taskToCreate);
  commit(mutationTypes.ADD_TASK, createdTask);
};

/**
 * Updates a task in the database and updates state.
 * @param {import('vuex').ActionContext} context
 * @param {*} taskToUpdate Task being updated.
 */
export const updateTask = async ({ commit }, taskToUpdate) => {
  const { data: updatedTask } = await api.updateTask(taskToUpdate);
  commit(mutationTypes.UPDATE_TASK, updatedTask);
};

/**
 * Deletes a task from database and updates state.
 * @param {import('vuex').ActionContext} context
 * @param {string} id The identifier of the task to delete.
 */
export const deleteTask = async ({ commit }, id) => {
  await api.deleteTask({ id });
  commit(mutationTypes.DELETE_TASK, id);
};

/**
 * Fetches all task difficulties.
 * @param {import('vuex').ActionContext} context
 */
export const getTaskDifficulties = async ({ commit }) => {
  const { data: taskDifficulties } = await api.getTaskDifficulties();
  commit(mutationTypes.SET_TASK_DIFFICULTIES, taskDifficulties);
};

/**
 * Fetches all task rooms.
 * @param {import('vuex').ActionContext} context
 */
export const getTaskRooms = async ({ commit }) => {
  const { data: taskRooms } = await api.getTaskRooms();
  commit(mutationTypes.SET_TASK_ROOMS, taskRooms);
};

/**
 * Fetches all assigned tasks.
 * @param {import('vuex').ActionContext} context
 */
export const getAssignedTasks = async ({ commit }) => {
  const { data: assignedTasks } = await api.getAssignedTasks();
  commit(mutationTypes.SET_ASSIGNED_TASKS, assignedTasks);
};

/**
 * Assigns task to children.
 * @param {import('vuex').ActionContext} context
 */
export const assignTask = async ({ commit }, assignment) => {
  const { data } = await api.assignTask(assignment);
  return { ...data };
};

/**
 * Completes an assigned task.
 * @param {import('vuex').ActionContext} context
 */
export const completeTask = async ({ commit }, id) => {
  const { data: completedTask } = await api.completeTask(id);
  commit(mutationTypes.UPDATE_ASSIGNED_TASK, completedTask);
};

/***********
 * EXPORTS *
 ***********/

export const actionTypes = {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  ASSIGN_TASK,
  UPDATE_TASK,
  GET_TASK_DIFFICULTIES,
  GET_TASK_ROOMS,
  GET_ASSIGNED_TASKS,
  COMPLETE_TASK,
};

export const actions = {
  [GET_TASKS]: getTasks,
  [SAVE_TASK]: saveTask,
  [ASSIGN_TASK]: assignTask,
  [CREATE_TASK]: createTask,
  [UPDATE_TASK]: updateTask,
  [DELETE_TASK]: deleteTask,
  [COMPLETE_TASK]: completeTask,
  [GET_TASK_DIFFICULTIES]: getTaskDifficulties,
  [GET_TASK_ROOMS]: getTaskRooms,
  [GET_ASSIGNED_TASKS]: getAssignedTasks,
};

export default actions;
