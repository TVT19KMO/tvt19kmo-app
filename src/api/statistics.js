import { api } from './setup';

export const getStatistics = async () => await api.get('statistics/tasks');

export const getStatisticsForChild = async (childId) =>
  await api.get(`statistics/children/${childId}`);

export default {
  getStatistics,
  getStatisticsForChild,
};
