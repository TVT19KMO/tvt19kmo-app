import { api } from './setup';

export const getChildren = async () => api.get('children');

export const assignTask = async ({ id }) => api.get(`children/${id}/tasks/${id}`);

export const deleteTask = async ({ id }) => api.delete(`children/${id}/tasks/${id}`);

export default { 
  getChildren,
  assignTask,
  deleteTask,
};