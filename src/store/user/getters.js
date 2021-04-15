export const getters = {
  isAuthenticated: ({ token }) => !!token,
  authStatus: ({ status }) => status,
};

export default getters;
