import { api } from './setup';

export const getChildren = async () => await api.get('children');

export const assignTask = async () => Promise.resolve();

export default {
  getChildren,
};
