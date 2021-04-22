import { emptyTask } from './state';
import { serializeTask } from './utils';

export const ADD_TASK = 'ADD_TASK';
export const SET_TASKS = 'SET_TASKS';
export const SELECT_TASK = 'SELECT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASK_DIFFICULTIES = 'SET_TASK_DIFFICULTIES';
export const SET_ASSIGNED_TASKS = 'SET_ASSIGNED_TASKS';
export const UPDATE_ASSIGNED_TASK = 'UPDATE_ASSIGNED_TASK';
export const SET_TASK_ROOMS = 'SET_TASK_ROOMS';
export const CLEAR_TASK = 'CLEAR_TASK';

export const setTasks = (state, tasks) => (state.tasks = tasks);

export const selectTask = (state, taskId) => {
  const taskToSelect = state.tasks.find(({ id }) => id == taskId);
  state.selectedTask = serializeTask({ ...taskToSelect });
};

export const addTask = ({ tasks }, task) => tasks.push(task);

export const updateTask = (state, task) => {
  const index = state.tasks.findIndex(({ id }) => id == task.id);
  state.tasks[index] = task;
};

export const updateAssignedTask = (state, task) => {
  const index = state.assignedTasks.findIndex(({ id }) => id == task.id);
  state.assignedTasks[index] = task;
};

export const deleteTask = (state, taskId) => {
  state.tasks = state.tasks.filter(({ id }) => id != taskId);
};

export const clearTask = (state) => {
  state.selectedTask = { ...emptyTask };
};

export const setTaskDifficulties = (state, taskDifficulties) =>
  (state.taskDifficulties = taskDifficulties);

export const setTaskRooms = (state, taskRooms) => (state.taskRooms = taskRooms);

export const setAssignedTasks = (state, assignedTasks) => (state.assignedTasks = assignedTasks);

export const mutationTypes = {
  SET_TASKS,
  SELECT_TASK,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_TASK_DIFFICULTIES,
  SET_ASSIGNED_TASKS,
  UPDATE_ASSIGNED_TASK,
  SET_TASK_ROOMS,
  CLEAR_TASK,
};

export const mutations = {
  [ADD_TASK]: addTask,
  [SET_TASKS]: setTasks,
  [SELECT_TASK]: selectTask,
  [UPDATE_TASK]: updateTask,
  [DELETE_TASK]: deleteTask,
  [SET_TASK_DIFFICULTIES]: setTaskDifficulties,
  [SET_TASK_ROOMS]: setTaskRooms,
  [SET_ASSIGNED_TASKS]: setAssignedTasks,
  [UPDATE_ASSIGNED_TASK]: updateAssignedTask,
  [CLEAR_TASK]: clearTask,
};

export default mutations;
