import { api } from './setup';

export const getTasks = async () => api.get('tasks');

export const deleteTask = async ({ id }) => api.delete(`tasks/${id}`);

export default {
  getTasks,
};
