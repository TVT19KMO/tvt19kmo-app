import { api } from './setup';

export const getStatistics = async () => await api.get('statistics/tasks');

export default {
  getStatistics,
};
