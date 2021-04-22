import { api } from './setup';

export const getChildren = async () => await api.get('children');

export default {
  getChildren,
};
