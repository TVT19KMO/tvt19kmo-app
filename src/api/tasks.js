import { api } from './setup';

export const getTasks = async () => api.get('tasks');

export const getTaskDifficulties = async () => api.get('task-difficulties');

export const deleteTask = async ({ id }) => api.delete(`tasks/${id}`);

export const updateTask = async (task) => api.put(`tasks/${task.id}`, task);

export default {
  getTasks,
};
