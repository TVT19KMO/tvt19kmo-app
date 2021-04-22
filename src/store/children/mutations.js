export const SET_CHILDREN = 'SET_CHILDREN';

export const setChildren = (state, children) => {
  state.children = children;
};

export const mutationTypes = {
  SET_CHILDREN,
};

export const mutations = {
  [SET_CHILDREN]: setChildren,
};

export default mutations;
