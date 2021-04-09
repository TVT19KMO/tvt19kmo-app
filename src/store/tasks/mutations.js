export const SET_TASKS = 'SET_TASKS';
export const SELECT_TASK = 'SELECT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const setTasks = (state, tasks) => (state.tasks = tasks);

export const selectTask = (state, taskId) =>
  (state.selectedTask = { ...state.tasks.find(({ id }) => id == taskId) });

export const updateTask = (state, task) => state.tasks.find(({ id }) => id == task.id);

export const deleteTask = (state, taskId) =>
  (state.tasks = state.tasks.filter(({ id }) => id != taskId));

export const mutationTypes = {
  SET_TASKS,
  SELECT_TASK,
  UPDATE_TASK,
  DELETE_TASK,
};

export const mutations = {
  [SET_TASKS]: setTasks,
  [SELECT_TASK]: selectTask,
  [UPDATE_TASK]: updateTask,
  [DELETE_TASK]: deleteTask,
};

export default mutations;
