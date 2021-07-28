import { api } from './setup';

export const changePassword = async (user) => await api.post('settings/password', user);

export default {
  changePassword,
};
