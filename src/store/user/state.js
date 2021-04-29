export const state = {
  id: localStorage.getItem('user-id'),
  token: localStorage.getItem('user-token'),
  status: '',
  userData: null,
};

export default state;
