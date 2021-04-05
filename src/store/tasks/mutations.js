export const SET_TASKS = 'SET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';

export const setTasks = (state, tasks) => (state.tasks = tasks);

export const deleteTask = (state, id) =>
  (state.tasks = state.tasks.filter((task) => task.id != id));

export const mutationTypes = {
  SET_TASKS,
  DELETE_TASK,
};

export const mutations = {
  [SET_TASKS]: setTasks,
  [DELETE_TASK]: deleteTask,
};

export default mutations;
