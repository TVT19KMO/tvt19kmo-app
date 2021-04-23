import { api } from './setup';

export const getChildren = async () => await api.get('children');

export const addChild = async (child) => await api.post('children', child);

export default {
  addChild,
  getChildren,
};
