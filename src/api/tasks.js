import { api } from './setup';

export const getTasks = async () => await api.get('tasks');

export const getTaskDifficulties = async () => await api.get('task-difficulties');

export const getTaskRooms = async () => await api.get('task-rooms');

export const getAssignedTasks = async () => await api.get('assigned-tasks');

export const deleteTask = async ({ id }) => await api.delete(`tasks/${id}`);

export const updateTask = async (task) => await api.put(`tasks/${task.id}`, task);

export const createTask = async (task) => await api.post('tasks', task);

export default {
  getTasks,
  getTaskDifficulties,
  getAssignedTasks,
  getTaskRooms,
  deleteTask,
  updateTask,
  createTask,
};
