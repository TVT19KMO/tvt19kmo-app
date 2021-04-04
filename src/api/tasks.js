import { api } from './setup';

export const getTasks = async () => api.get('tasks');

export default {
  getTasks,
};
