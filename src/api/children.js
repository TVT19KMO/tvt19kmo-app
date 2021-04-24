import { api } from './setup';

export const getChildren = async () => await api.get('children');

export const addChild = async (child) => await api.post('children', child);

export const removeChild = async (id) => await api.delete(`children/${id}`);

export const removeDevice = async (id) => await api.post(`children/${id}/remove-device`);

export default {
  addChild,
  removeChild,
  removeDevice,
  getChildren,
};
