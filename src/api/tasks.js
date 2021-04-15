import { api } from './setup';

export const getTasks = async () => api.get('tasks');

export const getTaskDifficulties = async () => api.get('task-difficulties');

export const getTaskRooms = async () => api.get('task-rooms');

export const deleteTask = async ({ id }) => api.delete(`tasks/${id}`);

export const updateTask = async (task) => api.put(`tasks/${task.id}`, task);

export const createTask = async (task) => api.post(`tasks`, task);

export default {
  getTasks,
  getTaskDifficulties,
  getTaskRooms,
  deleteTask,
  updateTask,
  createTask,
};
